//Asigno a una variable la llamada al modulo express.
const express = require("express");

//Asigno a una variable la llamada del modulo controlador de cuentas.
const controladorCuenta = require('../controladores/controladorCuentas.js');

//Asigno a una variable la llamada del modulo controlador de eliminaciones.
const globalController = require('../controladores/controladorEliminaciones.js');

//Creo un enrutador
const router = express.Router();

router.get('/', controladorCuenta.mostrarCuentas);
router.get('/:id', controladorCuenta.mostrarPorId);
router.get('/saldo/:id',controladorCuenta.consultar);

router.post('/',controladorCuenta.agregar);

router.delete('/:id', globalController.eliminarCuenta);

router.patch('/deposito/:id', controladorCuenta.deposito);
router.patch('/retiro/:id', controladorCuenta.retiro);
router.patch('/:idUno/:idDos', controladorCuenta.transferencia);

module.exports = router;