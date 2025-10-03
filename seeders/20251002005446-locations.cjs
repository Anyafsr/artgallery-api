'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('locations', [
      {
        id: '1',
        location_name: 'Galeri Nasional Indonesia',
        location_address:
          'Jl. Medan Merdeka Tim. No.14, RT.6/RW.1, Gambir, Kecamatan Gambir, Kota Jakarta Pusat',
        city: 'Jakarta Pusat',
        country: 'Indonesia',
        capacity: '250',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '2',
        location_name:
          'Museum MACAN (Modern and Contemporary Art in Nusantara)',
        location_address:
          'AKR Tower, Jl. Panjang No.5 Level M, Kb. Jeruk, Kec. Kb. Jeruk, Kota Jakarta Barat',
        city: 'Jakarta Barat',
        country: 'Indonesia',
        capacity: '1000',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '3',
        location_name: 'NuArt Sculpture Park',
        location_address:
          'Setra Duta Raya No.L6, Ciwaruga, Kec. Parongpong, Bandung',
        city: 'Bandung',
        country: 'Indonesia',
        capacity: '1500',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('locations', null, {});
  },
};
