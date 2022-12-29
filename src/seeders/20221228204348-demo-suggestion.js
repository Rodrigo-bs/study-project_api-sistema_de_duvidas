'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const suggestions = [
      {
        title: 'Crase',
        status: 0,
        subject_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Vírgula',
        status: 0,
        subject_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Sujeito do verbo',
        status: 0,
        subject_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Números naturais',
        status: 0,
        subject_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Números inteiros',
        status: 0,
        subject_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Formula do delta',
        status: 0,
        subject_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Anatomia',
        status: 0,
        subject_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Reprodução',
        status: 0,
        subject_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    await queryInterface.bulkInsert('suggestions', suggestions, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('suggestions', null, {});
  }
};
