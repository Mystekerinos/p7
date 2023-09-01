import { getMeals } from "../utils/fetchJsonData.js";
import { mealFactory, allIngredients } from "../factories/meal.js";

const ingredients = [];
const appliance = "";
const ustensils = "";
let recipes = []; // Declare recipes at a higher scope
const ingredientArray = [];

console.log("ingredients", ingredients);

// display meals

async function displayData(recipes) {
  const mealsSection = document.querySelector(".meal_section");
  const ingredientButton = document.querySelector(".element_ingredients");
  const appareilButton = document.querySelector(".element_appareils");
  const ustensilesButton = document.querySelector(".element_ustensiles");

  recipes.forEach((meal, recipe) => {
    const mealModelSearch = mealFactory(recipe);
    const mealModel = mealFactory(meal, 0);
    const mealName = mealModel.getMealCardDom();
    mealsSection.appendChild(mealName);
    console.log("mealName", mealName);
    const ingredientElement = mealModel.searchButtonIngredient();
    ingredientButton.appendChild(ingredientElement);

    const isSearchIngredient = document.createElement("div");
    isSearchIngredient.classList.add("card_description_isSearchUstensiles");
    document
      .querySelector(".element_ingredients")
      .appendChild(isSearchIngredient);

    const ustensilesElement = mealModel.searchButtonUstensiles();
    ustensilesButton.appendChild(ustensilesElement);

    const isSearchUstensiles = document.createElement("div");
    isSearchUstensiles.classList.add("card_description_isSearchUstensiles");
    document
      .querySelector(".element_ingredients")
      .appendChild(isSearchUstensiles);

    // ...

    // Ajoutez un événement de saisie (keyup) à l'élément ingredientsInput
    ingredientsInput.addEventListener("keyup", () => {
      const ingredientsValue = ingredientsInput.value.trim().toLowerCase();
      console.log("Valeur saisie :", ingredientsValue);

      console.log(allIngredients); // Affiche tous les ingrédients

      // Récupérez les données d'ingrédients du modèle de repas (mealModel)
      const ingredientData = mealModel.getIngredients(allIngredients); // Remplacez "getIngredients" par la méthode réelle dans votre modèle

      console.log("ingredientData", ingredientData);
      // Assurez-vous que ingredientData est un tableau
      const ingredientArray = Array.isArray(ingredientData)
        ? ingredientData
        : [];

      console.log("ingredientArray", ingredientArray);
      // Filtrer les ingrédients qui correspondent à la valeur saisie
      const filteredIngredients = ingredientArray.filter((val) =>
        val.ingredient.toLowerCase().includes(ingredientsValue)
      );

      // Sélectionnez l'élément HTML où vous souhaitez afficher les ingrédients filtrés
      const ingredientButton = document.querySelector(".element_ingredients");

      // Effacez le contenu actuel de l'élément
      ingredientButton.innerHTML = "";

      // Créez un élément pour afficher la liste des ingrédients filtrés
      const ingredientList = document.createElement("div");
      ingredientList.classList.add("ingredient-list");

      console.log("filteredIngredients", filteredIngredients);
      // Parcourez les ingrédients filtrés et ajoutez-les à l'élément de la liste
      filteredIngredients.forEach((val) => {
        const ingredientItem = document.createElement("div");
        ingredientItem.textContent = val.ingredient;
        ingredientList.appendChild(ingredientItem);
      });

      console.log("ingredientList", ingredientList);
      // Ajoutez la liste d'ingrédients à l'élément ingredientButton
      ingredientButton.appendChild(ingredientList);
    });

    // ...

    const appareilElement = mealModel.searchButtonAppareils();
    appareilButton.appendChild(appareilElement);
  });
}
const ingredientsInput = document.getElementById("ingredientsInputId");
const appareilsInput = document.getElementById("appareilsInputId");
const ustensilesInput = document.getElementById("ustensilesInputId");
const dropDownIngredients = document.getElementById("myDropdownIngredients");
const dropDownAppareils = document.getElementById("myDropdownAppareils");
const dropDownUstensiles = document.getElementById("myDropdownUstensiles");
const btnDropDownIngredient = document.getElementById("dropbtnIngredientsFold");
const btnDropDownAppareils = document.getElementById("dropbtnAppareilsFold");
const btnDropDownUstensiles = document.getElementById("dropbtnUstensilesFold");

// Écoutez l'événement d'appui sur la touche Enter dans l'élément de saisie

// Close Button
const btnDropDownIngredientClose = document.getElementById(
  "dropbtnIngredientsUnFold"
);
const btnDropDownAppareilsClose = document.getElementById(
  "dropbtnAppareilsUnFold"
);
const btnDropDownUstensilesClose = document.getElementById(
  "dropbtnUstensilesUnfold"
);

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

function myCloseFunctionIngredients() {
  dropDownIngredients.style.display = "none";
}

function myCloseFunctionAppareils() {
  dropDownAppareils.style.display = "none";
}

function myCloseFunctionUstensiles() {
  dropDownUstensiles.style.display = "none";
}

btnDropDownIngredientClose.addEventListener(
  "click",
  myCloseFunctionIngredients
);
btnDropDownAppareilsClose.addEventListener("click", myCloseFunctionAppareils);
btnDropDownUstensilesClose.addEventListener("click", myCloseFunctionUstensiles);

ingredientsInput.addEventListener("keyup", () => {
  const ingredientsValue = ingredientsInput.value.trim().toLowerCase();
  console.log("Valeur saisie :", ingredientsValue);
});

appareilsInput.addEventListener("keyup", () => {
  const appareilsValue = appareilsInput.value.trim().toLowerCase();
  console.log("Valeur saisie :", appareilsValue);
});

ustensilesInput.addEventListener("keyup", () => {
  const ustensilesValue = ustensilesInput.value.trim().toLowerCase();
  console.log("Valeur saisie :", ustensilesValue);
});

console.log("ustensilesValue", ustensilesInput.value);
console.log("appareilsValue", appareilsInput.value);

console.log("mealFactory", mealFactory);

// Collects data from meals
async function init() {
  const { recipes } = await getMeals();
  console.log("getMeals", recipes);
  displayData(recipes);
}

init();
