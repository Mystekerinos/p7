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
  console.log("data", data);
  const Image = `assets/Recettes/${image}`;
  console.log("Image", Image);
  function getMealCardDom() {
    const card = document.createElement("card");
    card.classList.add("card");

    const isName = document.createElement("div");
    isName.classList.add("card_name");
    isName.textContent = name;

    const isTitle = document.createElement("div");
    isTitle.classList.add("card_description_title");
    isTitle.textContent = title;

    const isImage = document.createElement("div");
    isImage.classList.add("card_description_title");

    isImage.textContent = Image;

    const isIngredient = document.createElement("div");
    isIngredient.classList.add("card_description_ingredient");
    isIngredient.textContent = ingredient;

    const isDescription = document.createElement("div");
    isDescription.classList.add("card_description");
    isDescription.textContent = description;

    card.appendChild(isName);
    card.appendChild(isDescription);
    card.appendChild(isIngredient);
    card.appendChild(isTitle);

    return card;
  }
  return {
    getMealCardDom,
  };
}
