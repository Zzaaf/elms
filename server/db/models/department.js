const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Department extends Model {
    static associate({ TypeDepartment }) {
      this.hasMany(TypeDepartment, { foreignKey: 'departmentId' });
    }
  }
  Department.init({
    name: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Department',
  });
  return Department;
};
