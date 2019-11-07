const express = require('express')
const router = express.Router();

const Recipes = require('../data/helpers')

router.get('/', (req, res) => {
    Recipes
    .find()
    .then(recipes => res.status(200).json(recipes))
    .catch(err => {
        res.status(500).json({ message: 'Failed to get recipes' });
      });
})

module.exports = router;