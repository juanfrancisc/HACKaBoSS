const getDB = require("../../database/getDB");

const getExperiences = async (req, res, next) => {

    let conexion;

    try {
        conexion = await getDB();

        //recuperamos los query params que necesitamos
        const { search, order, direction } = req.query;

        //con ellos creamos un array para validarlos
        const camposValidos = ['titulo', 'precio'];

        //tambien creamos otro array con la direccion ASC o DESC
        const camposDireccion = ['ASC', 'DESC'];

        //creamos los criterios de ordenacion
        const ordenarPor = camposValidos.includes(order) ? order : 'precio';

        const ordenarEn = camposDireccion.includes(direction) ? direction : 'DESC';

        //Creamos una variable donde añadimos los resultados
        let listaExperiences;

        //Si la busqueda contiene 'search', realizamos la consulta
        if (search) {
            [listaExperiences] = await conexion.query(
                `SELECT * FROM experiencia WHERE titulo LIKE ? OR precio LIKE ? ORDER BY ${ordenarPor} ${ordenarEn}`, 
                [`%${search}%`, `%${search}%`]
            );
        } else {
            [listaExperiences] = await conexion.query(
                `SELECT * FROM experiencia ORDER BY ${ordenarPor} ${ordenarEn}`
            );
        }

        //Devolvemos la respuesta
        res.send({
            status: 'OK',
            data: listaExperiences,
        })

    } catch (error) {
        next(error);

    } finally {
        if (conexion) conexion.release();
    }

}

module.exports = getExperiences;