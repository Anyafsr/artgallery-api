'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('artists', [
      {
        id: '1',
        artist_name: 'Anya Fidela',
        email: 'anya@gmel.com',
        biography: 'a beautiful young artist from Banjarmasin, Indonesia',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '2',
        artist_name: 'Roby Dwi Antono',
        email: 'contact@robydwiantono.com',
        biography:
          'An Indonesian contemporary artist known for his surrealist paintings and sculptures. His works often feature childlike figures with large, expressive eyes, blending themes of nature, fantasy, and pop culture to create a unique and dreamlike aesthetic. He has gained significant international recognition with exhibitions across Asia, Europe, and the United States.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '3',
        artist_name: 'Naufal Abshar',
        email: 'info@naufalabshar.com',
        biography:
          'A prominent Indonesian artist known for his playful and satirical paintings that offer commentary on contemporary life and social issues. His signature style often includes crowded compositions and recurring laughing figures, using humor to critique consumerism, social media culture, and the absurdities of the modern world. His work is easily recognizable and has been featured in numerous exhibitions in Indonesia and abroad.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('artists', null, {});
  },
};
