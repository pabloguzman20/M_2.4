//Asigno a la variable la llamada del modulo cuentas.js
const cuentas = require("../modelos/cuentas.js");
//Asigno a la variable la llamada del modulo cuentahabientes.js
const cuentahabientes = require("../modelos/cuentahabientes.js");

/**
 * Funcion callback que elimina una cuenta.
 * @param {*} req
 * @param {*} res
 */
const eliminarCuenta = function (req, res) {
  //Obtengo la cuenta que se desee eliminar
  let cuentaTemporal = cuentas.eliminarCuentaPorId(req.params.id);
  //Si la cuenta existe
  if (cuentaTemporal) {
    //Es diferente de cualquier error posible
    if (!cuentaTemporal.error) {
      //Itero a todos los cuentahabientes existentes
      for (let cuentaTmp of cuentahabientes.buscarTodos()) {
        //Segunda iteracion para obtener la clave: valor de la cuenta que se desee eliminar
        for (let { key, value } of cuentaTmp.cuentasBancarias) {
          //Si el id coincide con el valor obtenido lo elimina del arreglo cuentasBancarias.
          if (cuentaTmp.id == value) {
            cuentaTmp.cuentasBancarias.splice(key, 1);
          }
        }
      }
    }
    res.status(200).json(cuentaTemporal);
  } else {
    res.status(400).json({ error: `Error: No existe el registro.` });
  }
};

/**
 * Funcion callback que elimina un cuentahabiente.
 * @param {*} req
 * @param {*} res
 */
const eliminarCuentahabiente = function (req, res) {
  //Obtengo el cuentahabiente a eliminar por su numero de identificacion.
  let cuentaTemporal = cuentahabientes.eliminarCuentahabiente(req.params.id);
  //Si existe
  if (cuentaTemporal) {
    //Itero para obtener todas las cuentas existentes y guardarlas en cuenta.
    for (let cuenta of cuentas.buscarTodos()) {
      //Segunda iteracion para obtener todos los duenos de la cuentas (titularesDeCuenta[]).
      for (let i in cuenta.titularesDeCuenta) {
        //Si coincide el id ingresado con algun titular de cuenta lo eliminara del arreglo.
        if (cuentaTemporal.idCuentahabiente == cuenta.titularesDeCuenta[i]) {
          cuenta.titularesDeCuenta.splice(i, 1);
        }
      }
    }
    res.status(200)
    .json(cuentaTemporal);
  } else {
    res.status(400)
    .json({ error: `Error: No existe el registro.` });
  }
};

//Exporto las funciones de este modulo para poder ser utilizadas en la aplicacion del servidor.
exports.eliminarCuenta = eliminarCuenta;
exports.eliminarCuentahabiente = eliminarCuentahabiente;
