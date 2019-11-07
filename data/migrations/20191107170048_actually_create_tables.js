
exports.up = function(knex) {
    return knex.schema
  
    .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('ingredient_name')
        .unique()
        .notNullable()
    })
  
    .createTable('recipes', tbl => {
        tbl.increments()
        tbl.string('recipe_name')
          .unique()
          .notNullable()
    })
  
    .createTable('instructions', tbl => {
        tbl.increments()
        tbl.integer('step_number')
          .unsigned()
          .notNullable()
        tbl.string('step_desc')
          .notNullable()
        tbl.integer('recipe_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('recipes')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
    })
  
    .createTable('recipe_ingredients', tbl => {
        tbl.increments()
        tbl.float('quantity').notNullable()
        tbl.integer('recipe_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('recipes')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
      
        tbl.integer('ingredient_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('ingredients')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
  
    })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('recipe_ingredients')
      .dropTableIfExists('instructions')
      .dropTableIfExists('recipes')
      .dropTableIfExists('ingredients')
  };
  