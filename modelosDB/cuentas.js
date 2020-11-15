const db = require("./../models");

/**
 * Funcion que busca todos los registros en la base de datos.
 */
const buscarTodos = async function () {
  let cuentasTemporal = await db.Cuentas.findAll();
  let arreglo = [];
  cuentasTemporal.forEach((element) => {
    arreglo.push(element.dataValues);
  });
  return arreglo;
};

/**
 * Funcion que busca un registro especifico por su numero de identificacion.
 * @param {*} id
 */
const buscarPorId = async function (id) {
  return await db.Cuentas.findByPk(id);
};

/**
 * Funcion que regresa el saldo de una cuenta por su numero de identificacion.
 * @param {*} id
 */
const consultarSaldo = async function (id) {
  let cuenta = await buscarPorId(id);
  return await db.Cuentas.findOne({
    attributes: ["saldo"],
    where: {
      id: cuenta.id,
    },
  });
};

/**
 * Funcion que deposita una cantidad en una cuenta por su numero de identificacion.
 * @param {} id
 * @param {} cantidad
 */
const depositarPorId = async function (id, cantidad) {
  let cuenta = await buscarPorId(id);
  if (cuenta && cantidad) {
    if (cantidad.cantidad > 0) {
      cuenta.saldo += cantidad.cantidad;
      await cuenta.save();
    } else {
      return { error: "Error: Cantidad de deposito no valida." };
    }
  }
  return cuenta;
};

/**
 * Funcion que retira una cantidad a una cuenta mediante su numero de identificacion.
 * @param {} id
 * @param {*} cantidad
 */
const retiroPorId = async function (id, cantidad) {
  let cuenta = await buscarPorId(id);
  if (cuenta && cantidad) {
    if (cantidad.cantidad <= cuenta.saldo) {
      cuenta.saldo -= cantidad.cantidad;
      await cuenta.save();
    } else {
      return { error: "Error: No cuentas con el saldo suficiente." };
    }
  }
  return cuenta;
};

/**
 * Funcion que transfiere saldo de una cuenta a otra por medio de su numero de identificacion.
 * @param {*} idUno
 * @param {*} idDos
 * @param {*} cantidad
 */
const transferenciaPorId = async function (idUno, idDos, cantidad) {
  let cuentaTransfiere = await buscarPorId(idUno);
  let cuentaRecibe = await buscarPorId(idDos);
  if (cuentaTransfiere && cuentaRecibe && cantidad) {
    if (cantidad.cantidad <= cuentaTransfiere.saldo) {
      cuentaTransfiere.saldo -= cantidad.cantidad;
      await cuentaTransfiere.save();
      cuentaRecibe.saldo += cantidad.cantidad;
      await cuentaRecibe.save();
    } else {
      return {
        error: "Error: No cuentas con el saldo suficiente para transferir.",
      };
    }
  }
  return [cuentaTransfiere, cuentaRecibe];
};

/**
 * Funcion que crea una nueva cuenta
 * @param {} info
 */
const agregarCuentas = async function (info) {
  let datos = await db.Cuentas.findOne({
    where: {
      id: info.id,
    },
  });
  if (!datos) {
    if (info.saldo > 0) {
      await db.Cuentas.create(info);
      return info;
    }
  }
};

exports.buscarTodos = buscarTodos;
exports.consultarSaldo = consultarSaldo;
exports.buscarPorId = buscarPorId;
exports.depositarPorId = depositarPorId;
exports.retiroPorId = retiroPorId;
exports.transferenciaPorId = transferenciaPorId;
exports.agregarCuentas = agregarCuentas;
