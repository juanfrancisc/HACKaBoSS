// Requerimos a express
const express = require('express');

// Importamos Morgan que nos muestra mas informacion en la terminal
const morgan = require('morgan');

// Requerimos fileUpload para poder leer los archivos en el servidor
const fileUpload = require('express-fileupload');

// Creamos el servidor
const app = express();

/** Usamos las dependencias instaladas o requeridas */

// Deserializamos el body en raw para leer los datos
app.use(express.json());

// Middleware de Morgan, nos dara mas informacion de las peticiones al servidor
app.use(morgan('dev'));

// Middleware que permite al servidor leer los ficheros que se le evian
app.use(fileUpload());


//////////////////////

/** CONTROLADORES */
// Para comprobar que las consultas de destructuring llegan
// Hay que ejecutar el server.js (npm run dev)
/** De productos */
const newProduct = require('./controllers/products/newProduct.js');
const getProducts = require('./controllers/products/getProducts');
const addProductPhoto = require('./controllers/products/addProductPhoto');
const editProduct = require('./controllers/products/editProduct.js');
const deleteProduct = require('./controllers/products/deleteProduct.js');
const soldProduct = require('./controllers/products/soldProduct.js');


/** De Usuario */
const loginUser = require('./controllers/users/loginUser');
const newUser = require('./controllers/users/newUsers');
const getUser = require('./controllers/users/getUser');
const editUserAvatar = require('./controllers/users/editUserAvatar');
const editUserPassword = require('./controllers/users/editUserPassword');
const deleteUser = require('./controllers/users/deleteUser');
const modifyUser = require('./controllers/users/modifyUser');
//const { application } = require('express');


/////////////////////


/** MIDDLEWARES de USUARIO */
const isAuth = require('./middlewares/isAuth');
const canEditUser = require('./middlewares/canEditUser');

/** MIDDLEWARE de PRODUCTO */
const canEditProduct = require('./middlewares/canEditProducts');


/** ENDPOINT */
// Los obtenemos llamando a los controladores (controllers)

/** ENDPOINTS de PRODUCTOS */

// Nuevo producto
app.post('/products/new', isAuth, newProduct)

// Añadir foto de producto
app.put('/products/:idProduct/photo', isAuth, canEditProduct, addProductPhoto)

// Lista de todos los productos 
app.get('/products',getProducts);

//Editar datos de un producto
app.put('/products/:idProduct', isAuth, canEditProduct, editProduct)

//El propietario marca su producto como vendido
app.put('/products/:idProduct/sold', isAuth, canEditProduct, soldProduct)

//Eliminar un producto
app.delete('/products/:idProduct', isAuth, canEditProduct, deleteProduct)


/** Enpoints de Usuarios */
// Registrar nuevos usuarios
app.post('/register', newUser);


// Login de usuario
app.post('/login', loginUser)

// Recuperar datos de un usuario
app.get('/users/:idUser', getUser); //idUser es un pathParm, parametro de ruta

//Modificar username e email del usuario
app.put('/users/:idUser', isAuth, canEditUser, modifyUser)

// Modificar el avatar
app.put('/users/:idUser/avatar', isAuth, canEditUser, editUserAvatar)

// Modificar la password del usuario
app.put('/users/:idUser/password', isAuth, canEditUser, editUserPassword)

app.delete('/users/:idUser', isAuth, canEditUser, deleteUser)

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
