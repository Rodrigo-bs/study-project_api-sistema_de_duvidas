'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const questions = [
      {
        content: 'como eu faço para usar o verbo na segunda pessoa do plural?',
        date: new Date(),
        status: 0,
        topic_id: 6,
        educator_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'como eu faço para usar o adjetivo no sujeito?',
        date: new Date(),
        status: 0,
        topic_id: 7,
        educator_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'O que é adjetivo?',
        date: new Date(),
        status: 0,
        topic_id: 6,
        educator_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'O que é ecologia?',
        date: new Date(),
        status: 0,
        topic_id: 1,
        educator_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Como eu aplico os conceitos de ecologia na pratica?',
        date: new Date(),
        status: 0,
        topic_id: 1,
        educator_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Evolução, como eu analiso isso na pratica?',
        date: new Date(),
        status: 0,
        topic_id: 2,
        educator_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'O que é Biomas?',
        date: new Date(),
        status: 0,
        topic_id: 3,
        educator_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Como diferenciar genética de outros fatores?',
        date: new Date(),
        status: 0,
        topic_id: 4,
        educator_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ];

    await queryInterface.bulkInsert('questions', questions, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('questions', null, {});
  }
};
