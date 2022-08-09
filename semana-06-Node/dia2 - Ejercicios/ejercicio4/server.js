/**
 * ###################
 * ### Ejercicio 4 ###
 * ###################
 *
 * Servidor web que escucha en el puerto 4000.
 *
 * - Cuando la request es un 'POST' a '/data', se devuelve el *JSON* recibido.
 *
 * - Cuando se llama a cualquier otra ruta con cualquier método, devuelve status `404` (not found)
 * con el body:
 *
 *      {
 *          message: 'No lo encuentro'
 *      }
 */

// Lo que se pretende en el POSt es que lo que se escriba en el JSON del body se envie como res.send() es una tontería
// solo para practicar

// Requerimos el express
const express = require('express');

// Creamos la aplicacion/servidor con express
const app = express();

app.use(express.json());

// Cuando la request es un 'POST' a '/data', se devuelve el *JSON* recibido
// Realizado por mi
app.post('/datamio',(req,res) => {
    // Recibimos los datos de la peticion a través del body
    const { dato1, dato2, dato3 } = req.body;

    res.send({
        valor1: dato1,
        valor2: dato2,
        valor3: dato3
    });

});

// Cuando la request es un 'POST' a '/data', se devuelve el *JSON* recibido
// Correcccion de lo que pide el ejercicio
app.post ('/data', (req,res) => {

    //Recuperamos desde el body
    const { recuperado } = req.body;

    //E          nviamos el contenido recibido
    res.send({
        menssage: recuperado,
    })
});

// La segunda parte del enunciado del ejercicio 
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
