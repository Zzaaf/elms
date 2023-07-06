/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcrypt');
const data = require('../studentsSeeders');

module.exports = {
  async up(queryInterface) {
    const arrStudents = await Promise.all(data.map(async (el) => (
      {
        ...el,
        patronymic: 'Отчество',
        password: await bcrypt.hash('2222222', 10),
        roleId: 2,
        aUrl: '',
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      })));
    await queryInterface.bulkInsert('Users', arrStudents, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
