import { renderSearchMessage } from "./renderSearchMessage.js";
import { getUniversitiesSearched } from "./searchUniversities.js";

export const searchByCountries = () => {
	let container = document.getElementById("containerUniversitySearchResult");
	let containerSearch = document.getElementById("travelBoxSearchContainer");
	let travelSearchSelector = document.getElementById("travelSearchSelector");

	let dataUniversities = [];
	fetch("./testUniversities.json")
		.then((res) => res.json())
		.then((res) => (dataUniversities = res));

	const selectorCountries = document.getElementById("travelSearchSelector");
	const separatorContainer = document.getElementById(
		"separatorContainerForCards"
	);
	const selectorCountriesList = document.getElementById(
		"travelBoxSearchListCountriesContainer"
	);
	// const closeIcon = document.getElementById("closeListCountries");

	const countryItems = document.getElementsByClassName(
		"travelBoxSearchListCountriesItem"
	);
	const arrayCountryItems = Array.from(countryItems);

	let arrayCountries = [];

	selectorCountries.addEventListener("click", () => {
		// separatorContainer.classList.toggle("getBigSmall");
		containerSearch.classList.toggle("getBiggerHeight");
		selectorCountriesList.classList.toggle(
			"ListCountriesContainerHideShow"
		);
	});

	// closeIcon.addEventListener("click", () => {
	// 	selectorCountriesList.classList.toggle(
	// 		"ListCountriesContainerHideShow"
	// 	);
	// 	separatorContainer.classList.toggle("getBigSmall");
	// });

	arrayCountryItems.map((item) => {
		item.addEventListener("click", () => {
			item.classList.toggle("travelBoxSearchListCountriesItemSelected");
			if (
				item.classList.contains(
					"travelBoxSearchListCountriesItemSelected"
				)
			) {
				arrayCountries.push(item.getAttribute("id"));
				travelSearchSelector.innerHTML = item.getAttribute("id");
				getUniversitiesSearched(
					arrayCountries.join(" "),
					dataUniversities
				);
			} else {
				arrayCountries = arrayCountries.filter(
					(country) => country !== item.getAttribute("id")
				);
				travelSearchSelector.innerHTML = "COUNTRY";
				if (arrayCountries.length > 0) {
					getUniversitiesSearched(
						arrayCountries.join(" "),
						dataUniversities
					);
				} else {
					// container.innerHTML = "";
					// renderSearchMessage();
				}
			}
		});
	});
};
