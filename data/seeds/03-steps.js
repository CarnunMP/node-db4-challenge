
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {recipe_id: 1, step_number: 1, step_instruction: 'Melt a knob of butter in a frying pan.'},
        {recipe_id: 1, step_number: 2, step_instruction: 'Crack the egg into the pan.'},
        {recipe_id: 1, step_number: 3, step_instruction: 'Fry the egg until done.'},
        {recipe_id: 2, step_number: 1, step_instruction: 'Toast the bread.'},
        {recipe_id: 2, step_number: 2, step_instruction: 'Heat the beans.'},
        {recipe_id: 3, step_number: 1, step_instruction: 'Butter the bread.'},
        {recipe_id: 3, step_number: 2, step_instruction: 'Grate the cheese.'},
        {recipe_id: 3, step_number: 3, step_instruction: 'Put the cheese in the bread.'},
        {recipe_id: 3, step_number: 4, step_instruction: 'Slice the sandwich.'},
      ]);
    });
};
