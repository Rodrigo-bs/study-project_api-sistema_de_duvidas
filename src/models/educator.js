'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Educator extends Model {
    static associate(models) {
      Educator.belongsTo(models.Subject, {
        foreignKey: 'subject_id'
      });

      Educator.hasMany(models.Question, {
        foreignKey: 'educator_id'
      });
    }
  }
  Educator.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    user: DataTypes.STRING,
    password: DataTypes.STRING,
    subject_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Educator',
  });
  return Educator;
};