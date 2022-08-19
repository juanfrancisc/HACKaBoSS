const getDB = require("../../database/getDB");
const { generateError } = require("../../helpers");

const newCompany = async (req, res, next) => {
    
    let conexion;

    try {
        conexion = await getDB();

        const { company } = req.body;

        if (!company){
            throw generateError('Debes de introducir un nombre a la empresa', 401)
        }

        //Consultamos la case de datos a ver si existe alguna empresa con ese nombre
        const [empresa] = await conexion.query(
            `SELECT nombre FROM empresa WHERE nombre = ?`,[company]
        );

        if (empresa.length > 0){
            throw generateError('Ya existe una empresa con el nombre que has introducido, por favor introduce otro', 401)
        }

        await conexion.query(
            `INSERT INTO empresa (nombre) VALUES (?)`,[company]
        );

        res.send({
            status: 'OK',
            message: `Nueva empresa insertada, con nombre ${company}`
        });

    } catch (error) {
        next(error)

    } finally {
        if (conexion) conexion.release();
    }
}

module.exports = newCompany;