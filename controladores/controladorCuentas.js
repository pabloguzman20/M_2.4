//Asigno a la variable la llamada del modulo cuentas.js
const cuentas = require("../modelos/cuentas.js");
const cuentasdb = require("../modelosDB/cuentas.js");

/**
 * Funcion callback para mostrar cuentas.
 * @param {*} req
 * @param {*} res
 */
const mostrarCuentas = async function(req,res){
  let datos = await cuentasdb.buscarTodos();
  if(datos){
    res.status(200).json(datos);
  }else{
    res.status(404).json({ error: "si no funca chingas a tu madre aweonado" });
  }
}

const mostrarPorId = async function(req,res){
  let datos = await cuentasdb.findById(req.params.id).
  then(d => {
    if(d){
      res.status(200).json(datos);
    }else{
      res.status(404).json({error:"fallo"});
    }
  }).catch(error =>{
    res.status(505).json({error:error});
  })
}

/**
 * Funcion callback para mostrar cuentas por identificador.
 * @param {*} req
 * @param {*} res
 */
const mostrarCuentaPorId = function (req, res) {
  let cuentaTemporal = cuentas.buscarPorId(req.params.id);
  cuentaTemporal
    ? res.status(200).json(cuentaTemporal)
    : res.status(404).json({
        error: `Error: No existe ninguna cuenta con ese identificador.`,
      });
};

/**
 * Funcion callback para depositar en una cuenta por identificador.
 * @param {*} req
 * @param {*} res
 */
const deposito = function (req, res) {
  let cuentaTemporal = cuentas.depositarPorId(req.params.id, req.body);
  cuentaTemporal
    ? res.status(200).json(cuentaTemporal)
    : res.status(404).json({
        error: `Error: No existe ninguna cuenta con ese identificador`,
      });
};

/**
 * Funcion callback para retirar en una cuenta por identificador.
 * @param {*} req
 * @param {*} res
 */
const retiro = function (req, res) {
  let cuentaTemporal = cuentas.retiroPorId(req.params.id, req.body);
  cuentaTemporal
    ? res.status(200).json(cuentaTemporal)
    : res.status(404).json({
        error: `Error: No existe ninguna cuenta con ese identificador.`,
      });
};

/**
 * Funcion callback para transferir saldo de una cuenta a otra por su identificador.
 * @param {*} req
 * @param {*} res
 */
const transferencia = function (req, res) {
  let cuentaTemporal = cuentas.transferenciaPorId(req.params.idUno,req.params.idDos,req.body);
  cuentaTemporal
    ? res.status(200).json(cuentaTemporal)
    : res.status(404).json({
        error: `Error: No existe ninguna cuenta con ese identificador.`,
      });
};

/**
 * Funcion callback para crear una nueva cuenta de banco.
 * @param {*} req
 * @param {*} res
 */
const agregar = function (req, res) {
  let cuentaTemporal = cuentas.agregarCuenta(req.body);
  cuentaTemporal
    ? res.status(201).json(cuentaTemporal)
    : res.status(400).json({
       error: `Error: La cuenta no se pudo crear con exito.` 
      });
};

/**
 * Funcion callback para consultar el saldo de una cuenta.
 * @param {*} req
 * @param {*} res
 */
const consultar = function (req, res) {
  let cuentaTemporal = cuentasdb.consultarSaldo(req.params.id);
  cuentaTemporal
    ? res.status(200).json(cuentaTemporal)
    : res.status(404).json({
        error: `Error: No existe ninguna cuenta con ese identificador.`,
      });
};

//Exporto las funciones de este modulo para poder ser utilizadas en la aplicacion del servidor.
exports.mostrarPorId = mostrarPorId;
exports.agregar = agregar;
exports.deposito = deposito;
exports.retiro = retiro;
exports.transferencia = transferencia;
exports.consultar = consultar;
exports.mostrarCuentas = mostrarCuentas;
exports.mostrarCuentaPorId = mostrarCuentaPorId;
