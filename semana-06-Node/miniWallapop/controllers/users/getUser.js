// Controlador de un datos de usuario

// Requerimos getDB
const getDB = require('../../db/getDB');
const { generateError } = require('../../helpers');

const getUser = async (req, res, next) =>{
    let connection;

    try {
        //Abrir conexion
        connection = await getDB();

        // Recuperamos el pathParan del usario que queremos
        const { idUser } = req.params;

        console.log(idUser);

        //Seleccionamos todos los datos dle usuario con el id
        const [user] = await connection.query(
            `SELECT * FROM user WHERE id = ?`, [idUser]
        );

        //Comprobar que existe el usuario con ese id
        if (user.length < 1 ){
            /*const error = new Error ('No existe el usuario seleccionado');
            error.httpStatus = 404;
            throw error;*/

            throw generateError('No existe el usuario seleccionado',404);
        }

        // Si el usuario existe, devolvemos los datos
        res.send({
            status: 'OK',
            data: user[0],
        });


    } catch (error) {
        //Enviamos los posibles errores
        next(error);

    } finally {
        //Cerramos la conexion a BD
        if (connection) connection.release();
    }

};

module.exports = getUser;