
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', table => {
      table.increments('recipe_id');
      table.string('recipe_name', 128)
        .notNullable();
    })
    .createTable('ingredients', table => {
      table.increments('ingredient_id');
      table.string('ingredient_name', 128)
        .notNullable();
      table.string('ingredient_unit', 128);
    })
    .createTable('steps', table => {
      table.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipe_id').inTable('recipes');
      table.integer('step_number')
        .unsigned()
        .notNullable();
      table.primary(['recipe_id', 'step_number']);
      table.string('step_instruction', 256)
        .notNullable();
    })
    .createTable('ingredientMap', table => {
      table.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipe_id').inTable('recipes');
      table.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('ingredient_id').inTable('ingredients');
      table.decimal('quantity')
        .notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('ingredientMap')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};
