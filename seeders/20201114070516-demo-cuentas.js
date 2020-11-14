'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Cuentas",
      [
        {
          id: 1,
          saldo: 6666,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          saldo: 180000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          saldo: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Cuentas", null, {});
  }
};
