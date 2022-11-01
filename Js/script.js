import { addCountryToSelector } from "./domManipulation/addCountryToSelector.js";
import { boxSearch } from "./domManipulation/boxSearch.js";
import { getUniversitiesSearched } from "./functions/searchUniversities.js";

fetch("./testUniversities.json")
	.then((res) => res.json())
	.then((res) => firstRender(res));

addCountryToSelector();
boxSearch();

const firstRender = (array) => {
	getUniversitiesSearched("Argentina", array);
};
