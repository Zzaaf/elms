const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Diploma extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'studentId' });
    }
  }
  Diploma.init({
    series: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    number: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    firstName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    patronymic: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    dateBirth: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    sex: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    snils: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    citizenship: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    typeEducation: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    studentId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Diploma',
  });
  return Diploma;
};
