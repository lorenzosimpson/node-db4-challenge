
exports.seed = function(knex) {
      return knex('ingredients').insert([
        { ingredient_name: 'Sugar'},
        { ingredient_name: 'Flour'},
        { ingredient_name: 'Butter'},
        { ingredient_name: 'Salmon'}
      ]);
};
