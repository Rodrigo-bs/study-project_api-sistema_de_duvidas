'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Topic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
    modelName: 'Topics',
  });
  return Topic;
};