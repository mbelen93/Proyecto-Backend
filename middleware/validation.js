<<<<<<< HEAD
const {Park} = require('../models/model');
=======
const {Park} = require('../models/models');
>>>>>>> 35a2790f3fc612ad3c140e7ae4c462eb7d3cc23c

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

const validarParque = async (req, res, next)=>{
    try {
        const parque= await Park.findByIdAndUpdate(req.params.name)
        if (parque !== Park) {
            next();            
        } else {
            res.status(400).json({msg:"El nombre del parque no se puede modificar", error})
        }
    } catch (error) {
        res.status(400).json({msg:"El parque ingresado ya existe en la base de datos", error})
    }
}

const validarEliminacion = async (req, res, next)=>{
    try {
        const parque= await Park.findByIdAndDelete(req.params.id)
        if (parque === id) {
            next();            
        } else {
            res.status(400).json({msg:"El id no se puede eliminar", error})
        }
    } catch (error) {
        res.status(400).json({msg:"El id ingresado no se puede eliminar de la base de datos", error})
    }
}

module.exports = {validarId, validarParque, validarEliminacion}
