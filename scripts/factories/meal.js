export function photographerFactory(data, tabindex) {
  const {
    id,
    image,
    name,
    servings,
    ingredient,
    quantity,
    unit,
    time,
    description,
    appliance,
    ustensils,
  } = data;

  const Image = `assets/Recettes/${image}`;

  function getMealCardDom() {
    const card = document.createElement("card");
    card.classList.add("card");

    const isTitle = document.createElement("div");
    isTitle.classList.add("card_description_title");

    isTitle.textContent = title;

    const isRecette = document.createElement("div");
    isRecette.classList.add("card_description_Recette");
    isRecette.textContent = recette;

    // Create a ingredient element for the artist ingredient
    const isIngredient = document.createElement("div");
    isIngredient.classList.add("card_description_ingredient");
    isIngredient.textContent = ingredient;

    card.appendChild(isIngredient);
    card.appendChild(isRecette);
    card.appendChild(isTitle);

    return card;
  }
  return {
    getMealCardDom,
  };
}
