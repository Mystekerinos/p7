function filterIngredients() {
  const ingredientsBox = document.getElementsByClassName("filter__ingredients");
  const template = document.createElement("div");
  template.className = "filter__ingredients--template";

  const article = document.createElement("div");
  article.className = "filter__ingredients--close";

  const headerIngredients = document.createElement("header");
  headerIngredients.className = "filter__ingredients--header";

  const title = document.createElement("h2");
  title.textContent = "Ingredients";
  title.className = "filter__ingredients--name";

  const spanAngle = document.createElement("span");
  spanAngle.className = "filter__ingredients--angleDown";

  const arrowDown = document.createElement("i");
  arrowDown.className = "fa-solid fa-angle-down fa-lg";
  arrowDown.style.cursor = "pointer";

  const hiddenAngle = document.createElement("span");
  hiddenAngle.className = "filter__ingredients--angleUp";

  const titleUnfold = document.createElement("h2");
  titleUnfold.textContent = "Ingredients";
  titleUnfold.className = "filter__ingredients--nameUnfold ";

  const arrowUp = document.createElement("i");
  arrowUp.className = "fa-solid fa-angle-up fa-lg";
  arrowUp.style.cursor = "pointer";
  arrowUp.style.display = "none";

  const magnifyingGlasses = document.createElement("i");
  magnifyingGlasses.className = "fa-solid fa-thin fa-magnifying-glass";
  magnifyingGlasses.style.cursor = "pointer";
  magnifyingGlasses.style.display = "none";

  const inputIngredients = document.createElement("input");
  inputIngredients.setAttribute("id", "ingredients-input");
  inputIngredients.style.display = "none";
  inputIngredients.setAttribute("placeholder", "Sélectionner un ingrédient...");
  inputIngredients.className = "filter__ingredients--input";

  const ingredientsListBox = document.createElement("ul");
  ingredientsListBox.className = "filter__ingredients--list";
  ingredientsListBox.style.display = "none";

  const deleteSearchInput = document.createElement("i");
  deleteSearchInput.className = "fa-solid fa-xmark";

  /** Ingredients Event **/

  /* Lors du clique sur ArrowDown */
  arrowDown.addEventListener("click", (e) => {
    if (e.target.className === "fa-solid fa-angle-down fa-lg") {
      article.classList.remove("filter__ingredients--close");
      article.classList.add("filter__ingredients--view");
      article.appendChild(magnifyingGlasses);
      article.appendChild(deleteSearchInput);
      inputIngredients.value = "";
      headerIngredients.style.display = "flex";
      inputIngredients.style.display = "flex";
      titleUnfold.style.display = "flex";
      arrowDown.style.display = "none";
      arrowUp.style.display = "flex";
      magnifyingGlasses.style.display = "flex";
      magnifyingGlasses.style.position = "absolute";
      magnifyingGlasses.style.color = "#7A7A7A";
      magnifyingGlasses.style.top = "65px";
      magnifyingGlasses.style.right = "23px";
      magnifyingGlasses.style.zIndex = "3";
      deleteSearchInput.style.zIndex = "3";
      deleteSearchInput.style.top = "64px";
      deleteSearchInput.style.right = "34px";
      deleteSearchInput.style.position = "absolute";

      hiddenAngle.style.left = "143px";
      hiddenAngle.style.position = "absolute";
      template.style.width = "194px";
      template.style.borderRadius = "11px";
      template.style.position = "absolute";
      template.style.zIndex = "3";
      template.style.backgroundColor = "#FFFFFF";
      template.style.top = "0px";
      template.style.height = "223px";

      ingredientsListBox.style.display = "flex";

      inputIngredients.focus();
      inputIngredients.value = "";

      inputIngredient();

      deleteSearchInput.style.cursor = "pointer";
      deleteSearchInput.style.width = "20px";
      deleteSearchInput.addEventListener("click", () => {
        inputIngredients.value = "";
        searchLive();
        return false;
      });
    }

    addTagFilterIngredients();
  });

  /* Lors du clique sur ArrowUp */
  arrowUp.addEventListener("click", (e) => {
    if (e.target.className === "fa-solid fa-angle-up fa-lg") {
      article.classList.remove("filter__ingredients--view");
      article.classList.add("filter__ingredients--close");
      headerIngredients.style.display = "flex";
      inputIngredients.style.display = "none";
      arrowDown.style.display = "flex";
      arrowUp.style.display = "none";
      title.style.marginTop = "0px";

      hiddenAngle.style.left = "15px";
      hiddenAngle.style.position = "absolute";
      template.style.position = "none";
      template.style.zIndex = "none";

      template.style.backgroundColor = "rgba(0,0,0,0)";
      template.style.right = "none";
      template.style.borderRadius = "11px";

      ingredientsListBox.style.display = "none";
      console.log("arrow iup");
      template.style.right = null;
      template.style.top = null;
      template.style.height = null;
      template.style.width = "194px";
      ingredientsBox.style.display = "flex";
    }
  });

  /* Append Section */
  ingredientsBox[0].appendChild(template);
  template.appendChild(article);
  article.appendChild(headerIngredients);
  headerIngredients.appendChild(title);
  headerIngredients.appendChild(spanAngle);
  spanAngle.appendChild(arrowDown);
  article.appendChild(hiddenAngle);

  hiddenAngle.appendChild(arrowUp);
  article.appendChild(inputIngredients);
  article.appendChild(ingredientsListBox);

  return article;
}

