const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Ingredient = require('./Ingredients');
const CuisineCategory = require('./CuisineCategory');

const Recipes = sequelize.define('Recipes', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cuisineCategoryId: {
    type: DataTypes.INTEGER,
    // allowNull: false,
    references: {
      model: CuisineCategory,
      key: 'id'
    }
  }
});

Recipes.belongsTo(CuisineCategory, { foreignKey: 'cuisineCategoryId' });
CuisineCategory.hasMany(Recipes, { foreignKey: 'cuisineCategoryId' });

module.exports = Recipes;









// const Recipes = sequelize.define('Recipes', {
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false
//   }
// });

Recipes.belongsToMany(Ingredient, { through: 'RecipeIngredient' });

Ingredient.belongsToMany(Recipes, { through: 'RecipeIngredient' });



module.exports = Recipes;

