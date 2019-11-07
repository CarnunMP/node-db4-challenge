
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_id: 1, ingredient_name: 'egg'},
        {ingredient_id: 2, ingredient_name: 'bread', ingredient_unit: 'slice'},
        {ingredient_id: 3, ingredient_name: 'butter', ingredient_unit: 'knob'},
        {ingredient_id: 4, ingredient_name: 'cheese', ingredient_unit: 'grams'},
        {ingredient_id: 5, ingredient_name: 'beans', ingredient_unit: 'tin'}
      ]);
    });
};
