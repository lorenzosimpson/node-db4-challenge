
exports.seed = function(knex) {
      return knex('recipes').insert([
        { recipe_name: 'Pumpkin Pie' },
        { recipe_name: 'Chocolate Cake' },
        { recipe_name: 'Baked Salmon' },
      ]);
};
