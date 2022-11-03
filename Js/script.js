import { boxSearch } from "./domManipulation/boxSearch.js";
import { createSugestionsNameUnis } from "./domManipulation/createSugestionsNameUnis.js";
import { createSuggestionsCountrys } from "./domManipulation/createSuggestionsCountrys.js";
import { getUniversitiesSearchedByCountry } from "./functions/searchByCountry.js";

fetch("./universities.json")
	.then((res) => res.json())
	.then((res) => firstRender(res));

createSuggestionsCountrys();
createSugestionsNameUnis();

boxSearch();

let initialCountries = [
	"Australia",
	"United States",
	"United Kingdom",
	"Canada",
	"Spain",
];
const firstRender = (array) => {
	getUniversitiesSearchedByCountry(initialCountries, array);
};
