// Archivo de ayuda donde crearemos funciones que utilizaremos en mas de un archivo

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