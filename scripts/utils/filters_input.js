/*** Rechercher dans les inputs des filtres ***/

/** Fonction pour rechercher dans le filtre ingrédient via input **/
function getSearchIngredients() {
  const filterRender = document.querySelectorAll(".element_ingredients");
  const cards = document.querySelectorAll(
    ".card_description_isSearchIngredient"
  );
  const searchQuery = document.getElementById("ingredientsInputId").value;

  cards.forEach((card) => {
    if (card.innerText.toLowerCase().includes(searchQuery.toLowerCase())) {
      card.classList.remove("is-hidden");
    } else {
      card.classList.add("is-hidden");
    }
  });
  return filterRender;
}

/* Used on filters_recipes.js */
// eslint-disable-next-line no-unused-vars
function inputIngredient() {
  const searchInputIngredient = document.getElementById("ingredientsInputId");
  searchInputIngredient.addEventListener("keyup", () => {
    // clearTimeout is defined on search_bar.js
    // eslint-disable-next-line no-undef
    clearTimeout(typingTimer);
    // eslint-disable-next-line no-undef
    typingTimer = setTimeout(getSearchIngredients, typeInterval);
  });
}

/** Fonction pour rechercher dans le filtre appareis via input **/

function getSearchAppliances() {
  const filterRender = document.querySelectorAll(".element_appareils");
  const cards = document.querySelectorAll("card_description_appliance");
  const searchQuery = document.getElementById("appareilsInputId").value;

  cards.forEach((card) => {
    if (card.innerText.toLowerCase().includes(searchQuery.toLowerCase())) {
      card.classList.remove("is-hidden");
    } else {
      card.classList.add("is-hidden");
    }
  });
  return filterRender;
}

/* Used on filters_recipes.js */
// eslint-disable-next-line no-unused-vars
function inputAppliance() {
  const searchInputAppliance = document.getElementById("appareilsInputId");
  searchInputAppliance.addEventListener("keyup", () => {
    // clearTimeout is defined on search_bar.js
    // eslint-disable-next-line no-undef
    clearTimeout(typingTimer);
    // eslint-disable-next-line no-undef
    typingTimer = setTimeout(getSearchAppliances, typeInterval);
  });
}

/** Fonction pour rechercher dans le filtre ustensil via input **/

function getSearchUstensils() {
  const filterRender = document.querySelectorAll(".element_ustensiles");
  const cards = document.querySelectorAll(
    "card_description_isSearchUstensiles"
  );
  const searchQuery = document.getElementById("ustensilesInputId").value;

  cards.forEach((card) => {
    if (card.innerText.toLowerCase().includes(searchQuery.toLowerCase())) {
      card.classList.remove("is-hidden");
    } else {
      card.classList.add("is-hidden");
    }
  });
  return filterRender;
}

/* Used on filters_recipes.js */
// eslint-disable-next-line no-unused-vars
function inputUstensil() {
  const searchInputUstensil = document.getElementById("ustensilesInputId");
  searchInputUstensil.addEventListener("keyup", () => {
    // clearTimeout is defined on search_bar.js
    // eslint-disable-next-line no-undef
    clearTimeout(typingTimer);
    // eslint-disable-next-line no-undef
    typingTimer = setTimeout(getSearchUstensils, typeInterval);
  });
}
