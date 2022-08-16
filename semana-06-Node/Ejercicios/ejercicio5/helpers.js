// Funcion de error
function generateError(message, code){
    const error = new Error (message);
    error.httpStatus = code;
    return error;
}


// Para exportar la funcion, entre {} por que exportamos mas de una
module.exports = {
    generateError,
};


/** Correccion Cesar
 * Al exportar solo una funcion no es necesario hacerelo con llaves
 * module.exports = generateError;
 */