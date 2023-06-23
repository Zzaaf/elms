/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Users', [{
      firstName: 'owner',
      lastName: 'owner',
      patronymic: 'owner',
      email: 'owner@owner',
      password: await bcrypt.hash('owner', 10),
      roleId: 1,
      telephone: '88005555535',
      aUrl: '',
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),

    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
