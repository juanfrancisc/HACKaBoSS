const getDB = require("../../db/getDB");
const { generateError, deletePhoto, savePhoto } = require("../../helpers");

const editUserAvatar = async (req, res, next) => {

    let connection;

    try {
        connection = await getDB();

        //Recuperamos el id del usuario
        const { idUser } = req.params;

        //Comprobamos que existe el archivo del nuevo avatar
        if(!req.files || !req.files.avatar){
            throw generateError ('Debes indicar un nuevo avatar', 400);
        }

        //Recuperamos el avatar antiguo del usuario desde la BD
        const [user] = await connection.query(
            `SELECT avatar FROM user WHERE id= ?`, [idUser]
        );

        // Si existe un avatar previo lo borramos
        if (user[0].avatar){
            // Recibe la ruta del fichero y el tipo de photo (0= avatar indicado en el helpers.js)
            await deletePhoto(user[0].avatar, 0);
        }

        // Guardar el nuevo avatar
        const avatarName = await savePhoto(req.files.avatar, 0);

        //Modificar en BD el nombre de la imagen del avatar
        await connection.query(
            `UPDATE user SET avatar = ? WHERE id = ?`,[avatarName, idUser]
        );

        //Enviamos la respuesta
        res.send({
            status: 'OK',
            message: 'Avatar de usuario modificado con exito',
        })

    } catch (error) {
        next(error);

    } finally {
        if (connection) connection.release();
    }
};

module.exports = editUserAvatar;