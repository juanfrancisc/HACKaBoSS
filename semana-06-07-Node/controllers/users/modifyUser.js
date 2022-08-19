// Requerimos ls BD
const getDB = require("../../database/getDB");


// Requerimos el fichero helpers 
const { generateError } = require("../../helpers");

const modifyUser = async (req, res, next) => {

    let conexion;

    try {
        //Conectamos con la BD
        conexion = await getDB();

        //Recuperamos el id de usuario a modificar
        const { idUser } = req.params;

        //Recuperamos el nombre y apellidos del usuario a modificar desde el body
        const { nombre, apellido1, apellido2 } = req.body;

        //Si no recuperamos ninguno de los datos lanzamos un error
        if(!nombre && !apellido1 && !apellido2){
            throw generateError ('No hay datos para modificar', 400)
        }

        //Antes de modificar recuperamos los datos existentes en ls BD
        const [usuario] = await conexion.query(
            `SELECT nombre, apellido1, apellido2 FROM usuario WHERE id = ?`,[idUser]
        );

        //Ahora procedemos a actualizar los datos, si alguno de ellos no se modifica dejamos el que hay en la BD
        await conexion.query(`
        UPDATE usuario SET nombre = ?, apellido1 = ?, apellido2 = ? WHERE id = ?`,[nombre || usuario[0].nombre, apellido1 || usuario[0].apellido1, apellido2 || usuario[0].apellido2, idUser]
        );

        //Si se modifica, enviamos respuesta
        res.send({
            status: 'OK',
            message: 'Datos de usuario actualizados correctamente'
        });

    } catch (error) {
        next(error);

    } finally {
        if (conexion) conexion.release();
    }
}


//Exportamos la funcion
module.exports = modifyUser;