
// bringing in sequelize connection 
const sequelize = require('../config/connection');


// creates the Ingredient model
const Ingredient = sequelize.define('Ingredient', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Ingredient;