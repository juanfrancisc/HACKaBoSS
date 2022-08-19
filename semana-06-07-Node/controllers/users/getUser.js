// Controlador de un datos de usuario


// Requerimos getDB
const getDB = require('../../database/getDB');
const { generateError, selectIdUser } = require('../../helpers');

const getUser = async (req, res, next) => {
    //Abrir conexion    
    let conexion;

    try {
        // Abrimos la conexion
        conexion = await getDB();
        
        // Recuperamos el pathParan del usario que queremos
        const { idUser } = req.params;

        //Seleccionamos todos los datos dle usuario con el id
        const [usuario] = await conexion.query(
            `SELECT * FROM usuario WHERE id = ?`, [idUser]
        );

        //Pruebas de cracion de una funcion select
        //selectIdUser(idUser);


        //Comprobar que existe el usuario con ese id
        if (usuario.length < 1 ){
            throw generateError('No existe el usuario seleccionado', 404);
        }

        /** Correccion Cesar */
        //Crear un objeto con los datos que nos interesa de la consulta
        /**
         * const userInfo = {
         *  id: user[0].id,
         *  name: user[0].nombre,
         *  apellido1: user[0].apellido1,
         *  apellido2: user[0].apellido2,
         *  email: user[0].email,
         *  avatar: user[0].avatar,
         * };
         * 
         * res.send({
         *  status: 'OK',
         *  data: userInfo,
         * })
         */

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
        if (conexion) conexion.release();
    }
    
};

//Exportamos
module.exports = getUser;