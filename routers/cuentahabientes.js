//Asigno a una variable la llamada al modulo express.
const express = require("express");

//Asigno a una variable la llamada del modulo controlador de cuentas.
const controladorCuentahabiente = require('../controladores/controladorCuentahabientes.js');

//Asigno a una variable la llamada del modulo controlador de eliminaciones.
const globalController = require('../controladores/controladorEliminaciones.js');

//Creo un enrutador
const router = express.Router();

router.get('/',controladorCuentahabiente.mostrarCuentahabientes);
router.get('/:idCuentahabiente',controladorCuentahabiente.mostrarCuentahabientesPorId);
router.get('/nombre/:nombre',controladorCuentahabiente.mostrarCuentahabientePorNombre);
router.get('/telefono/:telefono',controladorCuentahabiente.mostrarCuentahabientePorTelefono);

router.post('/',controladorCuentahabiente.crearCuentahabiente);

router.delete('/:id',globalController.eliminarCuentahabiente);

router.patch('/:id',controladorCuentahabiente.actualizarCuentahabiente);

module.exports = router;