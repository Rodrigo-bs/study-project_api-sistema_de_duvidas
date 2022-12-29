'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subject extends Model {
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