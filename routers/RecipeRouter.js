const express = require('express')
const router = express.Router();

const Recipes = require('../data/helpers')

router.get('/', (req, res) => {
    Recipes
    .getRecipes()
    .then(recipes => res.status(200).json(recipes))
    .catch(err => {
        res.status(500).json({ message: 'Failed to get recipes' });
      });
})

router.get('/:id', (req, res) => {
    Recipes
    .getShoppingList(req.params.id)
    .then(list => res.status(200).json(list))
    .catch(err => {
        res.status(500).json({ message: 'Failed to get list' });
      });
})

router.get('/:id/instructions', (req, res) => {
    Recipes
    .getInstructions(req.params.id)
    .then(inst => res.status(200).json(inst))
    .catch(err => res.status(500).json({ message: 'Failed to get instructions' }))
})

module.exports = router;