const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    static associate({ TypeDepartment, Phase, GroupStudent }) {
      this.belongsTo(TypeDepartment, { foreignKey: 'typeDepartmentId' });
      this.belongsTo(Phase, { foreignKey: 'phaseId' });
      this.hasMany(GroupStudent, { foreignKey: 'groupId' });
    }
  }
  Group.init({
    name: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    typeDepartmentId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'TypeDepartments',
        key: 'id',
      },
    },
    phaseId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Phases',
        key: 'id',
      },
    },
    startDate: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    expirationDate: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'Group',
  });
  return Group;
};
