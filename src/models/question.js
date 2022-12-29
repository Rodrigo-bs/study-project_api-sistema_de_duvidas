'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate(models) {
      Question.hasOne(models.Topic, {
        foreignKey: 'topic_id'
      });

      Question.hasOne(models.Educator, {
        foreignKey: 'educator_id'
      });
    }
  }
  Question.init({
    content: DataTypes.STRING,
    date: DataTypes.DATE,
    status: DataTypes.INTEGER,
    topic_id: DataTypes.INTEGER,
    educator_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};