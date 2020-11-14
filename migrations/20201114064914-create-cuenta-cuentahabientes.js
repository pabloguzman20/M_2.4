'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CuentaCuentahabientes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idCuenta: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      idCuentahabiente: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('CuentaCuentahabientes');
  }
};