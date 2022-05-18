const {Park} = require('../models/models');

const validarId = async (req, res, next)=>{
    try {
        const parque= await Park.findById(req.params.id)
        if (parque !== null) {
            next();
        } else {
            res.status(400).json({msg: "El id ingresado no existe"})
        }
    }
    catch (error) {
        res.status(400).json({msj:"El id ingresado no es valido", error})
    }
}

module.exports = {validarId}