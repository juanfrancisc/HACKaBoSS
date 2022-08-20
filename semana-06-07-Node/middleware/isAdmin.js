const getDB = require("../database/getDB");
const { generateError } = require("../helpers");

const isAdmin = async (req, res, next) => {
    //console.log('funcion isAdmin');
    let conexion;

    try {
        conexion = await getDB();

        //Recuperamos el id del usuario 
        const idReqUser = req.userAuth.id;

        const [tipoUser] = await conexion.query(
            `SELECT tipo FROM usuario WHERE id = ?`,[idReqUser]
        );
        //console.log(`SELECT tipo FROM usuario WHERE id = ?`)    


        if (tipoUser[0].tipo === 'normal') {
            throw generateError ('El usuario indicado no es de tipo admin', 409)
        }

        /** Correción Cesar */
        /**
         * if (tipoUser[0].tipo !== 'admin') {
         *      throw generateError ('El usuario indicado no es de tipo admin', 409)
         * }
         */

        // Mostramos mensaje
        /*res.send({
            status: 'OK',
            message: `El usuario con ${idReqUser} es de tipo ${tipoUser[0].tipo}`,
        });*/

        //Lo pasamos
        next();

    } catch (error) {
        next(error);

    } finally {
        if (conexion) conexion.release();
    }
}

module.exports = isAdmin;