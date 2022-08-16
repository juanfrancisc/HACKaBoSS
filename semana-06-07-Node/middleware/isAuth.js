// Requerimos BD

const getDB = require("../database/getDB");

// Importamos la funcion de errores
const { generateError } = require("../helpers");

// Importamos jsontoken
const jsonwebtoken = require("jsonwebtoken");

// Habilitamos para acceder al sercret de dotenv
require('dotenv').config();

const isAuth = async (req, res, next) => {

    let connection;

    try {
        //Abrimos la conexion con BD
        connection = await getDB();

        //Obtenemos la cabecera de la autorizacion
        const { authorization } = req.headers;
        //console.log (authorization);

        //Obtenemos la cabecera de la autorizacion
        if (!authorization){
            throw generateError ('Falta la cabecera de la autorizacion', 401)
        }

        //Creamos una variable que almacenera la informacion del token
        let tokenInfo;

        // Desencriptamos el token recibido
        try {
            tokenInfo = jsonwebtoken.verify(authorization, process.env.SECRET)

        } catch (error) {
            // Si el token no es bueno anza un error
            throw generateError('No has inciado sesion', 401);
        }

        //Si el token devuelve un id, tenemos que seleccionar ese usuario con ese id en la BD
        const [user] = await connection.query(
            `SELECT id FROM usuario WHERE id = ?`, [tokenInfo.id]
        );

        //Si no hay ningun usuario con ese id mostramos un error
        if (user.length < 1 ){
            throw generateError('El token no es correcto', 401)
        }

        //Si todo hasta aqui es correcto, añadimos a la request una propiedad que guardará el id
        req.userAuth = tokenInfo;

        //Si todo OK, pasamos con el next
        next();


    } catch (error) {
        next(error)

    } finally {
        if(connection) connection.release();
    }

}


//Exportamos la funcion
module.exports = isAuth;