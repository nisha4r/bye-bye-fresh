// // initiates sequelize connection
// const sequelize = require('../config/connection')

// // imports the recipe model
// const Recipe = require('../models/Recipe')

// // imports the ingredient model
// const Ingredient = require('../models/Ingredient')


// // allows it to read the json file in seeds
// const fs = require('fs');

// // I honestly don't understand this but it is in all our activities
// // so I am including it.
// const path = require('path');


// (async () => {
//     try {
//         // Sync models to the database and drop existing tables (force: true)
//         await sequelize.sync({ force: true });
//         // creates a constant called seedData which reads the recipes-seeds.json file   
//         const seedData = fs.readFileSync(path.join(__dirname, 'recipes-seeds.json'), 'utf8');
//         // parses the json file into a constant called recipes
//         const recipes = JSON.parse(seedData);
//         // iterates over each recipe in the recipes constant
//         for (const recipeData of recipes) {
//             const { recipe, ingredients } = recipeData;
//             // a named recipe is created! 
//             const createdRecipe = await Recipe.create({ name: recipe });
//             // iterates over each ingredient in the ingredients constant
//             for (const ingredient of ingredients) {
//                 // a named ingredient is created!
//                 const [createdIngredient] = await Ingredient.findOrCreate({
//                     where: { name: ingredient },
//                 });
//                 // assuming all of that works, this should spit out the recipe and the ingredient(s)?
//                 await createdRecipe.addIngredient(createdIngredient);
//             }

//         }

//         console.log('Database seeding complete!');
//     } catch (error) {
//         console.error('Error seeding the database:', error);
//     } finally {
//         sequelize.close(); // Close the database connection
//     }
// })();





// initiates sequelize connection
const sequelize = require('../config/connection');

// imports the recipe model
const Recipe = require('../models/Recipe');

// imports the ingredient model
const Ingredient = require('../models/Ingredient');

// allows it to read the JSON file in seeds
const fs = require('fs');

// I honestly don't understand this but it is in all our activities
// so I am including it.
const path = require('path');

(async () => {
    try {
        // Sync models to the database and drop existing tables (force: true)
        await sequelize.sync({ force: true });

        // creates a constant called seedData which reads the recipes-seeds.json file   
        const seedData = fs.readFileSync(path.join(__dirname, 'recipes-seeds.json'), 'utf8');
        // parses the JSON file into a constant called recipes
        const recipes = JSON.parse(seedData);

        // Iterate over each recipe in the recipes constant
        for (const recipeData of recipes) {
            const { recipe, ingredients, cuisine } = recipeData;
            // Create a named recipe
            const createdRecipe = await Recipe.create({ name: recipe });

            // Insert cuisine data into CuisineCategory table
            await sequelize.query(
                `
        INSERT INTO CuisineCategory (name, cuisine)
        VALUES (?, ?);
        `,
                {
                    replacements: [recipe, cuisine],
                    type: sequelize.QueryTypes.INSERT,
                }
            );

            // Iterate over each ingredient in the ingredients constant
            for (const ingredient of ingredients) {
                // Create a named ingredient
                const [createdIngredient] = await Ingredient.findOrCreate({
                    where: { name: ingredient },
                });
                // Assuming all of that works, this should associate the recipe and the ingredient(s)
                await createdRecipe.addIngredient(createdIngredient);
            }
        }

        console.log('Database seeding complete!');
    } catch (error) {
        console.error('Error seeding the database:', error);
    } finally {
        sequelize.close(); // Close the database connection
    }
})();