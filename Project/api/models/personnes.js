'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class personnes extends Model {

    static associate(models) {
      // define association here
    }
  };
  personnes.init({
    nom: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'personnes',
  });
  return personnes;
};