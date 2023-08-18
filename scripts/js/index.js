import { getMeals } from "../utils/fetchJsonData.js";
import { mealFactory } from "../factories/meal.js";
// display meals
async function displayData(recipes) {
  const mealsSection = document.querySelector(".meal_section");

  recipes.forEach((meal) => {
    const mealModel = mealFactory(meal);
    const mealCardDOM = mealModel.getMealCardDom();
    mealsSection.appendChild(mealCardDOM);
  });
}
// collects data from meals
async function init() {
  const { recipes } = await getMeals();
  console.log("getMeals", recipes);
  displayData(recipes);
}

init();
