// Controlador de un login de usuario

// Requerimos getDB
const getDB = require('../../db/getDB');

// Requerimos bcrypt -> Encriptar y desencriptar pass
const bcrypt = require('bcrypt');

//Requerimos jsonwebtoken -> Para crear token de sesion
const jwt = require('jsonwebtoken');
const { generateError } = require('../../helpers');

// Requerimos el .env -> Para acceder a la variable SECRET para la creacion del token
require('dotenv').config();

const loginUser = async (req, res, next) =>{
    let connection;

    try {
        // Conectamos con la BD
        connection = await getDB();

        // Obtener los email y password del body
        const { email, password }= req.body;

        // SI no existe email o password enviamos un error
        if (!email || !password){
            /*const error = new Error('Faltan campos obligatorios')
            error.httpStatus = 400; // Bad Request
            throw error;*/

            throw generateError('Faltan campos obligatorios', 400);
        }

        // Comprobamos que exste un usuario con ese email
        const [user] = await connection.query(
            `SELECT id, email, password FROM user WHERE email=?`,[email]
            );
        
        //Podemos ver el resultado del array por consola
        console.log([user]);
        
        // Si no existe un usuario con ese mail, lanzamos un error
        if (user.length < 1){
            /*const error = new Error ('No existe un usuario con ese email');
            error.httpStatus = 404;
            throw error;*/

            throw generateError('No existe un usuario con ese email', 404);
        }

        // Si existe un usuario con ese email comprobambos que la pass coincide
        const validPassword = await bcrypt.compare(password, user[0].password)
        if (!validPassword){
            /*const error = new Error ('La contraseña no coincide');
            error.httpStatus = 401; //Unauthorized
            throw error;*/

            throw generateError('La contraseña no coincide', 401);
        }

        // Si es usuario indica un mail y contraseña correctos, generamos un token de inicio de sesion

        // Crear un objeto con la informacion que pasaremos al token
        const tokenInfo = {
            id: user[0].id,
        };

        //Creamos el token
        const token = jwt.sign(tokenInfo, process.env.SECRET, {
            expiresIn: '10d',
        });

        // Enviamos de respuesta el token generado
        res.send({
            status: 'Ok, todo correcto',
            authToken: token,
        });
    } catch (error) {
        //Si hay algun error lo pasamos
        next(error);

    } finally{
        //Desconectamos de la BD
        if (connection) connection.release();
    }

};

module.exports = loginUser;



