// Controlador de un datos de usuario


// Requerimos getDB
const getDB = require('../../database/getDB');
const { generateError } = require('../../helpers');

const getUser = async (req, res, next) => {
    //Abrir conexion    
    let connection;

    try {
        // Abrimos la conexion
        connection = await getDB();
        
        // Recuperamos el pathParan del usario que queremos
        const { idUser } = req.params;

        //Seleccionamos todos los datos dle usuario con el id
        const [usuario] = await connection.query(
            `SELECT * FROM usuario WHERE id = ?`, [idUser]
        );

        //Comprobar que existe el usuario con ese id
        if (usuario.length < 1 ){
            throw generateError('No existe el usuario seleccionado', 404);
        }

        // Si el usuario existe, devolvemos los datos
        res.send({
            status: 'OK',
            data: usuario[0],
        });

    } catch (error) {
        //Enviamos los posibles errores
        next(error);
    } finally {
        //Cerramos la conexion a BD
        if (connection) connection.release();
    }
    
};

//Exportamos
module.exports = getUser;