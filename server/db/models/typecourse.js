const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TypeCourse extends Model {
    static associate({ Course, Training, TypeDepartment }) {
      this.belongsTo(Course, { foreignKey: 'courseId' });
      this.belongsTo(Training, { foreignKey: 'trainingId' });
      this.hasMany(TypeDepartment, { foreignKey: 'typeCourseId' });
    }
  }
  TypeCourse.init({
    courseId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Courses',
        key: 'id',
      },
    },
    trainingId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Trainings',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'TypeCourse',
  });
  return TypeCourse;
};
