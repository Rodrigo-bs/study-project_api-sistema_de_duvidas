'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const topics = [
      {
        title: 'Ecologia',
        subject_id: 1,
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        title: 'Evolução',
        subject_id: 1,
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        title: 'Biomas',
        subject_id: 1,
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        title: 'Genética e Biotecnologia',
        subject_id: 1,
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        title: 'Verbo',
        subject_id: 3,
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        title: 'Adjetivo',
        subject_id: 3,
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        title: 'Substantivo',
        subject_id: 3,
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        title: 'semântica',
        subject_id: 3,
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        title: 'Concordância',
        subject_id: 3,
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
    ];
    
    await queryInterface.bulkInsert('topics', topics, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('topics', null, {});
  }
};
