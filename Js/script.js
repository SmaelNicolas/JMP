import { addCountryToSelector } from "./domManipulation/addCountryToSelector.js";
import { boxSearch } from "./domManipulation/boxSearch.js";
import { createSuggestions } from "./domManipulation/createSugestions.js";
import { getUniversitiesSearched } from "./functions/searchUniversities.js";

fetch("./exampleKeywords.json")
	.then((res) => res.json())
	.then((res) => firstRender(res));

addCountryToSelector();
createSuggestions();

boxSearch();

const firstRender = (array) => {
	getUniversitiesSearched("Argentina", array);
};
