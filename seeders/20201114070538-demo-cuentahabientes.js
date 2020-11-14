'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Cuentahabientes",
      [
        {
          id: 1,
          nombre: "Pablo Guzman",
          telefono: 6863243241,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          nombre: "Armando Esquer",
          telefono: 6863127211,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          nombre: "Michelle Ceballos",
          telefono: 6861238422,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Cuentahabientes", null, {});
  }
};
