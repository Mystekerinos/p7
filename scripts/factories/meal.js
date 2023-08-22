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

  const [ingredientOne] = ingredients;

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

    const isIngredient = document.createElement("div");
    isIngredient.classList.add("card_description_ingredient");
    const isQuantity = document.createElement("div");
    isQuantity.classList.add("card_description_quantity");
    const isUnit = document.createElement("div");
    isUnit.classList.add("card_description_unit");

    ingredients.forEach((val) => {
      isIngredient.textContent = val.ingredient;

      isQuantity.textContent = val.quantity;

      isUnit.textContent = val.unit;

      console.log("ingredient", val.ingredient, val.quantity, val.unit);
    });

    const recipe = "RECETTE";
    const isDescription = document.createElement("div");
    isDescription.classList.add("card_description_recipe");
    isDescription.textContent = description;

    const descriptionRecipe = document.createElement("div");
    descriptionRecipe.classList.add("card_description");
    const descriptionRecipeWord = document.createElement("div");
    descriptionRecipeWord.classList.add("card_description_word");
    descriptionRecipeWord.textContent = recipe;
    descriptionRecipe.appendChild(descriptionRecipeWord);
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

    const ingredientWord = "INGREDIENT";
    const isNumberIngredient = document.createElement("div");
    isNumberIngredient.classList.add("card_description");

    const descriptionIsNumberIngredient = document.createElement("div");
    descriptionIsNumberIngredient.classList.add("card_description_word");
    descriptionIsNumberIngredient.textContent = ingredientWord;

    console.log("descriptionIsNumberIngredient", descriptionIsNumberIngredient);

    const descriptionDetailsIngredient = document.createElement("div");
    descriptionDetailsIngredient.classList.add("card_description_details");
    descriptionDetailsIngredient.appendChild(isIngredient);
    descriptionDetailsIngredient.appendChild(isQuantity);
    descriptionDetailsIngredient.appendChild(isUnit);

    card.appendChild(isImage);
    card.appendChild(isName);
    card.appendChild(descriptionRecipe);
    card.appendChild(descriptionIsNumberIngredient);
    card.appendChild(descriptionDetailsIngredient);

    return card;
  }
  return {
    getMealCardDom,
  };
}
