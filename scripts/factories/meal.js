export function mealFactory(data) {
  const {
    id,
    name,
    time,
    servings,
    ingredients,
    description,
    appliance,
    ustensils,
  } = data;

  const [ingredientOne, ingredientTwo, ingredientThree] = ingredients;

  console.log("ingredientOne", ingredientOne);
  console.log("data", data);
  const Image = `assets/Recettes/${id}.jpg`;
  console.log("Image", Image);

  function getMealCardDom() {
    const card = document.createElement("card");
    card.classList.add("card");
    card.id = id;

    const isName = document.createElement("div");
    isName.classList.add("card_name");
    isName.textContent = name;

    const isImage = document.createElement("img");
    isImage.classList.add("card_description_img");
    isImage.setAttribute("src", Image);

    let { ingredient, quantity, unit } = ingredientOne;

    // const isIngredient2 = document.createElement("div");
    // isIngredient2.classList.add("card_description_ingredient");
    // isIngredient2.textContent = ingredient2;

    // const isQuantity2 = document.createElement("div");
    // isQuantity2.classList.add("card_description_ingredient");
    // isQuantity2.textContent = quantity2;

    // const isUnit2 = document.createElement("div");
    // isUnit2.classList.add("card_description_ingredient");
    // isUnit2.textContent = unit2;

    // console.log("isUnit2", isUnit2);

    // const allIngredient2 = document.createElement("div");
    // allIngredient2.classList.add("card_description_ingredient");

    // allIngredient2.appendChild(isIngredient2);
    // allIngredient2.appendChild(isQuantity2);
    // allIngredient2.appendChild(isUnit2);

    // const isIngredient3 = document.createElement("div");
    // isIngredient3.classList.add("card_description_ingredient");
    // isIngredient3.textContent = ingredient3;

    // const isQuantity3 = document.createElement("div");
    // isQuantity3.classList.add("card_description_ingredient");
    // isQuantity3.textContent = quantity3;

    // const isUnit3 = document.createElement("div");
    // isUnit3.classList.add("card_description_ingredient");
    // isUnit3.textContent = unit3;

    // const allIngredient3 = document.createElement("div");
    // allIngredient3.classList.add("card_description_ingredient");

    // allIngredient3.appendChild(isIngredient3);
    // allIngredient3.appendChild(isQuantity3);
    // allIngredient3.appendChild(isUnit3);

    const isIngredient = document.createElement("div");
    isIngredient.classList.add("card_description_ingredient");
    isIngredient.textContent = ingredient;

    const isQuantity = document.createElement("div");
    isQuantity.classList.add("card_description_ingredient");
    isQuantity.textContent = quantity;

    const isUnit = document.createElement("div");
    isUnit.classList.add("card_description_ingredient");
    isUnit.textContent = unit;

    const allIngredient = document.createElement("div");
    allIngredient.classList.add("card_description_ingredient");

    allIngredient.appendChild(isIngredient);
    allIngredient.appendChild(isQuantity);
    allIngredient.appendChild(isUnit);

    const ingredientWord = "INGREDIENT";
    const isNumberIngredient = document.createElement("div");
    isNumberIngredient.classList.add("card_description");

    const descriptionIsNumberIngredient = document.createElement("div");
    descriptionIsNumberIngredient.classList.add("card_description");
    descriptionIsNumberIngredient.textContent = ingredientWord;

    console.log("allIngredient1", allIngredient);
    // console.log("allIngredient2", allIngredient2);
    // console.log("allIngredient3", allIngredient3);

    descriptionIsNumberIngredient.appendChild(allIngredient);
    // descriptionIsNumberIngredient.appendChild(allIngredient2);
    // descriptionIsNumberIngredient.appendChild(allIngredient3);

    const recipe = "RECETTE";
    const isDescription = document.createElement("div");
    isDescription.classList.add("card_description");
    isDescription.textContent = description;

    const descriptionRecipe = document.createElement("div");
    descriptionRecipe.classList.add("card_description");
    descriptionRecipe.textContent = recipe;
    descriptionRecipe.appendChild(isDescription);

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

    console.log("descriptionIsNumberIngredient", descriptionIsNumberIngredient);

    card.appendChild(isImage);
    card.appendChild(isName);
    card.appendChild(descriptionRecipe);
    card.appendChild(descriptionIsNumberIngredient);

    return card;
  }
  return {
    getMealCardDom,
  };
}
