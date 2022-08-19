// Controlador para mostrar filtro por precio


const getDB = require('../../database/getDB');
const { generateError } = require('../../helpers');

const getPrecio = async (req, res, next) => {
    let conexion;

    try {
        conexion = await getDB();

        const { precio } = req.query;

        console.log(precio); 

        if ( precio ){
            const [experiencias] = await conexion.query(
                `SELECT * FROM experiencia WHERE precio >= ?`[precio]
            );

            res.send({
                data: experiencias
            });
        }


        
    } catch (error) {
        next(error)
        
    } finally {
        if (conexion) conexion.release();
    }

};

module.exports = getPrecio;