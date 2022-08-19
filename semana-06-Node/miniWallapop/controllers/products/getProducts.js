// Todos los controladores nos van a requerir algo
const getDB = require('../../db/getDB');


// Funcion encargada de listar los productos de a base de datos
const getProducts = async (req, res, next) => {

    // Creamos una variable para la conexion
    let connection;

    try {
        // Abrimos una nueva conexion a la base de datos
        connection = await getDB();

        //Recibimos los query params
        const { search, order, direction } = req.query;

        //Creamos un array de opciones válidas para los campos por los que ordenar
        const validOrdereOptions = ['name', 'precio', 'createdAt'];

        //Creamos un array de opciones validas para la direccion del orden, ascendente o descendente
        const validDirectionOptions = ['DESC', 'ASC']

        //Con esto creamos las variables y orden para mostrar los resultados
        //Si validOrderOption incluye un order recuperado de los params => true sino false(ordenamos por createdAt)
        const orderBy = validOrdereOptions.includes(order) ? order : 'createdAt';

        //Si validOrdereOptions incluye una direccion => true sino false(ordenamos por DESC)
        const orderDirection = validOrdereOptions.includes(direction) ? direction : 'DESC';

        // Realizarmos la consulta a la base de datos para recuperar los productos
        let products;
        
        if (search) {
            [products] = await connection.query(
                `SELECT * FROM product WHERE name LIKE ? ORDER BY ${orderBy} ${orderDirection}`, [`%${search}`]
            );
        } else {
            [products] = await connection.query(
                `SELECT * FROM product ORDER BY ${orderBy} ${orderDirection}`
            );
        }

        //Creamos el array que delvolveremos en la respuesta, contendra los el objeto products y las fotos que le correspondan
        const data = [];

        //Cada producto tiene sus imagenes y recibimos su id, por lo que podemos recorrer los productos recibidos y buscar sus fotos
        for (let i = 0; i < products.length; i++) {
            //console.log(products[i]);

            //Obtenemos todas los nombres de las fotos que corresponden al id de ese producto
            const [photos] = await connection.query(
                `SELECT name FROM product_photo WHERE idProduct = ?`,[products[i].id]
            );

            //Pusheamos, añadimos al array data creado en vacio anteriormente
            data.push({
                ...products[i], photos,
            });
        }

        // Una vez  recibidos los productos los mostramos
        res.send ({
            status: 'OK',
            data: data,
        });

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