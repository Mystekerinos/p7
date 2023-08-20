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

  let food;
  let quantity;
  let unit;
  console.log("data", data);
  const Image = `assets/Recettes/${id}.jpg`;
  console.log("Image", Image);

  function getMealCardDom(index) {
    const card = document.createElement("card");
    card.classList.add("card");
    card.id = id;

    const isName = document.createElement("div");
    isName.classList.add("card_name");
    isName.textContent = name;

    const isImage = document.createElement("img");
    isImage.classList.add("card_description_img");
    isImage.setAttribute("src", Image);

    const ingredient = "INGREDIENT";
    let isIngredient = document.createElement("div");
    isIngredient.classList.add("card_description_ingredient");
    isIngredient = ingredient;
    // isIngredient = displayIngredient(ingredients);

    const ingredientRecipe = document.createElement("div");
    ingredientRecipe.classList.add("card_description");
    ingredientRecipe.textContent = ingredient;
    ingredientRecipe.appendChild(isIngredient);
    console.log("ingredientRecipe", ingredientRecipe);

    // function displayIngredient(ingredients, index) {
    //   console.log("ingredients", ingredients);
    //   console.log("index", index);
    //   ingredients.forEach((element) => {
    //     food = element.ingredient;
    //     quantity = element.quantity;
    //     unit = element.unit;
    //     console.log(
    //       "ingredients2",
    //       element.ingredient,
    //       element.quantity,
    //       element.unit
    //     );
    //   });

    // return food, unit, quantity;
    // }

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

    card.appendChild(isImage);
    card.appendChild(isName);
    card.appendChild(descriptionRecipe);
    card.appendChild(ingredientRecipe);
    card.appendChild(isUstensils);
    card.appendChild(isServings);

    return card;
  }
  return {
    getMealCardDom,
  };
}
