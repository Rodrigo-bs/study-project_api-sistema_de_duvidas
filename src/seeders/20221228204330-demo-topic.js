'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const topics = [
      {
        title: 'Ecologia',
        subject_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Evolução',
        subject_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Biomas',
        subject_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Genética e Biotecnologia',
        subject_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Verbo',
        subject_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Adjetivo',
        subject_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Substantivo',
        subject_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'semântica',
        subject_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Concordância',
        subject_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ];
    
    await queryInterface.bulkInsert('topics', topics, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('topics', null, {});
  }
};
