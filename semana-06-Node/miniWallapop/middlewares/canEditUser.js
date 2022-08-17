const getDB = require('../db/getDB');
const { generateError } = require('../helpers');

const canEditUser = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();

        //Recuperamos el id de usuario desde los path.params
        const { idUser } = req.params;

        // id del usuario que hace la request (que esta login)
        const idReqUser = req.userAuth.id;

        // Si son distintos id, no son el mismo usuario, por lo tanto no permitimos que modifique sus datos
        if(Number(idUser) !== idReqUser) {
            throw generateError ('No eres el propietario del usuario a editar', 401);
        }

        // Si los id son iguales pasamos => next()
        next();

    } catch (error) {
        next(error);

    } finally {
        if(connection) connection.release();
    }
};

module.exports = canEditUser;