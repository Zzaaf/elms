const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Role, GroupStudent }) {
      this.belongsTo(Role, { foreignKey: 'roleId' });
      this.hasMany(GroupStudent, { foreignKey: 'studentId' });
    }
  }
  User.init({
    firstName: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    lastName: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    patronymic: {
      type: DataTypes.TEXT,
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.TEXT,
    },
    password: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    gitHub: {
      type: DataTypes.TEXT,
    },
    roleId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Roles',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
