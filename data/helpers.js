const db = require('../data/dbconfig');

function getRecipes() {
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

/*
select ingredient_name as ingredients, quantity from recipe_ingredients
join ingredients
on recipe_ingredients.ingredient_id = ingredients.id
where recipe_id = '3';
*/

function getShoppingList(id) {
    return db.select('ingredient_name', 'quantity')
    .from('recipe_ingredients')
    .join('ingredients', 'recipe_ingredients.ingredient_id', 'ingredients.id')
    .where('recipe_id', id)
}

/*
select step_number, step_desc
from instructions
join recipes
on instructions.recipe_id = recipes.id
where recipe_id = '1';
*/

function getInstructions(id) {
    return db.select('step_number', 'step_desc')
    .from('instructions')
    .join('recipes', 'instructions.recipe_id', 'recipes.id')
    .where('recipe_id', id)
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}