'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Family extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Family.hasMany(models.Asset, {as: 'Family', foreignKey: 'idUser'});
    }
  }
  Family.init({
    name: DataTypes.STRING,
    gender: DataTypes.BOOLEAN,
    idParent: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Family',
  });
  return Family;
};