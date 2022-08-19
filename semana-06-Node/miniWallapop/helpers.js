// Archivo de ayuda donde crearemos funciones que utilizaremos en mas de un archivo

// Dependencia que nos sirve para crear las rutas absolutas
const path = require('path');

// Importamos unlink, para poder realizar el borrado
const { unlink } = require('fs/promises');

const sharp = require('sharp'); // Para temas de imagenes
const uuid = require('uuid');  // Para crear un nombre de archivo unico

// Creamos la ruta a la carpeta de avatares
const avatarsDir = path.join(__dirname, 'static/avatars');

// Creamos la ruta a a carpeta productos
const productsDir = path.join(__dirname, 'static/products');

// Funcion de error
function generateError(message, code){
    const error = new Error (message);
    error.httpStatus = code;
    return error;
}

//Funcion que elimina una foto del servidor
// con la propiedad type para diferenciar ruta avatares o productos (avatars=0 y products=1)
async function deletePhoto(photoName, type){

    try {
        let photoPath;

        if(type === 0){
            //Si el type es 0, la imagen es un avatar
            // Creamos la ruta la directorio de avatares junto al nombre de imagen
            photoPath = path.join(avatarsDir, photoName);

        } else if (type === 1){
            photoPath = path.join(productsDir, photoName);
        }

        // Eliminamos la imagen
        await unlink(photoPath);
        
    } catch (error) {
        throw new Error('Error al eliminar la imagen del servidor');
    }

}


//Funcion que guarda una foto en el servidor, devolvera el nombre de la foto para guardarlo en la BD
async function savePhoto (imagen, type){
    //Recibimos la imagen y el tipo

    try {
        //convertir la imagen en un objeto sharp
        const sharpImage = sharp(imagen.data);

        // Variable que guardara la ruta absoluta a la carpeta donde se guarda la imagen
        let imageDirectory;

        // Generamos un nombre único a la imagen
        const imageName = uuid.v4() + '.jpg';

        // Segun el tipo de la imagen, creamos una ruta junto al nombre al directorio correspondiente
        if (type === 0 ){
            //Si es un avatar
            imageDirectory = path.join(avatarsDir, imageName);

            // Como es una imagen avatar la vamos a redimensionar
            sharpImage.resize(150, 150);

        } else if (type === 1){
            //Si es una imagen de producto
            imageDirectory = path.join(productsDir, imageName)
        }

        //Guardar la imagen
        await sharpImage.toFile(imageDirectory);

        //Retornar el nombre unico de la imagen para guardar en BD
        return imageName;
        

    } catch (error) {
        throw new Error('Error al procesar la imagen');
    }

}

// Funcion para validar el schema (Joi)
async function validate (schema, data) {

    try {
        await schema.validateAsync(data)

    } catch (error) {
        error.httpStatus = 400;
        throw error;
    }
}


// Para exportar la funcion, entre {} por que exportamos mas de una
module.exports = {
    generateError,
    deletePhoto,
    savePhoto,
    validate,
};