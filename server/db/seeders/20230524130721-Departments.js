/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const data = [
      {
        name: 'Санкт-Петербург', description: 'ул. Кирочная 19, этаж 4, офис 28',
      },
      {
        name: 'Москва', description: 'ул. Орджоникидзе, 11 стр. 10',
      },
      {
        name: 'FULL-TIME', description: 'ПОЛНАЯ ЗАНЯТОСТЬ',
      },
      {
        name: 'PART-TIME', description: 'ЧАСТИЧНАЯ ЗАНЯТОСТЬ',
      },
    ];
    const arrDepartments = data.map((el) => (
      {
        ...el,
        createdAt: new Date(),
        updatedAt: new Date(),
      }));
    await queryInterface.bulkInsert('Departments', arrDepartments, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Departments', null, {});
  },
};
