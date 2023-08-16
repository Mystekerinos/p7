const { ingredient, recette, title } = data;

const Image = `assets/Recettes/${image}`;

const mealSection = document.getElementById("meal_section");

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

mealSection.appendChild(card);
