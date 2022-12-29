'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Suggestion extends Model {
    static associate(models) {
      Suggestion.hasOne(models.Educator, {
        foreignKey: 'subject_id'
      });

      Suggestion.belongsTo(models.Educator, {
        foreignKey: 'subject_id'
      });
    }
  }
  Suggestion.init({
    title: DataTypes.STRING,
    status: DataTypes.INTEGER,
    subject_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Suggestion',
  });
  return Suggestion;
};