const { generateError } = require("../helpers");


const newUser = async (req, res, next) => {
    
    try {

        // Recuperar los datos que indique el usuario
        const { email, password } = req.body;

        if (!email || !password){
            //const error = new Error ('Falta algun dato')
            //throw error;
            throw generateError('Falta algun dato', 400);

        } 

        //Enviar respuesta al servidor conforme todo ha ido bien
        res.send({
            status: 'OK',
            email,
            password
        });

    } catch (error) {
        //Los errores que aparezcan los enviamos al middleware
        next(error);
    } 

};


// Exportamos la funcion
module.exports = newUser;