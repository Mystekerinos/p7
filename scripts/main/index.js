let recipes = [];

async function getDataJson() {
  const response = await fetch("data/recipes.json");
  recipes = (await response.json()).recipes;
  init();
}
/*** Afficher les cards ***/
function displayData(recipes) {
  const recipeSection = document.getElementById("recipes__cards");
  recipeSection.innerHTML = "";
  for (const recipe of recipes) {
    const recipeCard = getRecipeCard(recipe);
    recipeSection.appendChild(recipeCard);
  }
  renderRecipes(recipes.length);
}

function init() {
  displayData(recipes);

  filterIngredients();

  filterAppliances();

  filterUstensils();

  isArrowClicked();

  fillFilters(recipes);
}

getDataJson();
