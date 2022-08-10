// Requerimos el express
const express = require('express');



// Creamos la aplicacion/servidor con express
const app = express();

// Realizamos el destructuring
app.use(express.json());

// Importar funciones
const getHours = require('./controllers/getHours');

const getDirectory = require('./controllers/getDirectory');

const getMatematicas = require('./controllers/getMatematicas');

const newUser = require('./controllers/newUser');
const { generateError } = require('./helpers');


/** ENDPOINTS */
// Una ruta '/hora' que devuelva la hora actual.
app.get('/hora', getHours);

// Una ruta '/directorio' que devuelva el directorio donde ejecutamos el archivo del servidor.
app.get('/directorio', getDirectory);


// Una ruta '/matematicas/:number' que compruebe que es un número (si no es un número que de error) y
// que devuelva el número indicado multiplicado por 2.
app.get('/matematicas/:number', getMatematicas);

// Una ruta '/newUser' que reciba por el body email y password si falta alguno que lance un error
// si no falta ninguno que muestre lo que recibe en la respuesta.
app.post('/newUser', newUser);





/** MIDDLEWARE */

// Middleware de ERROR
app.use((error, req, res, next) => {
    //Enviamos la respuesta con el error
    res.send({
        status: 'Error',
        message: error.message,
    });

    //res.send(generateError('Error', 500));

});

// Middleware de NOT FOUND - No encuentra la ruta
app.use((req,res) => {
    //Enviamos la respuesta con el error
    res.send({
        status: 'Error',
        message: 'Not found',
    })

    //res.send(generateError('Not found', 404));
});

// Ponemos el servidor a la escucha, AL FINAL DEL SCRIPT SIEMPRE
app.listen(4000, () => {
    console.log(`Server listening at http://localhost:4000`);
});