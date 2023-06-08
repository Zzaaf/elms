const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TypeDepartment extends Model {
    static associate({ TypeCourse, Department, Group }) {
      this.belongsTo(TypeCourse, { foreignKey: 'typeCourseId' });
      this.belongsTo(Department, { foreignKey: 'departmentId' });
      this.hasMany(Group, { foreignKey: 'typeDepartmentId' });
      this.hasMany(Presentation, { foreignKey: 'typeDepartmentId' });
    }
  }
  TypeDepartment.init(
    {
      departmentId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Departments',
          key: 'id',
        },
      },
      typeCourseId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'TypeCourses',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'TypeDepartment',
    }
  );
  return TypeDepartment;
};
