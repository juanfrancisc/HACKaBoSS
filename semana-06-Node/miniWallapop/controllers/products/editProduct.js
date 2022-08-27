//requerimos la BBDD
const getDB = require("../../db/getDB");
const { generateError } = require("../../helpers");

const editProduct = async (req, res, next) => {

    let connection;

    try {
        connection = await getDB();

        //Recuperamos el id de productos desde los parametros de ruta
        const { idProduct } = req.params

        //Recuperamos datos desde el body
        const { name, price, description } = req.body;

        //Si no envia nada lanzamos error
        if (!name && !price && !description) {
            throw generateError('Si no modificas nada para que entras', 400)
        }

        //Selecionamos los datos antiguos del producto
        const [product] = await connection.query(
            `SELECT name, precio, descripcion FROM product WHERE id = ?`, [idProduct]
        );
        
        //Actualizamos la tabla con los nuevo dastos
        await connection.query(
            `UPDATE product SET name = ?, precio = ?, descripcion = ? WHERE id = ?`,[name || product[0].name, price || product[0].nombre, description || product[0].descripcion, idProduct]
        );

        res.send({
            status: 'OK',
            message: `El producto con ${idProduct} ha sido modificado con éxito!`,
        })


    } catch (error) {
        next(error);

    } finally {
        if (connection) connection.release();

    }

};


//Exportamos la funcion
module.exports = editProduct;