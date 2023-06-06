const router = require('express').Router();
const { Recipe } = require('../../models');

router.get('/:id', async (req, res) => {
    try {
        const recipeData = await Recipe.findByPk(req.params.id);
        console.log(recipeData);
    
  
        res.status(200).json(recipeData);
      }
    catch (err) {
      res.status(400).json(err);
    }
  });