const db = require("./../models");
const { Op } = require("sequelize");

const buscarTodos = async function(){
    let cuentasTemporal = await db.Cuentas.findAll();
    let arreglo = [];
    cuentasTemporal.forEach(element => {
        arreglo.push(element.dataValues);
    });
    return arreglo;
}

const consultarSaldo = async function(id){
    let cuentasTemporal = await db.Cuentas.findAll({
        where: {
            id: id,
        }
    });
    return cuentasTemporal;
}
exports.buscarTodos = buscarTodos;
exports.consultarSaldo = consultarSaldo;