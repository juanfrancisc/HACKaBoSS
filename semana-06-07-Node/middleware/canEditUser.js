// Requerimos la BD
const getDB = require("../database/getDB");


// Importamos el fichero helpers
const { generateError } = require("../helpers");

const canEditUser = async (req, res, next) => {

    let connection;

    //Recuperamos el id de usuario desde los parametros
    const { idUser } = req.params;

    //Recuperamos el id del usuario que hace la request (hace login)
    const idReqUser = req.userAuth.id;

    //Si lo dos id's son diferentes
    if(Number(idUser) !== idReqUser){
        throw generateError ('No eres el propietario del usuario a cambiar', 401)
    }

    //Si los dos id's son iguales lo pasamos
    next();

    try {
        connection = await getDB();

    } catch (error) {
        next(error);

    } finally {
        if (connection) connection.release();
    }

}

//Exportamos la funcion
module.exports = canEditUser;
