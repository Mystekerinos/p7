export function mealFactory(data) {
  const {
    id,
    image,
    name,
    time,
    servings,
    ingredients,
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
    card.id = id;

    const isName = document.createElement("div");
    isName.classList.add("card_name");
    isName.textContent = name;

    const isImage = document.createElement("div");
    isImage.classList.add("card_description_title");

    isImage.textContent = Image;

    const isIngredient = document.createElement("div");
    isIngredient.classList.add("card_description_ingredient");
    isIngredient.textContent = ingredients;

    const isDescription = document.createElement("div");
    isDescription.classList.add("card_description");
    isDescription.textContent = description;

    const isUstensils = document.createElement("div");
    isUstensils.classList.add("card_description_ustensils");
    isUstensils.textContent = ustensils;

    const isTime = document.createElement("div");
    isTime.classList.add("card_description_time");
    isTime.textContent = time;

    const isServings = document.createElement("div");
    isServings.classList.add("card_description_appliance");
    isServings.textContent = servings;

    const isappliance = document.createElement("div");
    isappliance.classList.add("card_description_appliance");
    isappliance.textContent = appliance;

    card.appendChild(isName);
    card.appendChild(isDescription);
    card.appendChild(isIngredient);
    card.appendChild(isUstensils);
    card.appendChild(isServings);

    return card;
  }
  return {
    getMealCardDom,
  };
}
