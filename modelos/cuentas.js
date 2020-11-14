const cuentas = [
  {
    idCuenta: 1,
    saldo: 6666,
    titularesDeCuenta: [1],
  },
  {
    idCuenta: 2,
    saldo: 180000,
    titularesDeCuenta: [2, 3],
  },
  {
    idCuenta: 3,
    saldo: 100,
    titularesDeCuenta: [1, 5],
  },
  {
    idCuenta: 4,
    saldo: 2000,
    titularesDeCuenta: [3],
  },
  {
    idCuenta: 5,
    saldo: 94000,
    titularesDeCuenta: [2, 4],
  },
];

/**
 * Funcion que realiza una busqueda especifica por medio del id de la cuenta.
 * @param {*} id
 */
const buscarPorId = function (id) {
  return cuentas.find((e) => {
    return e.idCuenta == id;
  });
};

/**
 * Funcion que realiza una busqueda general de todas las cuentas.
 */
const buscarTodos = function () {
  return cuentas;
};

/**
 * Funcion que agrega una nueva cuenta.
 * @param {*} info
 */
const agregarCuenta = function (info) {
  if (info.idCuenta && info.saldo >= 0 && info.titularesDeCuenta.length > 0) {
    cuentas.push(info);
  }
  return info;
};

/**
 * Funcion que elimina una cuenta mediante su id.
 * @param {*} id
 */
const eliminarCuentaPorId = function (id) {
  let cuentaTemporal = buscarPorId(id);
  //Si el objeto tenga informacion entrara
  if (cuentaTemporal) {
    //Si tiene un saldo positivo no se podra eliminar.
    if (cuentaTemporal.saldo > 0) {
      return { error: `Error: La cuenta tiene saldo disponible.` };
    } else {
      //Se elimina del arreglo de cuentas
      cuentas.splice(cuentas.indexOf(cuentaTemporal), 1);
    }
  }
  return cuentaTemporal;
};

/**
 * Funcion que consulta el saldo de una cuenta mediante su id.
 * @param {*} id
 */
const consultarSaldo = function (id) {
  let cuentaTemporal = buscarPorId(id);
  return cuentaTemporal.saldo;
};

/**
 * Funcion que deposita una cantidad a una cuenta mediante su id.
 * @param {*} id
 * @param {*} cantidad
 */
const depositarPorId = function (id, cantidad) {
  let cuentaTemporal = buscarPorId(id);
  //Si los dos objetos tenga informacion entrara
  if (cuentaTemporal && cantidad) {
    //Sumatoria de la cantidad y la cuenta.
    cuentaTemporal.saldo += cantidad.cantidad;
  }
  return cuentaTemporal;
};

/**
 * Funcion que retira una cantidad a una cuenta mediante un id.
 * @param {*} id
 * @param {*} cantidad
 */
const retiroPorId = function (id, cantidad) {
  let cuentaTemporal = buscarPorId(id);
  //Si los objetos tienen informacion
  if (cuentaTemporal && cantidad) {
    //Si cantidad a retirar es menor o igual que el saldo
    if (cantidad.cantidad <= cuentaTemporal.saldo) {
      //Resta de la cantidad y la cuenta.
      cuentaTemporal.saldo -= cantidad.cantidad;
    } else {
      return { error: `Error: No cuentas con el saldo suficiente.` };
    }
  }
  return cuentaTemporal;
};

/**
 * Funcion que transfiere una cantidad de una cuenta a otra mediante su id.
 * @param {*} idUno
 * @param {*} idDos
 * @param {*} cantidad
 */
const transferenciaPorId = function (idUno, idDos, cantidad) {
  let cuentaTransfiere = buscarPorId(idUno);
  let cuentaRecibe = buscarPorId(idDos);
  //Si tienen informacion todos los objetos
  if (cuentaTransfiere && cuentaRecibe && cantidad) {
    //Si la cantidad es menor que el saldo
    if (cantidad.cantidad <= cuentaTransfiere.saldo) {
      //Una cuenta realiza una resta a su saldo
      cuentaTransfiere.saldo -= cantidad.cantidad;
      //Otra cuenta realiza una sumatoria a su saldo.
      cuentaRecibe.saldo += cantidad.cantidad;
    } else {
      return { error: `Error: No cuentas con el saldo suficiente.` };
    }
    return [cuentaTransfiere, cuentaRecibe];
  }
};


//Exporto las funciones de este modulo para poder ser utilizadas en el controlador de cuentas.
exports.buscarPorId = buscarPorId;
exports.agregarCuenta = agregarCuenta;
exports.eliminarCuentaPorId = eliminarCuentaPorId;
exports.consultarSaldo = consultarSaldo;
exports.depositarPorId = depositarPorId;
exports.retiroPorId = retiroPorId;
exports.transferenciaPorId = transferenciaPorId;
exports.buscarTodos = buscarTodos;