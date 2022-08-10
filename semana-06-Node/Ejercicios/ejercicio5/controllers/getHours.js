/** Funcion para devolver la hora actual */
const getHours = async (req, res, next) =>{
    try {
        let horaActual = new Date().toLocaleString();
    res.send({
        status: 'OK',
        menssage: horaActual,
    })
    } catch (error) {
        next(error);
    }


    
}

module.exports = getHours;
