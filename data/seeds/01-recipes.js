
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, recipe_name: 'Fried Egg'},
        {id: 2, recipe_name: 'Beans on Toast'},
        {id: 3, recipe_name: 'Cheese Sandwich'}
      ]);
    });
};
