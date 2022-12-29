'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const subjects = [
      {
        title: 'Biologia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Matemática',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Português',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    await queryInterface.bulkInsert('subjects', subjects, {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('subjects', null, {});
  }
};
