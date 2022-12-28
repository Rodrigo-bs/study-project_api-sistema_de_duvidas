'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const subjects = [
      {
        title: 'Biologia',
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        title: 'Matemática',
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        title: 'Português',
        createdAt: Date.now(),
        updatedAt: Date.now()
      }
    ];

    await queryInterface.bulkInsert('subjects', subjects, {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('subjects', null, {});
  }
};
