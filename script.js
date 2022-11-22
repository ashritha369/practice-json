import results from "./one.json" assert { type: "json" };

// console.log(results);
const inputQueryValue = document.getElementById("input").value;
const elementSearchButton = document.getElementById("search-button");

elementSearchButton.addEventListener("click", searchquery);

function searchquery(e) {
  e.preventDefault();
  console.log(inputQueryValue);
}
