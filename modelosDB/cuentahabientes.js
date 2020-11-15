const db = require("./../models");

/**
 * Funcion que se busca todos los registros de cuentahabientes en la base de datos.
 */
const buscarTodos = async function () {
  let cuentasTemporal = await db.Cuentahabientes.findAll();
  let arreglo = [];
  cuentasTemporal.forEach((element) => {
    arreglo.push(element.dataValues);
  });
  return arreglo;
};

/**
 * Funcion que busca un cuentahabiente por su numero de identificacion.
 * @param {*} id
 */
const buscarPorId = async function (id) {
  return await db.Cuentahabientes.findByPk(id);
};

/**
 * Funcion que busca un cuentahabiente por su nombre.
 * @param {} nombre
 */
const buscarPorNombre = async function (nombre) {
  return await db.Cuentahabientes.findAll({
    where: {
      nombre: nombre,
    },
  });
};

/**
 * Funcion que busca un cuentahabiente por su telefono.
 * @param {} telefono
 */
const buscarPorTelefono = async function (telefono) {
  return await db.Cuentahabientes.findAll({
    where: {
      telefono: telefono,
    },
  });
};

const crearCuentahabiente = async function (info) {
  let datos = await db.Cuentahabientes.findOne({
    where: {
      id: info.id,
    },
  });
  if (!datos) {
    await db.Cuentahabientes.create(info);
    return info;
  }
};


exports.buscarTodos = buscarTodos;
exports.buscarPorId = buscarPorId;
exports.buscarPorNombre = buscarPorNombre;
exports.buscarPorTelefono = buscarPorTelefono;
exports.crearCuentahabiente = crearCuentahabiente;exports.actualizarCuentahabiente = actualizarCuentahabiente;
