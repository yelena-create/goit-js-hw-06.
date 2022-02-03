const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');
console.log(ingredientsEl);

const makeingredientsCard = ingredients => {
  return ingredients.map(ingredient => {
    const rowEl = document.createElement('li');
    rowEl.classList.add('item');
    rowEl.textContent = ingredient;
    return rowEl;
  });
};
const elements = makeingredientsCard(ingredients);

ingredientsEl.append(...elements);
 

















