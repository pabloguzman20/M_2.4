//Asigno a la variable la llamada del modulo cuentahabientes.js
const cuentahabientes = require("../modelos/cuentahabientes.js");
const cuentahabientesdb = require("../modelosDB/cuentahabientes.js");

/**
 * Funcion callback para mostrar cuentas.
 * @param {*} req
 * @param {*} res
 */
const mostrarCuentahabientes = async function (req, res) {
  let datos = await cuentahabientesdb.buscarTodos();
  datos
    ? res.status(200).json(datos)
    : res.status(404).json({ error: "Error: No se encontraron registros." });
};

/**
 * Funcion callback para mostrar un cuentahabiente por identificador.
 * @param {*} req
 * @param {*} res
 */
const mostrarCuentahabientesPorId = async function (req, res) {
  let cuentaTemporal = await cuentahabientesdb.buscarPorId(
    req.params.idCuentahabiente
  );
  cuentaTemporal
    ? res.status(200).json(cuentaTemporal)
    : res.status(404).json({ error: `Error: No se encontro el registro.` });
};

/**
 * Funcion callback para mostrar un cuentahabiente por su nombre.
 * @param {*} req
 * @param {*} res
 */
const mostrarCuentahabientePorNombre = async function (req, res) {
  let cuentaTemporal = await cuentahabientesdb.buscarPorNombre(
    req.params.nombre
  );
  cuentaTemporal
    ? res.status(200).json(cuentaTemporal)
    : res.status(404).json({ error: `Error: No se encontro el registro.` });
};

/**
 * Funcion callback para mostrar un cuentahabiente por su telefono.
 * @param {*} req
 * @param {*} res
 */
const mostrarCuentahabientePorTelefono = async function (req, res) {
  let cuentaTemporal = await cuentahabientesdb.buscarPorTelefono(req.params.telefono);
  cuentaTemporal
    ? res.status(200).json(cuentaTemporal)
    : res.status(404).json({ error: `Error: No se encontro el registro.` });
};

/**
 * Funcion callback para actualizar la informacion de un cuentahabiente por su id.
 * @param {*} req
 * @param {*} res
 */
const actualizarCuentahabiente = async function (req, res) {
  let cuentaTemporal = await cuentahabientes.actualizarCuentahabiente(
    req.params.id,
    req.body
  );
  cuentaTemporal
    ? res.status(200).json(cuentaTemporal)
    : res.status(400).json({ error: `Error: No se encontro el registro.` });
};

/**
 * Funcion callback para crear un nuevo cuentahabiente.
 * @param {*} req
 * @param {*} res
 */
const crearCuentahabiente = async function (req, res) {
  let cuentaTemporal = await cuentahabientesdb.crearCuentahabiente(req.body);
  cuentaTemporal
    ? res.status(201).json(cuentaTemporal)
    : res.status(400).json({ error: `Error: Informacion de captura erronea.` });
};

//Exporto las funciones de este modulo para poder ser utilizadas en la aplicacion del servidor.
exports.crearCuentahabiente = crearCuentahabiente;
exports.actualizarCuentahabiente = actualizarCuentahabiente;
exports.mostrarCuentahabientes = mostrarCuentahabientes;
exports.mostrarCuentahabientesPorId = mostrarCuentahabientesPorId;
exports.mostrarCuentahabientePorNombre = mostrarCuentahabientePorNombre;
exports.mostrarCuentahabientePorTelefono = mostrarCuentahabientePorTelefono;
