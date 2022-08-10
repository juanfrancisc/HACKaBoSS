// Todos los controladores nos van a requerir algo
const getDB = require('../../db/getDB');


// Funcion encargada de listar los productos de a base de datos
const getProducts = async (req, res, next) => {

    // Creamos una variable para la conexion
    let connection;

    try {
        // Abrimos una nueva conexion a la base de datos
        connection = await getDB();

        // Realizar una consulta a la base de datos
        const [products] =  await connection.query(`
            SELECT * FROM product
        `);

        // Comprobar la query
        /*console.log(await connection.query(`
        SELECT * FROM product
        `)
        );*/

        res.send ({
            status: 'OK',
            data: products,
        });

        // Una vez 

    } catch (error) {
        // Si ocurre cualquier error, lo pasamos, en el servdor lo capturara
        next(error);

    } finally {
        // Vamos a cerrar la conexion a base de datos, para evitar llegar al limite de conexiones
        if (connection) connection.release();
    }

};

// Exportar el controlador
module.exports = getProducts;