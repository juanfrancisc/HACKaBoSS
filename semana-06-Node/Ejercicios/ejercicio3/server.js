/**
 * ###################
 * ### Ejercicio 3 ###
 * ###################
 *
 *  Servidor web que escucha en el puerto 4000
 *
 *  - Cuando se llama a '/curso' con el método GET, devuelve status `200` con el body:
 *
 *      {
 *          curso: 'backend'
 *      }
 *
 *  - Cuando se llama al endpoint '/message' con metodo GET, devuelve status `200` con body:
 *
 *      {
 *          message: 'Hello World'
 *      }
 *
 *  - Cuando se llama a cualquier otra ruta con cualquier método, devuelve status `404` (not found)
 *      con el body:
 *
 *      {
 *          message: 'No lo encuentro :('
 *      }
 */

// Requerimos el express
const express = require('express');

// Creamos la aplicacion/servidor con express
const app = express();

// Enviar info de /curso desde la url -> query params
app.get('/curso',(req, res) => {

    // Le damos un codigo de estado a la respuesta
    res.status(200); //No es necesario

    // Enviamos una respuesta
    res.send({
        curso: 'backend',
    });
});

// Enviar info de /message desde la url -> query params
app.get('/message',(req, res) => {

    // Le damos un codigo de estado a la respuesta
    res.status(200);//No es necesario

    // Enviamos una respuesta
    res.send({
        message: 'Hello World',
    });
});

// Cuando se llama a cualquier otra ruta con cualquier método, devuelve status `404` (not found)
app.use((req, res) => {
    // Establecemos el codigo 404 a la respuesta
    res.status(404);

    // Enviamos una respuesta
    res.send({
        message: 'No lo encuentro :(',
    });
});



// Ponemos el servidor a la escucha, AL FINAL DEL SCRIPT SIEMPRE
app.listen(4000, () => {
    console.log(`Server listening at http://localhost:4000`);
});
