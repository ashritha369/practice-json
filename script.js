import results from "./one.json" assert { type: "json" };

// console.log(results);
let inputQueryValue;
const elementSearchButton = document.getElementById("search-button");
elementSearchButton.addEventListener("click", searchquery);
function searchquery() {
  inputQueryValue = document.getElementById("query").value;
  console.log(inputQueryValue);
}
