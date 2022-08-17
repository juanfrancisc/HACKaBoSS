const getDB = require("../db/getDB");
const { generateError } = require("../helpers");

const canEditProduct = async (req, res, next) => {

    let connection;

    try {
        connection = await getDB();

        //Solamnete el propietario del producto puede modificarlo
        //id del producto
        const { idProduct } = req.params;

        //id del usuario 
        const idReqUser = req.userAuth.id;

        //Seleccionamos de la BBDD los productos con idProduct que son de ese usuario logado idUser=idReqUser
        const [user] =  await connection.query(
            `SELECT * FROM product WHERE id = ? AND idUser = ?`,[idProduct, idReqUser]
        );

        // Si no devuelve ningun resultado
        if (user.length < 1){
            throw generateError('No eres el propietario del producto', 401);
        }

        //Si es el propietario 
        next();

    } catch (error) {
        next(error);

    } finally {
        if (connection) connection.release()
    }

}

// Exportamos
module.exports = canEditProduct;