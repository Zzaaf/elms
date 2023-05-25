const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class GroupStudent extends Model {
    static associate({ Group, User, Phase }) {
      this.belongsTo(User, { foreignKey: 'studentId' });
      this.belongsTo(Group, { foreignKey: 'groupId' });
      this.belongsTo(Phase, { foreignKey: 'phaseId' });
    }
  }
  GroupStudent.init({
    studentId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    groupId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Groups',
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
    status: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'GroupStudent',
  });
  return GroupStudent;
};
