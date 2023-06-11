const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Presentation extends Model {
    static associate({ Phase, TypeDepartment }) {
      this.belongsTo(Phase, { foreignKey: 'phaseId' });
      this.belongsTo(TypeDepartment, { foreignKey: 'typeDepartmentId' });
    }
  }
  Presentation.init(
    {
      title: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      fileName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      typeDepartmentId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'TypeDepartments',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      phaseId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Phases',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'Presentation',
    }
  );
  return Presentation;
};
