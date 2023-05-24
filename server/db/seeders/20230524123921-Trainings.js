/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Trainings', [
      {
        name: 'on line',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'off line',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Trainings', null, {});
  },
};
