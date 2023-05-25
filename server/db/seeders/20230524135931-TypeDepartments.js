/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const data = [
      { departmentId: 1, typeCourseId: 2 },
      { departmentId: 2, typeCourseId: 2 },
      { departmentId: 3, typeCourseId: 1 },
      { departmentId: 4, typeCourseId: 1 },
    ];
    const arrTypeDepartments = data.map((el) => (
      {
        ...el,
        createdAt: new Date(),
        updatedAt: new Date(),
      }));
    await queryInterface.bulkInsert('TypeDepartments', arrTypeDepartments, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('TypeDepartments', null, {});
  },
};
