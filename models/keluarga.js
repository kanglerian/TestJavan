'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Keluarga extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Keluarga.init({
    nama: DataTypes.STRING,
    jeniskelamin: DataTypes.BOOLEAN,
    idParent: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Keluarga',
  });
  return Keluarga;
};