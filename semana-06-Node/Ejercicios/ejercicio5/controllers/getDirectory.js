/** Funcion para devolver el directorio actual */
const getDirectory = async (req, res, next) =>{
    
    try {
        let directory = __dirname;
        res.send({
            status: 'OK',
            menssage: directory,
    })
    } catch (error) {
        next(error);
    }
    
}

module.exports = getDirectory;