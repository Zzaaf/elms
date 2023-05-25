const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    static associate({ TypeCourse }) {
      this.hasMany(TypeCourse, { foreignKey: 'courseId' });
    }
  }
  Course.init({
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
    modelName: 'Course',
  });
  return Course;
};
