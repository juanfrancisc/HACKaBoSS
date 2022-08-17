const getDB = require("../../db/getDB");
const { generateError, validate } = require("../../helpers");
const newProductSchema = require("../../schemas/newProductSchema");

const newProduct = async (req, res, next) => {

    let connetcion;

    try {
        connetcion = await getDB();

        // Recuperamos los datos del body
        const { name, price, description } = req.body;

        // Necesitamos el id del usuario para asignarlo al producto como propietario del mismo
        const idReqUser = req.userAuth.id;

        // Validamos los datos que recibimos usando el schema utilizando la funcion validate desde el fichero helpers
        await validate(newProductSchema, req.body);

        /** Utilizando el schema esto no seria necesario 
        // Si falta aulguno de los campos obligatorios, mostramos un error
        if (!name || !price){
            throw generateError('Debes indicar los campos obligatorios', 400);
        }*/

        // Si nos indica el nombre y el precio, insertamos el nuevo producto
        await connetcion.query(
            `INSERT INTO product (name, precio, descripcion, createdAt, idUser)
            VALUES (?,?,?,?,?)`,[name, price, description, new Date(), idReqUser]
            );

        // Enviamos respuesta
        res.send({
            status: 'OK',
            message: 'Producto insertado con éxito!',
        });

    } catch (error) {
        next(error)

    } finally {
        if (connetcion) connetcion.release();
    }

};

// Exportamos la funcion
module.exports = newProduct;