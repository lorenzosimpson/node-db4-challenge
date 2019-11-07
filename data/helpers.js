const db = require('../data/dbconfig');

function find() {
    return db.select('*').from('recipes')
}


/*
select recipe_name, ingredient_name 
from recipe_ingredients
join recipes
on recipe_ingredients.recipe_id = recipes.id
join ingredients
on recipe_ingredients.ingredient_id = ingredients.id
where recipe_name = 'Pumpkin Pie';
*/

module.exports = {
    find
}