function filterAppliances() {
  const appliancesBox = document.getElementsByClassName("filter__appliances");
  const template = document.createElement("div");
  template.className = "filter__appliances--template";

  const article = document.createElement("div");
  article.className = "filter__appliances--close";

  const headerAppliances = document.createElement("header");
  headerAppliances.className = "filter__appliances--header";

  const title = document.createElement("h2");
  title.textContent = "Appareils";
  title.className = "filter__appliances--name";

  const spanAngle = document.createElement("span");
  spanAngle.className = "filter__appliances--angleDown";

  const arrowDown = document.createElement("i");
  arrowDown.className = "fa-solid fa-angle-down fa-lg";
  arrowDown.style.cursor = "pointer";

  const hiddenAngle = document.createElement("span");
  hiddenAngle.className = "filter__appliances--angleUp";

  const titleUnfoldAppliances = document.createElement("h2");
  titleUnfoldAppliances.textContent = "Appareils";
  titleUnfoldAppliances.className = "filter__appliances--nameUnfold ";

  const arrowUp = document.createElement("i");
  arrowUp.className = "fa-solid fa-angle-up fa-lg";
  arrowUp.style.cursor = "pointer";
  arrowUp.style.display = "none";

  const magnifyingGlasses = document.createElement("i");
  magnifyingGlasses.className = "fa-solid fa-thin fa-magnifying-glass";
  magnifyingGlasses.style.cursor = "pointer";
  magnifyingGlasses.style.display = "none";

  const inputAppliances = document.createElement("input");
  inputAppliances.setAttribute("id", "appliances-input");
  inputAppliances.style.display = "none";
  inputAppliances.setAttribute("placeholder", "Sélectionner un appareil...");
  inputAppliances.className = "filter__appliances--input";

  const appliancesListBox = document.createElement("ul");
  appliancesListBox.className = "filter__appliances--list";
  appliancesListBox.style.display = "none";

  const deleteSearchInput = document.createElement("i");
  deleteSearchInput.className = "fa-solid fa-xmark";

  /** Appliances Event **/

  /* Lors du clique sur ArrowDown */
  arrowDown.addEventListener("click", (e) => {
    if (e.target.className === "fa-solid fa-angle-down fa-lg") {
      article.classList.remove("filter__appliances--close");
      article.classList.add("filter__appliances--view");
      article.appendChild(magnifyingGlasses);
      article.appendChild(deleteSearchInput);
      headerAppliances.style.display = "flex";
      inputAppliances.style.display = "flex";

      arrowDown.style.display = "none";
      arrowUp.style.display = "flex";

      hiddenAngle.style.left = "143px";
      hiddenAngle.style.position = "absolute";
      template.style.width = "194px";
      template.style.borderRadius = "11px";
      template.style.position = "absolute";
      template.style.zIndex = "3";
      template.style.backgroundColor = "#FFFFFF";
      magnifyingGlasses.style.display = "flex";
      magnifyingGlasses.style.position = "absolute";
      magnifyingGlasses.style.color = "#7A7A7A";
      magnifyingGlasses.style.top = "65px";
      magnifyingGlasses.style.right = "23px";
      magnifyingGlasses.style.zIndex = "3";
      deleteSearchInput.style.zIndex = "3";
      deleteSearchInput.style.top = "64px";
      deleteSearchInput.style.right = "34px";
      deleteSearchInput.style.position = "absolute";
      template.style.top = "0px";
      template.style.height = "223px";

      appliancesListBox.style.display = "flex";
      console.log("arrow down");

      inputAppliances.focus();

      inputAppliance();
      deleteSearchInput.style.cursor = "pointer";
      deleteSearchInput.style.width = "20px";
      deleteSearchInput.addEventListener("click", () => {
        inputAppliances.value = "";
        searchLive();
        return false;
      });
    }

    addTagFilterAppliances();
  });

  /* Lors du clique sur ArrowUp */
  arrowUp.addEventListener("click", (e) => {
    if (e.target.className === "fa-solid fa-angle-up fa-lg") {
      article.classList.remove("filter__appliances--view");
      article.classList.add("filter__appliances--close");
      headerAppliances.style.display = "flex";
      inputAppliances.style.display = "none";
      titleUnfoldAppliances.style.display = "flex";
      arrowDown.style.display = "flex";
      arrowUp.style.display = "none";
      title.style.marginTop = "0px";

      hiddenAngle.style.left = "15px";
      hiddenAngle.style.position = "absolute";
      template.style.position = "none";
      template.style.zIndex = "none";

      template.style.backgroundColor = "rgba(0,0,0,0)";
      template.style.right = "none";
      template.style.borderRadius = "11px";

      appliancesListBox.style.display = "none";
      template.style.right = null;
      template.style.top = null;
      template.style.height = null;
      template.style.width = "194px";
      appliancesBox.style.display = "flex";
    }
  });

  /* Append Section */
  appliancesBox[0].appendChild(template);
  template.appendChild(article);
  article.appendChild(headerAppliances);
  headerAppliances.appendChild(title);
  headerAppliances.appendChild(spanAngle);
  spanAngle.appendChild(arrowDown);
  article.appendChild(hiddenAngle);
  hiddenAngle.appendChild(arrowUp);
  article.appendChild(inputAppliances);
  article.appendChild(appliancesListBox);

  return article;
}

