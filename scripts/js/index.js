import { getMeals } from "../utils/fetchJsonData.js";
import { mealFactory } from "../factories/meal.js";

// display meals

async function displayData(recipes) {
  const mealsSection = document.querySelector(".meal_section");
  const ingredientButton = document.querySelector(".element_ingredients");
  const appareilButton = document.querySelector(".element_appareils");
  const ustensilesButton = document.querySelector(".element_ustensiles");
  console.log("mealsSection", mealsSection);
  recipes.forEach((meal) => {
    const mealModel = mealFactory(meal, 0);
    const mealName = mealModel.getMealCardDom();
    mealsSection.appendChild(mealName);
    const ingredientElement = mealModel.searchButtonIngredient();
    ingredientButton.appendChild(ingredientElement);
    const appareilElement = mealModel.searchButtonAppareiles();
    appareilButton.appendChild(appareilElement);
    const ustensilesElement = mealModel.searchButtonUstensiles();
    ustensilesButton.appendChild(ustensilesElement);
  });
}

const dropDownIngredients = document.getElementById("myDropdownIngredients");
const dropDownAppareils = document.getElementById("myDropdownAppareils");
const dropDownUstensiles = document.getElementById("myDropdownUstensiles");
const btnDropDownIngredient = document.getElementById("dropbtnIngredientsFold");
const btnDropDownAppareils = document.getElementById("dropbtnAppareilsFold");
const btnDropDownUstensiles = document.getElementById("dropbtnUstensilesFold");

function myOpenFunctionIngredients() {
  dropDownIngredients.style.display = "block";
}

function myOpenFunctionAppareils() {
  dropDownAppareils.style.display = "block";
}

function myOpenFunctionUstensiles() {
  dropDownUstensiles.style.display = "block";
}

btnDropDownIngredient.addEventListener("click", myOpenFunctionIngredients);
btnDropDownAppareils.addEventListener("click", myOpenFunctionAppareils);
btnDropDownUstensiles.addEventListener("click", myOpenFunctionUstensiles);

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  var div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    let txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
// collects data from meals
async function init() {
  const { recipes } = await getMeals();
  console.log("getMeals", recipes);
  displayData(recipes);
  filterFunction();
}

init();
