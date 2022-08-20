const { response } = require("express");
const getDB = require("../../database/getDB");
const { generateError } = require("../../helpers");

const deleteCompany = async (req, res, next) => {

    let conexion;

    try {
        conexion = await getDB();

        const { idCompany } = req.params;

        if (!idCompany){n
            throw generateError('No hay parametros de id de empresa a borrar');
        }

        const [empresa] = await conexion.query(
            `SELECT * FROM empresa WHERE id = ?`,[idCompany]
        ); 

        if (empresa.length < 1){
            throw generateError(`No existe una empresa con ese id: ${idCompany} `, 401)
        }

        await conexion.query(
            `DELETE FROM empresa WHERE id = ?`,[idCompany]
        );

        res.send({
            status: 'OK',
            message: `La empresa ${empresa[0].nombre} con id ${idCompany} ha sido eliminada con exito!`,
        });

    } catch (error) {
        next(error)

    } finally {
        if (conexion) conexion.release();
    }
};

module.exports = deleteCompany;