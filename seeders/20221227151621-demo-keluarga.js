'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Keluargas', [
    {
      nama: 'Bani',
      jeniskelamin: 1,
      idParent: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nama: 'Budi',
      jeniskelamin: 1,
      idParent: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nama: 'Nida',
      jeniskelamin: 0,
      idParent: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nama: 'Andi',
      jeniskelamin: 1,
      idParent: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nama: 'Sigit',
      jeniskelamin: 1,
      idParent: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nama: 'Hari',
      jeniskelamin: 1,
      idParent: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nama: 'Siti',
      jeniskelamin: 0,
      idParent: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nama: 'Bila',
      jeniskelamin: 0,
      idParent: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nama: 'Lesti',
      jeniskelamin: 0,
      idParent: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nama: 'Diki',
      jeniskelamin: 1,
      idParent: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nama: 'Doni',
      jeniskelamin: 1,
      idParent: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nama: 'Toni',
      jeniskelamin: 1,
      idParent: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Keluargas', null, {});
  }
};