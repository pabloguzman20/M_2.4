//Asigno a la variable la llamada del modulo cuentas.js
const cuentas = require("../modelos/cuentas.js");
const cuentasdb = require("../modelosDB/cuentas.js");

/**
 * Funcion callback para mostrar cuentas.
 * @param {*} req
 * @param {*} res
 */
const mostrarCuentas = async function (req, res) {
  let datos = await cuentasdb.buscarTodos();
  datos
    ? res.status(200).json(datos)
    : res.status(404).json({ error: "Error: No existen cuentas registradas." });
};

/**
 * Funcion callback para mostrar cuentas por identificador.
 * @param {*} req
 * @param {*} res
 */
const mostrarPorId = async function (req, res) {
  let datos = await cuentasdb.buscarPorId(req.params.id);
  datos
    ? res.status(200).json(datos)
    : res
        .status(404)
        .json({ error: "Error: No existen cuentas registradas con ese id." });
};

/**
 * Funcion callback para depositar en una cuenta por identificador.
 * @param {*} req
 * @param {*} res
 */
const deposito = async function (req, res) {
  let cuentaTemporal = await cuentasdb.depositarPorId(req.params.id, req.body);
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
const retiro = async function (req, res) {
  let cuentaTemporal = await cuentasdb.retiroPorId(req.params.id, req.body);
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
const transferencia = async function (req, res) {
  let cuentaTemporal = await cuentasdb.transferenciaPorId(
    req.params.idUno,
    req.params.idDos,
    req.body
  );
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
const agregar = async function (req, res) {
  let cuentaTemporal = await cuentasdb.agregarCuentas(req.body);
  cuentaTemporal
    ? res.status(201).json(cuentaTemporal)
    : res.status(400).json({
        error: `Error: La cuenta no se pudo crear con exito.`,
      });
};

/**
 * Funcion callback para consultar el saldo de una cuenta.
 * @param {*} req
 * @param {*} res
 */
const consultar = async function (req, res) {
  let cuentaTemporal = await cuentasdb.consultarSaldo(req.params.id);
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

