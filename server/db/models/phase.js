const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Phase extends Model {
    static associate({ Group, GroupStudent }) {
      this.hasMany(Group, { foreignKey: 'phaseId' });
      this.hasMany(GroupStudent, { foreignKey: 'phaseId' });
    }
  }
  Phase.init({
    allowNull: false,
    type: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Phase',
  });
  return Phase;
};
