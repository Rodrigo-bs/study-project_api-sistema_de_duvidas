'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subject extends Model {
    static associate(models) {
      Subject.hasMany(models.Educator, {
        foreignKey: 'subject_id'
      });

      Subject.hasMany(models.Suggestion, {
        foreignKey: 'subject_id'
      });

      Subject.hasMany(models.Topic, {
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