'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Topic extends Model {
    static associate(models) {
      Topic.hasOne(models.Subject, {
        foreignKey: 'subject_id'
      });

      Topic.belongsTo(models.Question, {
        foreignKey: 'topic_id'
      });
    }
  }
  Topic.init({
    title: DataTypes.STRING,
    subject_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Topic',
  });
  return Topic;
};