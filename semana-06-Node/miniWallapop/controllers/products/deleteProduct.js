const getDB = require("../../db/getDB");
const { deletePhoto } = require("../../helpers");
const deleteProduct = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();

        //Recuperamos el id del producto
        const { idProduct } = req.params;

        //Primero debemos de eliminar las fotos del producto
        //Para ello las localizamos por su nombre y los añadimos a un array
        const [photos] = await connection.query(
            `SELECT name FROM product_photo WHERE idProduct = ?`,[idProduct]
        );

        //Seguidamente recorresmos ese array (photos) y eliminamos cada unos de ellas
        for (let i = 0; i < photos.length; i++) {
            //En cada vuelta accedemos a la propiedad name de cada foto
            //Y esta a su vez la pasamos a la funcion deletePhoto
            await deletePhoto(photos[i].name, 1);
        }

        //Una vez borradas las fotos del servidor, eliminamos los campos de la base de datos
        await connection.query(
            `DELETE FROM product_photo WHERE idProduct = ?`,[idProduct]
        );

        //Eliminamos el producto
        await connection.query(
            `DELETE FROM product WHERE id = ?`,[idProduct]
        );

        res.send({
            status: 'OK',
            message: `El producto con id ${idProduct} ha sido eliminado con éxito!`,
        });

    } catch (error) {
        next(error)

    } finally {
        if (connection) connection.release();
    }
}


module.exports = deleteProduct;