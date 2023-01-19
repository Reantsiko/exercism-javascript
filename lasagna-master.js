// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(remainingTime) {
  if (remainingTime === undefined) return "You forgot to set the timer.";
  if (remainingTime == 0) return "Lasagna is done.";
  return "Not done, please wait.";
}

export function preparationTime(layers, timePerLayer) {
  if (layers === undefined) return 0;
  return layers.length * (timePerLayer === undefined ? 2 : timePerLayer);
}

export function quantities(layers) {
  let noodleAmount = 0;
  let sauceAmount = 0;
  for (let layer of layers) {
    if (layer == "sauce") {
      sauceAmount += 0.2;
      continue;
    }
    if (layer == "noodles") {
      noodleAmount += 50;
    }
  }
  return { noodles: noodleAmount, sauce: sauceAmount };
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);

  console.log(myList);
}

export function scaleRecipe(recipe, scale) {
  let scaledRecipe = {};

  for (let ingredient in recipe) {
    scaledRecipe[ingredient] = (recipe[ingredient] * scale) / 2;
  }
  return scaledRecipe;
}
