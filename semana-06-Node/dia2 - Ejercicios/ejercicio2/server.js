/**
 * ###################
 * ### Ejercicio 2 ###
 * ###################
 *
 * Servidor web que escucha en el puerto 4000
 *
 * - Cuando se llama a la ruta '/curso', método get devuelve el status `200` con el body:
 *
 *      {
 *          curso: 'backend'
 *      }
 *
 * - Cuando se llama a cualquier ruta distinta devuelve status `200` con el body:
 *
 *      {
 *          message: 'Hello World'
 *      }
 */


// Requerimos el express
const express = require('express');

// Creamos la aplicacion/servidor con express
const app = express();

// Middleware que deserializa el body en formato raw
app.use(express.json());

// Enviar info de /curso desde la url -> query params
app.get('/curso',(req, res) => {

    // Le damos un codigo de estado a la respuesta
    res.status(200); // No es necesario poruqe si es OK siempre es 200

    // Enviamos una respuesta
    res.send({
        curso: 'backend',
    });
});

// Para cualquier otra ruta
app.use((req, res) => {
    
    // Enviamos una respuesta
    res.send({
        message: 'Hello World',
    });
});



// Ponemos el servidor a la escucha, AL FINAL DEL SCRIPT SIEMPRE
app.listen(4000, () => {
    console.log(`Server listening at http://localhost:4000`);
});
