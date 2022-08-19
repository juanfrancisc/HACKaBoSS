// Controlador para actualizar un suario

// Requerimos getDB
const getDB = require('../../database/getDB');
const { generateError } = require('../../helpers');

const putUser = async (req, res, next) => {
    let conexion;

    try {
        // Abrimos la conexion a BD
        conexion = await getDB();

        //Recuperamos el idUser desde el pathParam
        const { idUser } = req.params;

        // Recuperamos los datos desde el body
        const { nombre, apellido1, apellido2 } = req.body;

        const [usuario] = await conexion.query(
            `SELECT * FROM usuario WHERE id=?`, [idUser]
        );

        if (usuario.length <1 ){
            throw generateError('No existe el usuario', 404);
        }


        await conexion.query(
            `UPDATE usuario SET nombre = ? , apellido1 = ? , apellido2 = ? WHERE id=?`,[nombre, apellido1, apellido2, idUser]
        );

        res.send({
            data: usuario[0],
        });

    } catch (error) {
        next(error)

    } finally {
        if(conexion) conexion.release();
    }
};

//Exportamos
module.exports = putUser;