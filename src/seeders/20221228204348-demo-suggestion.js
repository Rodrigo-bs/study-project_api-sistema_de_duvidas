'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const suggestions = [
      {
        title: 'Crase',
        status: 0,
        subject_id: 3,
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        title: 'Vírgula',
        status: 0,
        subject_id: 3,
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        title: 'Sujeito do verbo',
        status: 0,
        subject_id: 3,
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        title: 'Números naturais',
        status: 0,
        subject_id: 2,
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        title: 'Números inteiros',
        status: 0,
        subject_id: 2,
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        title: 'Formula do delta',
        status: 0,
        subject_id: 2,
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        title: 'Anatomia',
        status: 0,
        subject_id: 1,
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        title: 'Reprodução',
        status: 0,
        subject_id: 3,
        createdAt: Date.now(),
        updatedAt: Date.now()
      }
    ];

    await queryInterface.bulkInsert('suggestions', suggestions, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('suggestions', null, {});
  }
};
