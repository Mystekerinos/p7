const searchBarInputGroup = document.querySelector(".search__input-group");
const searchBarInput = document.querySelector(".search__input");
const noResultText = document.querySelector(".no-result-message");
const deleteSearchBar = document.createElement("i");
deleteSearchBar.className = "fa-solid fa-xmark";
deleteSearchBar.style.cursor = "pointer";
deleteSearchBar.style.width = "20px";
deleteSearchBar.style.width = "20px";
deleteSearchBar.style.zIndex = "3";
deleteSearchBar.style.top = "51px";
deleteSearchBar.style.right = "66px";
deleteSearchBar.style.position = "absolute";
deleteSearchBar.style.color = "#1B1B1B";
deleteSearchBar.style.display = "none";

searchBarInputGroup.appendChild(deleteSearchBar);
/** Fonction de recherche  **/
function searchLive() {
  let tagsUsed = false;
  recipesToDisplay = [];
  let mainInput;

  // Retourne un tableau 'recipeToDisplay' qui suit les règles de ma regex.
  if (searchBarInput.value.length > 2) {
    mainInput = searchBarInput.value.toLowerCase().trim();
    const regex = new RegExp(`${mainInput}`);
    for (let i = 0; i < recipes.length; i++) {
      let recipeIsMatching = false;
      if (recipes[i].name.toLowerCase().includes(mainInput)) {
        recipeIsMatching = true;
      } else if (regex.test(recipes[i].description)) {
        recipeIsMatching = true;
      } else {
        for (let j = 0; j < recipes[i].ingredients.length; j++) {
          if (regex.test(recipes[i].ingredients[j].ingredient)) {
            recipeIsMatching = true;
            break;
          }
        }
      }
      if (recipeIsMatching === true) {
        recipesToDisplay.push(recipes[i]);
      }
    }
    /* Remplir les filtres avec le tableau retourné */
    fillFilters(recipesToDisplay);
  }

  if (
    Array.from(
      document.querySelectorAll(
        ".tag__ingredients--wrapper .tag__ingredient .tag-blue"
      )
    ).length > 0 ||
    Array.from(
      document.querySelectorAll(
        ".tag__appliances--wrapper .tag__appliance .tag-green"
      )
    ).length > 0 ||
    Array.from(
      document.querySelectorAll(
        ".tag__ustensils--wrapper .tag__ustensil .tag-red"
      )
    ).length > 0
  ) {
    tagsUsed = true;
    if (recipesToDisplay.length > 0) {
      recipesToDisplay = filteredRecipesWithTags(recipesToDisplay);
    } else {
      recipesToDisplay = filteredRecipesWithTags(recipes);
    }
  }
  renderRecipes(recipesToDisplay.length);
  /** Message erreur dans le cas d'une mauvaise recherche **/
  if (recipesToDisplay.length > 0) {
    noResultText.innerHTML = "";
    displayData(recipesToDisplay);
  } else {
    displayData(recipesToDisplay);
    noResultText.innerHTML = `<p>Aucune recette ne correspond à votre critère ${searchBarInput.value}</p>`;
  }

  // Si la barre de recherche est vide ou moins de 3 caractères.
  if (
    (searchBarInput.value === "" || searchBarInput.value.length < 3) &&
    tagsUsed === false
  ) {
    fillFilters(recipes);
    displayData(recipes);
  }
}

/*** EVENTS ***/

let typingTimer;
const typeInterval = 100;
searchBarInput.addEventListener("keyup", () => {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(searchLive(), typeInterval);
});

searchBarInput.addEventListener("focus", () => {
  deleteSearchBar.style.display = "block";
});

deleteSearchBar.addEventListener("click", () => {
  searchBarInput.value = "";
  deleteSearchBar.style.display = "none";
  searchLive();
  return false;
});

function renderRecipes(nbRecipes) {
  let allMeals = document.querySelector(".allMeals");
  allMeals.innerHTML = `${nbRecipes} recettes`;
}
