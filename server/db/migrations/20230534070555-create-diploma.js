/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Diplomas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      series: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      number: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      patronymic: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      dateBirth: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      sex: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      snils: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      citizenship: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      typeEducation: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      studentId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
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
    await queryInterface.dropTable('Diplomas');
  },
};
