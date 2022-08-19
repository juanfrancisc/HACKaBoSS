const getDB = require("../../db/getDB");
const { generateError, savePhoto } = require("../../helpers");

const addProductPhoto = async (req, res, next) => {

    let connection;

    try {
        connection = await getDB();

        const { idProduct } = req.params;
        //console.log(idProduct)

        //Vamos a permitir al usuario subir un maximo de 5 fotos de producto
        //Primero comprobamos si ya hay 5 o mas fotos en la BBDD ya guardadas
        const [photos] = await  connection.query(
            `SELECT * FROM product_photo WHERE idProduct = ?`, [idProduct]
        );
        //console.log(`SELECT * FROM product_photo WHERE idProduct = ?`, [idProduct])

        //Si ya hay 5 o mas fotos, mostramos un error
        if (photos.length >= 5) {
            throw generateError('El producto ya tiene 5 o mas fotos, no se permiten más', 409)
        }

        //Si no indica una foto nueva, lanzamos un error
        if (!req.files || !req.files.productPhoto){
            throw generateError('No se ha indicado ninguna imagen', 400);
        }
        
        //Usamos la funcion savePhoto para guardar la imagen del producto (0 avatar y 1 producto)
        const photoName = await savePhoto(req.files.productPhoto, 1);

        // Guardar en le BBDD el nombre de la imagen
        await connection.query(
            `INSERT INTO product_photo (name, idProduct) VALUES (?,?)`, [photoName, idProduct]
        );

        //Si todo OK
        res.send({
            status: 'OK',
            message: 'Foto de producto insertada con éxito!'
        });
    } catch (error) {
        next(error);

    } finally {
        if (connection) connection.release()
    }

}

module.exports = addProductPhoto;