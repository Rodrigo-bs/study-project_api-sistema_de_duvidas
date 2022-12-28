'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Educator extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Educator.hasOne(models.Subject, {
        foreignKey: 'subject_id'
      });

      Educator.belongsTo(models.Question, {
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