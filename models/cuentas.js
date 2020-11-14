'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cuentas extends Model {
    static associate(models) {
      Cuentas.belongsToMany(models.Cuentahabientes,{
        through: models.CuentaCuentahabientes,
      });
    }
  }
  Cuentas.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    saldo: {
      type:  DataTypes.FLOAT,
      allowNull: false, 
    },
  }, {
    sequelize,
    modelName: 'Cuentas',
  });
  return Cuentas;
};