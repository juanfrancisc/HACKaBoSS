// Controlador para actualizar un suario

// Requerimos getDB
const getDB = require('../../database/getDB');
const { generateError } = require('../../helpers');

const putUser = async (req, res, next) => {
    let connection;

    try {
        // Abrimos la conexion a BD
        connection = await getDB();

        //Recuperamos el idUser desde el pathParam
        const { idUser } = req.params;

        // Recuperamos los datos desde el body
        const { nombre, apellido1, apellido2 } = req.body;

        const [usuario] = await connection.query(
            `SELECT * FROM usuario WHERE id=?`, [idUser]
        );

        if (usuario.length <1 ){
            throw generateError('No existe el usuario', 404);
        }


        await connection.query(
            `UPDATE usuario SET nombre = ? , apellido1 = ? , apellido2 = ? WHERE id=?`,[nombre, apellido1, apellido2, idUser]
        );

        res.send({
            data: usuario[0],
        });

    } catch (error) {
        next(error)

    } finally {
        if(connection) connection.release();
    }
};

//Exportamos
module.exports = putUser;