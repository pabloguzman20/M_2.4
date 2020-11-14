'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cuentahabientes extends Model {
    static associate(models) {
      Cuentahabientes.belongsToMany(models.Cuentas,{
        through: models.CuentaCuentahabientes,
      });
    }
  }
  Cuentahabientes.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telefono: {
      type:  DataTypes.BIGINT,
      unique: true,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Cuentahabientes',
  });
  return Cuentahabientes;
};