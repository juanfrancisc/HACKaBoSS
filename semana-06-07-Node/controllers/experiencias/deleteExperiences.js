const getDB = require("../../database/getDB");

const deleteExperiences = async (req, res, next) => {

    let conexion;

    try {
        conexion = await getDB();

        //Recuperamos el id de la experiencia que hemos puesto en los parametros
        const { idExperience } = req.params;

        /** Correccion Cesar
         * Falta!
         * const [experiencia] = await conexion.query(
         *  `SELECT id FROM experiencia WHERE id = ?`,[idExperiencia]
         * );
         * 
         * if (experiencia.length < 1){
         *  throw generateError('La experiencia no existe', 404)
         * }
         */

        await conexion.query(
            `DELETE FROM experiencia WHERE id = ?`,[idExperience]
        );

        res.send({
            status: 'OK',
            message: `Experiencia con id ${idExperience} ha sido borrada!!`
        });

    } catch (error) {
        next(error)
        
    } finally {
        if (conexion) conexion.release();

    }
}

module.exports = deleteExperiences;