function filterUstensils() {
  const ustensilsBox = document.getElementsByClassName("filter__ustensils");
  const template = document.createElement("div");
  template.className = "filter__ustensils--template";

  const article = document.createElement("div");
  article.className = "filter__ustensils--close";

  const headerUstensils = document.createElement("header");
  headerUstensils.className = "filter__ustensils--header";

  const title = document.createElement("h2");
  title.textContent = "Ustensils";
  title.className = "filter__ustensils--name";

  const spanAngle = document.createElement("span");
  spanAngle.className = "filter__ustensils--angleDown";

  const titleUnfoldUstensils = document.createElement("h2");
  titleUnfoldUstensils.textContent = "Ustensils";
  titleUnfoldUstensils.className = "filter__ustensils--nameUnfold ";

  const arrowDown = document.createElement("i");
  arrowDown.className = "fa-solid fa-angle-down fa-lg";
  arrowDown.style.cursor = "pointer";

  const hiddenAngle = document.createElement("span");
  hiddenAngle.className = "filter__ustensils--angleUp";

  const arrowUp = document.createElement("i");
  arrowUp.className = "fa-solid fa-angle-up fa-lg";
  arrowUp.style.cursor = "pointer";
  arrowUp.style.display = "none";

  const magnifyingGlasses = document.createElement("i");
  magnifyingGlasses.className = "fa-solid fa-thin fa-magnifying-glass";
  magnifyingGlasses.style.cursor = "pointer";
  magnifyingGlasses.style.display = "none";

  const inputUstensils = document.createElement("input");
  inputUstensils.setAttribute("id", "ustensils-input");
  inputUstensils.setAttribute("placeholder", "Sélectionner un ustensil...");
  inputUstensils.className = "filter__ustensils--input";

  const ustensilsListBox = document.createElement("ul");
  ustensilsListBox.className = "filter__ustensils--list";
  ustensilsListBox.style.display = "none";
  const deleteSearchInput = document.createElement("i");
  deleteSearchInput.className = "fa-solid fa-xmark";

  /** Ustensils Event **/

  /* Lors du clique sur ArrowDown */
  arrowDown.addEventListener("click", (e) => {
    if (e.target.className === "fa-solid fa-angle-down fa-lg") {
      article.classList.remove("filter__ustensils--close");
      article.classList.add("filter__ustensils--view");
      article.appendChild(magnifyingGlasses);
      article.appendChild(deleteSearchInput);
      headerUstensils.style.display = "flex";
      inputUstensils.style.display = "flex";
      magnifyingGlasses.style.display = "flex";
      magnifyingGlasses.style.position = "absolute";
      magnifyingGlasses.style.color = "#7A7A7A";
      magnifyingGlasses.style.top = "65px";
      magnifyingGlasses.style.right = "23px";
      magnifyingGlasses.style.zIndex = "3";
      deleteSearchInput.style.zIndex = "3";
      deleteSearchInput.style.top = "64px";
      deleteSearchInput.style.right = "34px";
      deleteSearchInput.style.position = "absolute";
      arrowDown.style.display = "none";
      arrowUp.style.display = "flex";
      hiddenAngle.style.left = "143px";
      hiddenAngle.style.position = "absolute";
      template.style.width = "194px";
      template.style.borderRadius = "11px";
      template.style.position = "absolute";
      template.style.zIndex = "3";
      template.style.backgroundColor = "#FFFFFF";
      template.style.top = "0px";
      template.style.height = "223px";
      ustensilsListBox.style.display = "flex";
      console.log("arrow down");
      inputUstensils.focus();
      ustensilsListBox.style.display = null;

      inputUstensil();
      deleteSearchInput.style.cursor = "pointer";
      deleteSearchInput.style.width = "20px";
      deleteSearchInput.addEventListener("click", () => {
        inputIngredients.value = "";
        searchLive();
        return false;
      });
    }

    addTagFilterUstensils();
  });

  /* Lors du clique sur ArrowUp */
  arrowUp.addEventListener("click", (e) => {
    if (e.target.className === "fa-solid fa-angle-up fa-lg") {
      article.classList.remove("filter__ustensils--view");
      article.classList.add("filter__ustensils--close");
      headerUstensils.style.display = "flex";
      inputUstensils.style.display = "none";
      titleUnfoldUstensils.style.display = "flex";
      arrowDown.style.display = "flex";
      arrowUp.style.display = "none";
      title.style.marginTop = "0px";
      hiddenAngle.style.left = "15px";
      hiddenAngle.style.position = "absolute";
      template.style.position = "none";
      template.style.zIndex = "none";
      template.style.backgroundColor = "rgba(0,0,0,0)";
      template.style.right = "none";
      template.style.borderRadius = "11px";
      ustensilsListBox.style.display = "none";
      template.style.right = null;
      template.style.top = null;
      template.style.height = null;
      template.style.width = "194px";
      title.style.bottom = null;
      title.style.left = null;
      ustensilsListBox.style.display = "flex";
    }
  });

  /* Append Section */
  ustensilsBox[0].appendChild(template);
  template.appendChild(article);
  article.appendChild(headerUstensils);
  headerUstensils.appendChild(title);
  headerUstensils.appendChild(spanAngle);
  spanAngle.appendChild(arrowDown);
  article.appendChild(hiddenAngle);
  hiddenAngle.appendChild(arrowUp);
  article.appendChild(inputUstensils);
  article.appendChild(ustensilsListBox);

  return article;
}
