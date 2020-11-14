const db = require("./../models");

const buscarTodos = async function () {
  let cuentasTemporal = await db.Cuentahabientes.findAll();
  let arreglo = [];
  cuentasTemporal.forEach((element) => {
    arreglo.push(element.dataValues);
  });
  return arreglo;
};

exports.buscarTodos = buscarTodos;
