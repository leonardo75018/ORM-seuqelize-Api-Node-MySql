'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('testes', [{
      name: 'John Doe',
      firstname: 'Doe',
      createdAt: new Date(),
      updatedAt: new Date(),

    }], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('People', null, {});

  }
};
