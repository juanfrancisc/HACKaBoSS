// Controlador de un login de usuario

const getDB = require("../../database/getDB");

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const { generateError } = require("../../helpers");



require('dotenv').config();

const getLogin = async (req, res, next) => {
    let connection;

    try {
        // Conectamos con la BD
        connection = await getDB();

        // Recuperamos desde el body
        const { email, password } = req.body;

        if (!email || !password){
            // Si alguno de estos datos no existe, devolvemos un error
            throw generateError('Falta algun dato por introducir', 400);
        }

        // Obtenemos los datos que necesitamos desde la BD
        const [usuario] = await connection.query(
            `SELECT id, email, password FROM usuario WHERE email=?`,[email]
        );
        

        if(usuario.length < 1){
            // Si el usuario no existe, devlvemos un error
            throw generateError('No existe un usuario con ese mail', 400);
        }

        // Comprobamos la password 
        const validPassword = await bcrypt.compare(password, usuario[0].password)
        if (!validPassword){
            throw generateError('La contraseña no coincide', 401);
        }

        //Si todo bien hasta aqui generamos un token
        const tokenInfo = {
            id: usuario[0].id,
        };


        const token = jwt.sign(tokenInfo, process.env.SECRET, {
            expiresIn: '10d',
        });

        //console.log(token);

        //enviamos la respuesta
        res.send({
            status: 'OK',
            authToken: token,

        });

    } catch (error) {
        //
        next(error);
    } finally {
        //
        if (connection) connection.release();
    }
};


module.exports = getLogin;

