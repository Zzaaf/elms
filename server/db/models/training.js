const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Training extends Model {
    static associate({ TypeCourse }) {
      this.hasMany(TypeCourse, { foreignKey: 'trainingId' });
    }
  }
  Training.init({
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
    modelName: 'Training',
  });
  return Training;
};
