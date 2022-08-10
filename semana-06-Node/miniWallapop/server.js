// Requerimos a express
const express = require('express');

// Creamos el servidor
const app = express();

// Deserializamos el body en raw para leer los datos
app.use(express.json());


//////////////////////

/** CONTROLADORES */
// Para comprobar que las consultas de destructuring llegan
// Hay que ejecutar el server.js (npm run dev)
/** De productos */
const getProducts = require('./controllers/products/getProducts');


/** De Usuario */
const loginUser = require('./controllers/users/loginUser');
const newUser = require('./controllers/users/newUsers');
const getUser = require('./controllers/users/getUser');

/////////////////////

/** ENDPOINT */
// Los obtenemos llamando a los controladores (controllers)

/** Lista de todos los productos */
app.get('/products',getProducts);




/** Enpoints de Usuarios */
// Registrar nuevos usuarios
app.post('/register', newUser);


// Login de usuario
app.post('/login', loginUser)

// Recuperar datos de un usuario
app.get('/users/:idUser', getUser); //idUser es un pathParm, parametro de ruta

/** Fin  Usuario*/


////////////////////

/** MIDDLEWARE */

// Middleware de ERROR
app.use((error, req, res, next) => {
    //Mostramos el error, lo que tenga
    console.error(error);

    // Asignamos el codigo del error, creamos una propiedad httpStatus en los endpoint 
    // donde asignaremos el codigo correspodiente, si no existe daremos error 500
    res.status(error.httpStatus || 500);

    //Enviamos la respuesta con el error
    res.send({
        status: 'Error',
        message: error.message,
    });

});

// Middleware de NOT FOUND - No encuentra la ruta
app.use((req,res) => {
    res.status(404);

    res.send({
        status: 'Error',
        message: 'Not found',
    })
});

/** Fin */

/** SERVIDOR A LA ESCUCHA */

// Ponemos el server a la escucha
app.listen(4000, () => {
    console.log('Server listening at http://localhost:4000');
});
