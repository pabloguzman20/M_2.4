'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "CuentaCuentahabientes",
      [
        {
          idCuenta: 1,
          idCuentahabiente:2,
        },
        {
          idCuenta: 2,
          idCuentahabiente:2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("CuentaCuentahabientes", null, {});
  }
};
