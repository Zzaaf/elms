/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Phases', [
      { name: '0', createdAt: new Date(), updatedAt: new Date() },
      { name: '1', createdAt: new Date(), updatedAt: new Date() },
      { name: '2', createdAt: new Date(), updatedAt: new Date() },
      { name: '3', createdAt: new Date(), updatedAt: new Date() }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Phases', null, {});
  },
};
