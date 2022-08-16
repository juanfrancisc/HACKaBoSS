// Controlador para mostrar filtro por precio


const getDB = require('../../database/getDB');
const { generateError } = require('../../helpers');

const getPrecio = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();

        const { precio } = req.query;

        console.log(precio); 

        if ( precio ){
            const [experiencias] = await connection.query(
                `SELECT * FROM experiencia WHERE precio >= ?`[precio]
            );

            res.send({
                data: experiencias
            });
        }


        
    } catch (error) {
        next(error)
        
    } finally {
        if (connection) connection.release();
    }

};

module.exports = getPrecio;