/** Funcion para devolver el directorio actual */
const getDirectory = async (req, res, next) =>{
    
    try {
        let directory = __dirname;
        res.send({
            status: 'OK',
            menssage: directory,


            /** Correccion Cesar
             * Todo lo anterior no es necesario
             * res.send ({
             *  status: 'OK',
             *  directorio: __dirname,
             *  archivo: __filename,
             * });
             */
    })
    } catch (error) {
        next(error);
    }
    
}

module.exports = getDirectory;