const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Role, GroupStudent, Diploma }) {
      this.belongsTo(Role, { foreignKey: 'roleId' });
      this.hasMany(GroupStudent, { foreignKey: 'studentId' });
      this.hasMany(Diploma, { foreignKey: 'studentId' });
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
    status: {
      allowNull: false,
      type: DataTypes.TEXT,
      defaultValue: false,
    },
    avatar: {
      allowNull: false,
      type: DataTypes.TEXT,
      defaultValue: '/images/avatar.png',
    },
    telephone: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    aUrl: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
