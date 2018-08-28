export function updateCrust(crust) {
  return {
    type: 'UPDATE_CRUST',
    payload: crust,
  }
}

export function updateIngredients(ingredients, crust) {
  console.log(crust)
  return {
    type: 'UPDATE_INGREDIENTS',
    payload: [ingredients, crust],
  }
}
