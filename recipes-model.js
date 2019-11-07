const db = require('./data/db-config');

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
}

function getRecipes() {
  return db('recipes')
    .select('recipes.recipe_name');
}

function getShoppingList(recipe_id) {
  return db('recipes AS r')
    .join('ingredientMap AS im', 'r.recipe_id', 'im.recipe_id')
    .join('ingredients AS i', 'im.ingredient_id', 'i.ingredient_id')
    .select(
      'i.ingredient_name',
      'im.quantity',
      'i.ingredient_unit'
    )
    .where({ 'r.recipe_id': recipe_id });
}

function getInstructions(recipe_id) {
  return db('steps AS s')
    .select('s.step_intruction')
    .where({ 's.recipe_id': recipe_id })
    .orderBy('s.step_number', 'asc');
}