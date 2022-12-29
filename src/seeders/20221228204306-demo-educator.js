'use strict';

const crypto = require('../core/crypto.js');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const educators = [
      {
        name: 'Paulo Findeiro dos Santos',
        email: 'paulo.findeiro@hotmail.com',
        user: 'paulo.findeiro',
        password: await crypto.hash('senha'),
        subject_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Renato dos Santos Guimalhões',
        email: 'renatin@gmail.com',
        user: 'renatinho',
        password: await crypto.hash('senha'),
        subject_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Guilherme dos Santos Nobre',
        email: 'guilindo.nobregmail.com',
        user: 'nobre',
        password: await crypto.hash('senha'),
        subject_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    await queryInterface.bulkInsert('educators', educators, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('educators', null, {});
  }
};
