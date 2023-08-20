import { getMeals } from "../utils/fetchJsonData.js";
import { mealFactory } from "../factories/meal.js";

// display meals
async function displayData(recipes) {
  const mealsSection = document.querySelector(".recipe");
  console.log("mealsSection", mealsSection);
  recipes.forEach((meal) => {
    const mealModel = mealFactory(meal);
    const mealName = mealModel.getMealCardDom();
    mealsSection.appendChild(mealName);
  });
}
// collects data from meals
async function init() {
  const { recipes } = await getMeals();
  console.log("getMeals", recipes);
  displayData(recipes);
}

init();
