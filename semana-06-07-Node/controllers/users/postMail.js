const { generateError } = require("../../helpers");
const { lanarMail, mailOptions } = require("../../middleware/lanzarMail");

const postMail = async (req, res, next) => {

    try {
        lanarMail.sendMail(mailOptions);
        console.log(mailOptions);

        res.send({
            status: 'OK',
            message: `Mensaje envisado correctamente!`
        });

    } catch (error) {
        next(error)
    }

};



module.exports = postMail;

