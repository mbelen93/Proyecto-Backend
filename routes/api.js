const express = require('express');
const router = express.Router(); 
const {vistaUno, vistaParques, vistaUnParque, crearParque, editarParque, eliminarParque} = require('../controller/controller.js');
const {check, validationResult, body} =require ('express-validator');
const {validar} = require('../middleware/validation')

router.get('/',vistaUno)
router.get('/ver', vistaParques);
router.get('/ver/:id', vistaUnParque);
router.post('/crear', [
    check('name').not().isEmpty().withMessage('el campo esta vacio')
], crearParque);
router.put('/editar/:id', editarParque)
router.delete('/eliminar/:id', eliminarParque)



module.exports = router;
