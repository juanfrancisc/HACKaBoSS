// Requerimos la BD
const getDB = require("../db/getDB");

// Importamos la funcion generar error tras necesitartla
const { generateError } = require("../helpers");

// Importamos la funcion de jsontoken, para desencripter el token
const jwt = require('jsonwebtoken');

// Poder acceder al SECRETO (SECRET)
require('dotenv').config();

const isAuth = async (req, res, next) =>{

    //Los middlewares No envian una respuesta, simplemente ejecuta el next

    let connection;

    try {
        connection = await getDB();

        // Obtenemos la cabecera de la autorizacion
        const { authorization } = req.headers; 

        // Si no indica la cabezara de autorizacion, lanzaremos un error
        if (!authorization){
            throw generateError ('Falta la cabecera de autorizacion',401)
        }

        // Variable que almacenarña la informacion del token
        let tokenInfo;

        // Desencriptar el token recibido
        try {
            tokenInfo = jwt.verify(authorization, process.env.SECRET);

        } catch (error) {
            // Si el token no es valido, no es generado por nosotros
            throw generateError('No has iniciado sesión', 401)
        }

        // El token devuelve un id, seleccionamos de la BD al usuario con esa id
        const [user] = await connection.query (
            `SELECT id FROM user WHERE id = ?`, [tokenInfo.id,]
        );

        // Si no hubiera un usuario con ese id en la BD lanzamos error
        if (user.length < 1){
            throw generateError ('El token no es valido', 401)
        }

        // Si el usuario existe, y el token es valido, creamos en la request una propiedad que
        // guardará el id del usuario que ha hecho login   

        req.userAuth = tokenInfo;

        // Si todo OK, pasamos la informacion
        next();


    } catch (error) {
        next(error);

    } finally {
        if(connection) connection.release();
    }
}


module.exports = isAuth;