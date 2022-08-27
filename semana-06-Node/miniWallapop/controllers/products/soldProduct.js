const getDB = require("../../db/getDB");
const { generateError } = require("../../helpers");

const soldProduct = async (req, res, next) => {

    let connection;

    try {
        connection = await getDB();

        //Recuperamos el id del producto
        const { idProduct } = req.params;

        //Antes de marcar el producto com vendido, comprobamos que esta en venta
        const [products] = await connection.query(
            `SELECT sold FROM product WHERE id = ?`,[idProduct]
        );

        // Si ya esta vendido mostramos un error
        if (products[0].sold) {
            throw generateError ('El producto ya consta como vendido', 409)
        }

        //Marcamos el producto como vendido
        await connection.query(
            `UPDATE product SET sold = true WHERE id = ?`, [idProduct]
        );

        //Enviamos la respuesta
        res.send({
            status: 'OK',
            message: `Producto marcado con id ${idProduct} marcado como vendido`
        });

    } catch (error) {
        next(error)

    } finally {
        if (connection) connection.release();
    }
}

module.exports = soldProduct;