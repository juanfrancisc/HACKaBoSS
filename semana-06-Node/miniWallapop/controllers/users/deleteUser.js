//Recuperamos la BBDD
const getDB = require("../../db/getDB");

//Requerimos las funciones que necesitamos desde el fichero helpers
const { generateError, deletePhoto } = require("../../helpers");

//Requerimos bcrypt para desemcriptar las pass y compararlas
const bcrypt = require('bcrypt');

const deleteUser = async (req, res, next) => {
    let connetcion;

    try {
        //Abrimos la conexion con BBDD
        connetcion = await getDB();

        //Recuperamos el id desde los parametros
        const { idUser } = req.params;

        //Recuperamos la contraseña desde el body
        const { password } = req.body;

        //Si no indica la contraseña NO permitimos eliminar
        if (!password) {
            throw generateError ('Debes de indicar la contraseña', 400);
        }

        //Si la indica, primero recuperamos la pass desde la BBDD
        const [user] = await connetcion.query(
            `SELECT password, avatar FROM user WHERE id = ?`, [idUser]
        );

        //Comparamos las contraseñas
        const isValid = await bcrypt.compare(password, user[0].password)

        //Si NO es valida lanzamos un error
        if (!isValid){
            throw generateError('La contraseña no coincide, no puedes elimnar al usuario', 401)
        }

        // Si todo correcto, comprobamos si tiene avatar y si es asi lo eliminamos
        if (user[0].avatar){
            await deletePhoto(user[0].avatar, 0)
        }

        // Una vez eliminada la imagen del usuario, se puede eliminar al usuario
        await connetcion.query(`DELETE FROM user WHERE id = ?`, [idUser]);

        //Enviamos respuesta
        res.send({
            status: 'OK',
            message: 'Usuario eliminado!',
        });

    } catch (error) {
        next(error)

    } finally {
        if (connetcion) connetcion.release();
    }
};

//Exportamos la funcion
module.exports = deleteUser;