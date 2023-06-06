const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class RecipeCuisine extends Model { }

RecipeCuisine.init({}, { sequelize, modelName: 'recipeCuisine' });

module.exports = RecipeCuisine;