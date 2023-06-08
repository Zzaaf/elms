/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Presentations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      fileName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      typeDepartmentId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'TypeDepartments',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      phaseId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Phases',
          key: 'id',
        },
        onDelete: 'CASCADE',
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Presentations');
  },
};
