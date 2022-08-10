const { generateError } = require("../helpers");

/** Funcion para devolver el directorio actual */
const getMatematicas = async (req, res, next) =>{
    try {
        const { number } = req.params;
        //console.log(number);

        if (isNaN(number)){
            //const error = new Error ('No es un numero');
            //throw error;

            throw generateError ('No es un numero', 400);
        }
        const resultado = number*2
        res.send({
            resultado
        });

    } catch (error) {
        next(error)
    }
}

module.exports = getMatematicas;