// Fichereo serevidor JS -> Iniciamos la instalacion del servidor (npm init -y)
// Instalamos las dependencias (npm i eslint prettier -D) 
// Instalamos express (npm i express) para crear el servidor express
// Instalamos mysql (npmi mysql2) para acceso a base de datos
// Instalamos dotenv (npm i dotenv) para la creacion de variables globales
// Copiamos .eslintrc.json y .prettierrc desde otro proyecto
// Crear .gitignore para añadir los ficheros o carpetas que no queremos subir a github
// Instalamos npm i nodemon -D para que el server reinicie de forma automatica cada vez 
// que se produca un cambio sus ficheros

/** Se puede instalar de una sola vez:
 * npm i eslint prettier nodemon -D
 * npm i express mysql2 dotenv
 */

/** Para el ejercicio 2 :*/
// Instalamos el bcrypt (npm i bcrypt) para encriptar la contraseña
// Instalamos el jsonwebtoken (npm i jsonwebtoken) para obtener el token de sesion



/** Configuracion del fichero server.js */
// Requerimos el express
const express = require('express');

// Creamos la aplicacion/servidor con express
const app = express();

// Deserializamos el body en raw para leer los datos
app.use(express.json());

/////////////////////////
/** CONTROLADORES */
// De usuario
const newUser = require('./controllers/users/newUser');
const getLogin = require('./controllers/users/getLogin');
const getUser = require('./controllers/users/getUser');
//const putUser = require('./controllers/users/putUser');

/** Middleware de usuario para comprobar si puede editar y modificar */
const isAuth = require('./middleware/isAuth');
const canEditUser = require('./middleware/canEditUser');
const modifyUser = require('./controllers/users/modifyUser');

/** Para crear un usuario Administrador */
const newAdmin = require('./controllers/users/newAdmin');

// De Experiencias
const getExperiencias = require('./controllers/experiencias/getExeriencias');
const getPrecio = require('./controllers/experiencias/getPrecio');

//////////////////////////
/** ENDPOINTS */

//Usuario
app.post('/register', newUser);
app.post('/login', getLogin);
app.get('/user/:idUser', getUser);

//app.put('/user/:idUser',putUser);
app.put('/user/:idUser', isAuth, canEditUser, modifyUser)

app.get('/register/admin', newAdmin)


//Experiencias
app.get('/experiencias', getExperiencias)
app.get('/experiencias/:idExperiencias', getExperiencias)

//app.get('/experiencias', getPrecio)



////////////////////

/** MIDDLEWARE de ERROR y NOT FOUND*/

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

/** FIN  MIDDLEWARE*/

/** SERVIDOR A LA ESCUCHA */

// Ponemos el server a la escucha
app.listen(4000, () => {
    console.log('Server listening at http://localhost:4000');
});
