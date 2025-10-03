'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('artworks', [
      {
        id: '1',
        artwork_title: 'Home',
        artwork_year: '2021',
        media: 'Oil Paint on canvas',
        createdAt: new Date(),
        updatedAt: new Date(),
        id_artists: '1',
        id_locations: '2',
      },
      {
        id: '2',
        artwork_title: 'Kira',
        artwork_year: '2021',
        media: 'Acrylic on canvas',
        createdAt: new Date(),
        updatedAt: new Date(),
        id_artists: '2',
        id_locations: '3',
      },
      {
        id: '3',
        artwork_title: 'Art is a Party',
        artwork_year: '2019',
        media: 'Acrylic on canvas',
        createdAt: new Date(),
        updatedAt: new Date(),
        id_artists: '3',
        id_locations: '1',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('artworks', null, {});
  },
};
