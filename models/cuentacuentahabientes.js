'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CuentaCuentahabientes extends Model {
    static associate(models) {
      models.Cuentas.belongsToMany(models.Cuentahabientes, { through: CuentaCuentahabientes});
      models.Cuentahabientes.belongsToMany(models.Cuentas, { through: CuentaCuentahabientes});
    }
  }
  CuentaCuentahabientes.init({
    idCuenta: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    idCuentahabiente: {
      type:  DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'CuentaCuentahabientes',
  });
  return CuentaCuentahabientes;
};