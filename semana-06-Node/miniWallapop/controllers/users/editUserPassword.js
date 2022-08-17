
const getDB = require("../../db/getDB");
const { generateError } = require("../../helpers");
const bcrypt = require('bcrypt');

// Funcion que modifica la contraseña del usuario
const editUserPassword = async (req, res, next) => {
    let connetcion;

    try {
        //Arbimos la conexion
        connetcion = await getDB();

        //Recuperamos el id del usuario desde los parametros
        const { idUser } = req.params;

        //Obtenemos los campos del body
        const { oldPass, newPass } = req.body;

        //Si no existe alguna de las contraseña se lanza error
        if (!oldPass || !newPass){
            throw generateError('Debes indicar la contraseña antigua y la nueva para realizar el cambio', 400);
        }

        //Recuperamos la contrasñea antigua de la BBDD
        const [user] = await connetcion.query(
            `SELECT password FROM user WHERE id = ?`,[idUser]
        );

        //Comprobamos que la contraseña antigua conincide con la guardada en la base de datos
        const isValid = await bcrypt.compare(oldPass, user[0].password);

        //Si no coninciden la contraseña oldPass y la guardada en la BBDD, error
        if (!isValid) {
            throw generateError ('La contraseña antigua no conincide', 401)
        }

        //Si es correcta, encriptamos la contraseña nueva
        const hashedPassword = await bcrypt.hash(newPass, 10);

        //Actualizamos la BBDD
        await connetcion.query(
            `UPDATE user SET password = ? WHERE id = ?`, [hashedPassword, idUser]
        );

        //Si todo va bien, montramos el mensaje
        res.send({
            status: 'Ok',
            message: 'Contraseña actuaiza con exito'
        });



    } catch (error) {
        next(error)

    } finally {
        if (connetcion) connetcion.release();

    }
};

//Exportamos la funcion
module.exports = editUserPassword;

