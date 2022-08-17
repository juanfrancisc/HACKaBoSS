// Controlador de un nuevo usuario admin

// Requerimos getDB
const getDB = require('../../database/getDB');

// Requerimos la dependenia bcrypt para poder encriptar la contraseña
const bcrypt = require('bcrypt');

const { generateError } = require('../../helpers');

const newAdmin = async (req, res, next) => {
    let connection;
    
    try {
        // Abrir la conexion a base de datos
        connection = await getDB();

        // Recuperar los datos que indique el usuario
        const { nombre, apellido1, apellido2, fecha_nac, email, password } = req.body;


        if ( !nombre || !email || !password ){
            //Si alguno no existe devolvemos un error
            throw generateError('Faltan campos obligatorios', 400);
        } 

        //Comprobamos que el usuario existe
        const [usuario] = await connection.query(
            `SELECT * FROM usuario WHERE email = ?`,[email]
        );
        
        //Si la consulta devuelve algun usuario, quiere decir que ya existe ese usuario con ese email
        if (usuario.length > 0){
            throw generateError('Ya existe un usuario con ese mail', 401);
        }


        // Encriptar la contraseña -> Para ello necesitamos la dependencia bcrypt
        const hashedPassword = await bcrypt.hash(password, 10);
        const tipo='admin';
        await connection.query(
            `INSERT INTO usuario (nombre, apellido1, apellido2, fecha_nac, email, password, tipo)
            VALUES (?,?,?,?,?,?,?)`,
            [nombre, apellido1, apellido2, fecha_nac, email, hashedPassword, tipo]
            );
        

        //Enviar respuesta al servidor conforme todo ha ido bien
        res.send({
            status: 'OK',
            message: 'Usuario tipo admin creado con éxito',
        });

    } catch (error) {
        //Los errores que aparezcan los enviamos al middleware
        next(error);

    } finally {
        //Cerramos la conexion a base de datos
        if(connection) connection.release();

    }
};


// Exportamos la funcion
module.exports = newAdmin;