const getDB = require("../../database/getDB");

const { generateError, generateRandomPass } = require("../../helpers");

const bcrypt = require('bcrypt');
const { lanarMail } = require("../../middleware/lanzarMail");

const { USER_MAIL }= process.env;

const retrievePass = async (req, res, next) =>{

    let conexion;

    try {
        conexion = await getDB();

        // Recibibos el correo del usuario desde el body
        const { userMail } = req.body;

        // Si no se declara ningun correo lanzamos un error
        if (!userMail){
            throw generateError('Si no intruduces algun dato no poedemos ayudarte', 409)
        }

        // Localizamos si existe algun usuario con dicho correo
        const [usuario] = await conexion.query(
            `SELECT * FROM usuario WHERE email = ?`,[userMail]
        );

        // Si no hay ningun usuario con ese correo, lanzamos error
        if (usuario.length < 1){
            throw generateError (`No existe en nuestra base de datos ningún usuario con esa cuenta de correo ${userMail}`);
        }

        //Si existe ese correo, generamos una nueva contraseña, con la funcion generateRandomPass(), no funciona la funcion lo hago manunalmente aqui
        const caracteres = "abcdefghijkmnlopqrstuvwxyzABCDEFGHJKMNLOPQRSTUVWXYZ0123456789";
        let newPassword = "";
        for (let i = 0; i < 20 ; i++) {
            newPassword +=caracteres.charAt(Math.floor(Math.random()*caracteres.length)); 
        }
        //console.log(newPassword)

        //Y la encrriptamos para añadirla a la BBDD
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        //console.log(hashedPassword)

        await conexion.query(
            `UPDATE usuario SET password = ? WHERE email = ?`,[hashedPassword,userMail]
        );

        // Creamos el mensaje de correo que le enviamos al usuario
        const mailOptions = {
            from: USER_MAIL,
            to: usuario[0].email,
            subjeect: `Restablecimiento de contraseña generada de la app de experiencias`,
            text:`La nueva contraseña generada es ${newPassword}, recueda acceder a la app y cambiar a una nueva`,
        };

        lanarMail.sendMail(mailOptions);

        //Si todo bien enviamos la respuesta
        res.send({
            status: 'OK',
            message: `Se ha enviado un correo con una pass nueva al usuario con la direccion de correo ${userMail}`,
        })

    } catch (error) {
        next(error)

    } finally {
        if (conexion) conexion.release();
    }

};

module.exports = retrievePass;