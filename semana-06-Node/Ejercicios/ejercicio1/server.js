/**
 * ###################
 * ### Ejercicio 1 ###
 * ###################
 *
 * Crea un servidor web que escucha cualquier request en el puerto 4000 y devuelve siempre un status `200` con el body:
 *
 *      {
 *          curso: 'backend'
 *      }
 */

// Cómo podemos ir haciendo los ejercicios?
// Primero de nada, en el package.json podemos modificar el script dev para ejecutar este archivo
// y el siguiente

///////


// Requerimos el express
const express = require('express');

// Creamos la aplicacion/servidor con express
const app = express();


// Middleware de respuesta a cualquier peticion
app.use((req, res) => {
    // Establecemos el codigo 200     a la respuesta
    res.status(200);

    // Enviamos una respuesta
    res.send({
        curso: 'backend',
    });
});



// Ponemos el servidor a la escucha, AL FINAL DEL SCRIPT SIEMPRE
app.listen(4000, () => {
    console.log(`Server listening at http://localhost:4000`);
});
