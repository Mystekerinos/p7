import { mealFactory } from "../factories/meal.js";
// display photographers
async function displayData() {
  const mealSection = document.querySelector(".meal_section");

  const mealMenu = mealFactory();
  const mealCardDom = mealMenu.getMealCardDom();
  mealSection.appendChild(mealCardDom);

  // collects data from photographers
  async function init() {
    const { photographers } = await getPhotographers();

    displayData(photographers);
  }
}
init();
