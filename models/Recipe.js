const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Ingredient = require('./Ingredient');


const Recipe = sequelize.define('Recipe', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

Recipe.belongsToMany(Ingredient, { through: 'RecipeIngredient' });
Ingredient.belongsToMany(Recipe, { through: 'RecipeIngredient' });

module.exports = Recipe;