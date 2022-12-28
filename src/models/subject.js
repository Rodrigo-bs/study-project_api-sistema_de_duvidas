'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Subject.belongsTo(models.Educator, {
        foreignKey: 'subject_id'
      });

      Subject.belongsTo(models.Suggestion, {
        foreignKey: 'subject_id'
      });

      Subject.belongsTo(models.Topic, {
        foreignKey: 'subject_id'
      });

    }
  }
  Subject.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Subject',
  });
  return Subject;
};