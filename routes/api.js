const express = require('express');
const router = express.Router(); 
const {vistaUno, vistaParques, vistaUnParque, crearParque, editarParque, eliminarParque} = require('../controller/controller.js');
const {check, validationResult, body} =require ('express-validator');
const {validarId, validarParque, validarEliminacion} = require('../middleware/validation')

router.get('/',vistaUno)
router.get('/ver', vistaParques);
router.get('/ver/:id', vistaUnParque);
router.post('/crear', [
    check('name').not().isEmpty().withMessage('el campo esta vacio, debe asignarle un nombre'),
    check('location').not().isEmpty().withMessage('debe asignarle una ubicacion')],
crearParque);
router.put('/editar/:id', [
    check('name').not().isEmpty().withMessage('¿esta seguro de modificar el nombre del parque?'), 
    check('location').not().isEmpty().withMessage('¿esta seguro de modificar la ubicacion del parque')],
editarParque);
router.delete('/eliminar/:id', [
    check('name').not().isEmpty().withMessage('¿esta seguro de eliminar el parque')
], eliminarParque)



module.exports = router;
