/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('TypeCourses', [
      {
        courseId: 1,
        trainingId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        courseId: 1,
        trainingId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('TypeCourses', null, {});
  },
};
