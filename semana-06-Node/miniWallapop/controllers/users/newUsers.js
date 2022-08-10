// Controlador de un nuevo usuario

// Requerimos getDB
const getDB = require('../../db/getDB');

// Requerimos la dependenia bcrypt para poder encriptar la contraseña
const bcrypt = require('bcrypt');

// Importar la funcion de gestion de errores
const { generateError } = require('../../helpers');

const newUser = async (req, res, next) => {
    let connection;

    try {
        // Abrir la conexion a base de datos
        connection = await getDB();

        // Recuperar los datos que indique el usuario
        const { email, username, password } = req.body;

        //Comprobaciones
        if (!email || !username || !password){
            //Si no existe alguno de los campos obligatrios lanzamos un error
            /** Todo esto se puede cambiar por la siguiente linea al crear la funcion */
            /*const error = new Error('Faltan campos obligatorios');
            error.httpStatus = 400; //Bad Request
            throw error;*/

            // Al crear la funcion en el fichero helpers
            throw generateError('Faltan campos obligatorios', 400);
        } 

        // COmprobamos que el mail no existe en la base de datos
        const [user] = await connection.query(`
            SELECT id FROM user WHERE email = ?`, [email]
            );

        // Si la consulta devuelve algun usuario, quiere decir que ya existe ese usuario con ese email
        if (user.length > 0) {
            /*const error = new Error ('Ya existe un usuario con ese email');
            error.httpStatus = 409; // Conflict
            throw error;*/

            throw generateError('Ya existe un usuario con ese email', 409);
        }

        // Encriptar la contraseña -> Para ello necesitamos la dependencia bcrypt
        const hashedPassword = await bcrypt.hash(password, 10);
        //console.log(hashedPassword);

        // Insertar el nuevo usuario
        await connection.query(`INSERT INTO user (username, email, password, createdAt)
        VALUES (?,?,?,?)`,
        [username, email, hashedPassword, new Date()]);

        //Enviar respuesta al servidor conforme todo ha ido bien
        res.send({
            status: 'OK',
            message: 'Usuario creado con éxito'
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
module.exports = newUser;

