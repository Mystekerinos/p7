//Data recovery
export async function getMeals() {
  try {
    const response = await fetch("./data/recipes.json");
    const jsonData = await response.json();
    console.log("jsonData", jsonData);
    return jsonData;
  } catch (error) {
    console.log(error);
    alert("Problème avec les données téléchargées");
  }
}
