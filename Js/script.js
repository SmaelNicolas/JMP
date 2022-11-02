import { boxSearch } from "./domManipulation/boxSearch.js";
import { createSugestionsNameUnis } from "./domManipulation/createSugestionsNameUnis.js";
import { createSuggestionsCountrys } from "./domManipulation/createSuggestionsCountrys.js";
import { getUniversitiesSearched } from "./functions/searchUniversities.js";

fetch("./universities.json")
	.then((res) => res.json())
	.then((res) => firstRender(res));

createSuggestionsCountrys();
createSugestionsNameUnis();

boxSearch();

const firstRender = (array) => {
	getUniversitiesSearched("Argentina", array);
};
