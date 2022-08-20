//Requerimos el paquete
const  nodemailer = require('nodemailer');


// Requerimos dotenv para el acceso a las variables
require('dotenv').config();

// Acceso a las varaibles que necesito
const { DOMINIO, USER_MAIL, PASS_MAIL }= process.env;


//Creamos el objeto de transporte
const  lanarMail = nodemailer.createTransport({
    service: DOMINIO,
    auth: {
        user: USER_MAIL,
        pass: PASS_MAIL,
    }
});

//Para la pruebas de envio directo con un endpoints
const mailOptions = {
    from: USER_MAIL,
    to: 'juanfrancisco.rodriguez.diaz@gmail.com',
    subjeect: `Mensaje de prueba`,
    text:`Cuerpo del mensaje`,
};


module.exports = {
    lanarMail,
    //mailOptions

}

