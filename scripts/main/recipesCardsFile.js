/** Fonction pour afficher le contenu de 'ingrédients' pour nos cards. **/
/* getIngredients is used on our factory 'getRecipeCard' */

function getIngredients(ingredients) {
  const column = document.createElement("div");
  column.classList.add("ingredients__detailled--bloc");

  let ingredientName;

  for (const ingredient of ingredients) {
    ingredientName = document.createElement("div");
    ingredientName.classList.add("card_description_itemIngredient");
    ingredientName.setAttribute("data-ingredient", ingredient.ingredient);
    if (ingredient.unit === "" || ingredient.unit == null) {
      if (ingredient.quantity) {
        ingredientName.innerHTML = `<strong>${ingredient.ingredient} :</strong> ${ingredient.quantity}`;
      } else {
        ingredientName.innerHTML = `<strong>${ingredient.ingredient}`;
      }
    } else {
      ingredientName.innerHTML = `<strong>${ingredient.ingredient} : </strong> ${ingredient.quantity} ${ingredient.unit}`;
    }
    column.appendChild(ingredientName);
  }
  return column;
}

/** Factory qui permet de générer nos cards de Recipes. **/
/* getRecipeCard is used in index.js */
// eslint-disable-next-line no-unused-vars
function getRecipeCard(data) {
  const {
    id,
    name,
    servings,
    ingredients,
    time,
    description,
    appliance,
    ustensils,
  } = data;

  const Image = `assets/Recettes/${id}.jpg`;
  console.log("Image", Image);

  const article = document.createElement("article");
  article.setAttribute("id", id);
  article.setAttribute("servings", servings);

  const isImage = document.createElement("img");
  isImage.classList.add("card_description_img");
  isImage.setAttribute("src", Image);

  const cardHeader = document.createElement("header");

  const recipeName = document.createElement("h2");
  recipeName.textContent = name;
  recipeName.className = "card_name";

  const spanIcon = document.createElement("span");
  spanIcon.className = "duration-icon";

  const recipeDuration = document.createElement("div");
  recipeDuration.textContent = `${time} min`;
  recipeDuration.className = "duration";

  const cardInfo = document.createElement("div");
  cardInfo.classList.add("informations");
  cardInfo.setAttribute("appliance", appliance);
  cardInfo.setAttribute("ustensils", ustensils);

  /* getIngredients est définit en début de page */
  const recipeIngredients = document.createElement("div");
  recipeIngredients.classList.add("card_description_details");
  const recipeIngredientsData = getIngredients(ingredients);
  recipeIngredients.appendChild(recipeIngredientsData);

  const recipeDescription = document.createElement("p");
  recipeDescription.textContent = description;
  recipeDescription.className = "description";

  const hidden = document.createElement("div");
  hidden.classList.add("is-hidden");
  const ingredientWord = "INGREDIENT";
  const descriptionIsNumberIngredient = document.createElement("div");
  descriptionIsNumberIngredient.classList.add("card_description_word");
  descriptionIsNumberIngredient.textContent = ingredientWord;

  const recipe = "RECETTE";
  const descriptionRecipeWord = document.createElement("div");
  descriptionRecipeWord.classList.add("card_description_word");
  descriptionRecipeWord.textContent = recipe;

  /* Append section */
  article.appendChild(isImage);
  article.appendChild(cardHeader);
  cardHeader.appendChild(recipeName);
  cardHeader.appendChild(spanIcon);

  cardHeader.appendChild(recipeDuration);
  article.appendChild(cardInfo);
  cardInfo.appendChild(descriptionRecipeWord);
  cardInfo.appendChild(recipeDescription);
  cardInfo.appendChild(descriptionIsNumberIngredient);
  cardInfo.appendChild(recipeIngredients);
  article.appendChild(hidden);

  return article;
}
