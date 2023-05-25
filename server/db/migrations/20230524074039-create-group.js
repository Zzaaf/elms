/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Groups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      typeDepartmentId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'TypeDepartments',
          key: 'id',
        },
      },
      phaseId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Phases',
          key: 'id',
        },
      },
      startDate: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      expirationDate: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Groups');
  },
};
