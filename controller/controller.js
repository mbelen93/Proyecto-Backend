const {Park} = require('../models/model');
const {validationResult} = require('express-validator')

const vistaUno = (req, res)=>{
    res.render('index', { title: 'Express' });
}

const vistaParques = async (req, res) =>{
    const parques = await Park.find()
    res.json({parques})
}

const vistaUnParque = async (req, res) =>{
    try {
        const parque = await Park.findById(req.params.id)
        res.json({parque})               
    } catch (error) {
        res.status(400).json({msj:"El id solicitado no se encuentra", error})
    }    
}

const crearParque = async (req,res) =>{
    try {
        const error = validationResult(req)
        if (error.isEmpty()) {
            const {name,location} = req.body
            const parque = new Park({name, location});
            await parque.save()
            res.status(201).json({parque})            
        } else {
            res.status(501).json(error)
        }
    } catch (error) {
        res.status(501).json({msj:"El nombre de parque ya existe en la base de datos"})
    }
}

const editarParque = async (req, res)=>{
    try {
        const error = validationResult(req)
        if (error.isEmpty()) {
            const {id} = req.params
            const newPark = req.body
            const oldPark = await Park.findByIdAndUpdate(id, req.body)
            res.status(202).json({oldPark, msg:"El parque se actualizo exitosamente", newPark})
    } else {
            res.status(501).json(error)        
        }
    } catch (error) {
        res.status(501).json({msj:"No se pudo editar el parque", error})
    }
}

const eliminarParque = async (req, res) =>{
    try {
        const parque = await Park.findByIdAndDelete(req.params.id)
        res,json({msj:"El parque ha sido eliminado", parque})
    } catch (error) {
        res.status(501).json({msg:"El parque no se ha podido eliminar"})
    }
}

module.exports = {vistaUno, vistaParques, vistaUnParque, crearParque, editarParque, eliminarParque}
