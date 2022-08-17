// Requerimos la BD
const getDB = require("../../db/getDB");
const { generateError } = require("../../helpers");

const modifyUser = async (req ,res, next) => {
    //Creamos variable conexion
    let connection;

    try {
        //Conectamos con la BD
        connection = await getDB();

        // Recuperamos el id del usuario a modicar
        const { idUser } = req.params;

        //Recuperamos el email y username a modificar
        const { email, username } = req.body;

        //Si no se recuepra ninguna de los datos
        if (!(email || username)){
            throw generateError ('Faltan datos, si no vas ha hacer nada para que tocas', 400)
        }

        // Antes de modificar el usaurio, vamos a recuperar los datos anteriores de la BD
        const [user] = await connection.query(
            `SELECT email, username FROM user WHERE id=?`,[idUser]
        );

        // Hacemos la actualizacion, si no indica un dato (email o username) lo actualizamos por 
        //el dato guardado anteriormente en la BD
        await connection.query(
            `UPDATE user SET email = ?, username = ? WHERE id = ?`, [email || user[0].email, username || user[0].username, idUser]
        );

        //Enviamos la respuesta
        res.send({
            status: 'OK',
            message: 'Datos del usuario modificados con éxito',
        });


    } catch (error) {
        //Si ocuerre cualquier error => next
        next(error)
        
    } finally {
        // Cerramos la conexion si aun existe
        if(connection) connection.release();

    }
}

// Exportamos la funcion
module.exports = modifyUser;