// Controlador de datos de las experiencias


// Requerimos getDB
const getDB = require('../../database/getDB');

const getExperiencias = async (req, res, next) => {
    let connection;

    try {
        //abrimos la conexion
        connection = await getDB();

        const { idExperiencias } = req.params;

        //console.log(idExperiencias);

        if (!idExperiencias){
            // Si no existe, listo expereriencias
            //console.log('No existe')

            const [experiencia] = await connection.query(
                `SELECT * FROM experiencia`
            );

            res.send({
                data: experiencia,
        });
        }

        //Si existe idExperiencias, listo solo ese id
        const [experiencia] = await connection.query(
                `SELECT * FROM experiencia WHERE id=?`,[idExperiencias]
        );

        //Enviamos la respuesta
        res.send({
            data: experiencia[0],
        });


    } catch (error) {
        next(error)

    } finally {
        if(connection) connection.release();
    }


};

module.exports = getExperiencias;