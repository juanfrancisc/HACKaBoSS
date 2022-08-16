/** Funcion para devolver la hora actual */
const getHours = async (req, res, next) =>{
    try {
        let horaActual = new Date().toLocaleString();

        res.send({
            status: 'OK',
            menssage: horaActual,


        /** Correccion Cesar
         * const actualHour = new Date().getHours();
         * const actualMinutes = new Date().getMinutes();
         *  
         * res.send({
         *  status: 'OK',
         *  message: `${actualHour}:${actualMinutes}
         * });*/  

        
        
    })
    } catch (error) {
        next(error);
    }


    
}

module.exports = getHours;
