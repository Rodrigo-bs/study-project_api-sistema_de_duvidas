'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const questions = [
      {
        content: 'como eu faço para usar o verbo na segunda pessoa do plural?',
        date: Date.now(),
        status: 0,
        topic_id: 6,
        educator_id: 3,
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        content: 'como eu faço para usar o adjetivo no sujeito?',
        date: Date.now(),
        status: 0,
        topic_id: 7,
        educator_id: 3,
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        content: 'O que é adjetivo?',
        date: Date.now(),
        status: 0,
        topic_id: 6,
        educator_id: 3,
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        content: 'O que é ecologia?',
        date: Date.now(),
        status: 0,
        topic_id: 1,
        educator_id: 1,
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        content: 'Como eu aplico os conceitos de ecologia na pratica?',
        date: Date.now(),
        status: 0,
        topic_id: 1,
        educator_id: 1,
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        content: 'Evolução, como eu analiso isso na pratica?',
        date: Date.now(),
        status: 0,
        topic_id: 2,
        educator_id: 1,
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        content: 'O que é Biomas?',
        date: Date.now(),
        status: 0,
        topic_id: 3,
        educator_id: 1,
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        content: 'Como diferenciar genética de outros fatores?',
        date: Date.now(),
        status: 0,
        topic_id: 4,
        educator_id: 1,
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
    ];

    await queryInterface.bulkInsert('questions', questions, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('questions', null, {});
  }
};
