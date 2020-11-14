const cuentahabientes = [
  {
    idCuentahabiente: 1,
    nombre: "Pablo Guzman",
    telefono: 6863243241,
    cuentasBancarias: [1, 3],
  },
  {
    idCuentahabiente: 2,
    nombre: "Armando Esquer",
    telefono: 6863127211,
    cuentasBancarias: [2],
  },
  {
    idCuentahabiente: 3,
    nombre: "Michelle Ceballos",
    telefono: 6861238422,
    cuentasBancarias: [4],
  },
  {
    idCuentahabiente: 4,
    nombre: "Laura Salazar",
    telefono: 6863252485,
    cuentasBancarias: [3, 4],
  },
  {
    idCuentahabiente: 5,
    nombre: "Alan Romo",
    telefono: 6862138599,
    cuentasBancarias: [5],
  },
];

/**
 * Funcion que retorna un cuentahabiente por su numero de identificacion.
 * @param {*} id 
 */
const buscarPorId = function (id) {
  return cuentahabientes.find((e) => {
    return e.idCuentahabiente == id;
  });
};

/**
 * Funcion que retorna un cuentahabiente por su numero de identificacion.
 * @param {*} nombre
 */
const buscarPorNombre = function (nombre) {
  return cuentahabientes.find((e) => {
    return e.nombre == nombre;
  });
};

/**
 * Funcion que retorna un cuentahabiente por su numero de identifcacion.
 * @param {*} telefono 
 */
const buscarPorTelefono = function (telefono) {
  return cuentahabientes.find((e) => {
    return e.telefono == telefono;
  });
};

/**
 * Funcion que retorna a todos los cuentahabientes existentes.
 */
const buscarTodos = function () {
  return cuentahabientes;
};

/**
 * Funcion que crea un cuentahabiente y retorna la informacion de la cuenta creada.
 * @param {*} info 
 */
const crearCuentahabiente = function (info) {
  //Si el objeto tiene la informacion
  if (info) {
    //Se agrega al arreglo.
    cuentahabientes.push(info);
  }
  return info;
};

/**
 * Funcion que elimina un cuentahabiente por su numero de identificacion y retorna las cuentas existentes.
 * @param {*} id 
 */
const eliminarCuentahabiente = function (id) {
  let cuentaTemporal = buscarPorId(id);
  //Si el objeto tiene informacion.
  if (cuentaTemporal) {
    //Se elimina del arreglo.
    cuentahabientes.splice(cuentahabientes.indexOf(cuentaTemporal), 1);
  }
  return cuentaTemporal;
};

/**
 * Funcion que retorna la cuenta con la informacion actualizada.
 * @param {*} id 
 * @param {*} info 
 */
const actualizarCuentahabiente = function (id, info) {
  let cuentaTemporal = buscarPorId(id);
  //Si el objeto tiene informacion.
  if (cuentaTemporal) {
    //Iteracion para llegar a la cuentahabiente 
    for (let [llave, valor] of Object.entries(info)) {
      //Se realiza el cambio de valor.
      cuentaTemporal[llave] = valor;
    }
  }
  return cuentaTemporal;
};

//Exporto las funciones de este modulo para poder ser utilizadas en el controlador de cuentahabientes.
exports.crearCuentahabiente = crearCuentahabiente;
exports.eliminarCuentahabiente = eliminarCuentahabiente;
exports.actualizarCuentahabiente = actualizarCuentahabiente;
exports.buscarPorId = buscarPorId;
exports.buscarPorNombre = buscarPorNombre;
exports.buscarPorTelefono = buscarPorTelefono;
exports.buscarTodos = buscarTodos;
