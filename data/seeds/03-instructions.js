
exports.seed = function(knex) {
      return knex('instructions').insert([
        { recipe_id: 1, step_number: 1, step_desc: 'Crack egg'},
        { recipe_id: 1, step_number: 2, step_desc: 'Stir pot'},
        { recipe_id: 1, step_number: 3, step_desc: 'Enjoy food'},
        { recipe_id: 2, step_number: 1, step_desc: 'Break bread'},
        { recipe_id: 2, step_number: 2, step_desc: 'Watch it grow'},
        { recipe_id: 2, step_number: 3, step_desc: 'Eat it all'},
        { recipe_id: 3, step_number: 1, step_desc: 'Begin making food'},
        { recipe_id: 3, step_number: 2, step_desc: 'Continue making food'},
        { recipe_id: 3, step_number: 3, step_desc: 'Eat the food'},
      ]);
};
