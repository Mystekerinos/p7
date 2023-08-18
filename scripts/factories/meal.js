export function mealFactory(data) {
  const {
    id,
    image,
    name,
    title,
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

    const isImage = document.createElement("div");
    isImage.classList.add("card_description_title");

    isImage.textContent = Image;

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
