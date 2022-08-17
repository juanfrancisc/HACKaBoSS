// Requerimos joi
const Joi = require('joi');

// Joi nos sirve para hacer filtrados de los datos recibidos en el req.body

const newProductSchema = Joi.object().keys({

    name: Joi.string().required().min(3).max(30).regex(/[A-Za-a-z0-9]/).error((error) => {
        if (
            error[0].code == 'any.required' || 
            error[0].code == 'string.empty'
        ) {
            return new Error ('El nombre es requerido')
        }
        return new Error ('El nombre del producto debe tener entre 3 y 30 caracteres')
    }),
    price: Joi.number().required().min(1).max(99999).error((error) => {
        if ( 
            error[0].code == 'any required' ||
            error[0].code == 'string.empty'
        ) {
            return new Error ('El precio es obligatorio')
        }
        return new Error('El precio debe de estar entre 1 y 99999')
    }),
    description: Joi.string().min(100).max(300).error((_) => {
        return new Error ('La descripcion debe de tener entre 100 y 300 caracteres')
    })

});

module.exports = newProductSchema;
    