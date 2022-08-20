// Archivo de ayuda donde crearemos funciones que utilizaremos en mas de un archivo

//const getDB = require("./database/getDB");

// Funcion de error
function generateError(message, code){
    const error = new Error (message);
    error.httpStatus = code;
    return error;
}

function generateRandomPass(num){
    const caracteres = "abcdefghijkmnlopqrstuvwxyzABCDEFGHJKMNLOPQRSTUVWXYZ0123456789";
    let newPassword = "";
    for (let i = 0; i < num ; i++) {
        newPassword +=caracteres.charAt(Math.floor(Math.random()*caracteres.length)); 
    }
    console.log(newPassword)

    return newPassword;
}


//Funcion para obetener datos de la tabla usuario
/*
function selectIdUser(idUser){
    let conecction;
    conecction = getDB();
    const [usuario] =  conecction.query(
        `SELECT * FROM usuario WHERE id = ?`,[idUser]
    );
    
    return [usuario];

}
*/
// Para exportar la funcion, entre {} por que exportamos mas de una
module.exports = {
    generateError,
    generateRandomPass,
    //selectIdUser,
};