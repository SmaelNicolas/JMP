import { getUniversitiesSearchedByCountry } from "../functions/searchByCountry.js";

export const createSuggestionsCountrys = () => {
	let containerSearch = document.getElementById("travelBoxSearchContainer");

	let suggestionListCountries = document.getElementById(
		"travelBoxSearchListCountriesContainer"
	);
	let selectorCountriesList = document.getElementById(
		"travelBoxSearchListCountriesContainer"
	);
	let clearAllCountriesSelected =
		document.getElementById("closeListCountries");

	let travelBoxSearchInput = document.getElementById("travelBoxSearchInput");
	travelBoxSearchInput.addEventListener("click", () => {
		selectorCountriesList.classList.remove(
			"ListCountriesContainerHideShow"
		);
	});
	let selectorCountries = document.getElementById("travelSearchSelector");
	let travelSearchSelector = document.getElementById("travelSearchSelector");

	const countryItems = document.getElementsByClassName(
		"travelBoxSearchListCountriesItem"
	);
	const arrayCountryItems = Array.from(countryItems);

	let arrayCountries = [];
	let dataUniversities = [];

	fetch("./universities.json")
		.then((res) => res.json())
		.then((res) => {
			dataUniversities = res;
			getAllCountrys(res);
		});

	const getAllCountrys = (dataUniversities) => {
		let arrayCountrys = dataUniversities.map((uni) => {
			return uni.Country;
		});
		let uniqueArrayCountrys = [...new Set(arrayCountrys)];
		uniqueArrayCountrys = uniqueArrayCountrys.sort();
		renderSelectors(uniqueArrayCountrys);
	};

	const renderSelectors = (arrayCountrys) => {
		arrayCountrys.map((country) => {
			let node = document.createElement("div");
			node.id = country;
			node.innerHTML = country;
			node.classList.add("travelBoxSearchListCountriesItem");
			suggestionListCountries.appendChild(node);
			eventListenerCountries(node);
		});
	};

	selectorCountries.addEventListener("click", () => {
		containerSearch.classList.toggle("getBiggerHeight");
		selectorCountriesList.classList.toggle(
			"ListCountriesContainerHideShow"
		);
	});

	clearAllCountriesSelected.addEventListener("click", () => {
		const allSelected = document.querySelectorAll(
			".travelBoxSearchListCountriesItemSelected"
		);
		allSelected.forEach((box) => {
			box.classList.remove("travelBoxSearchListCountriesItemSelected");
		});
		arrayCountries = [];
	});

	const eventListenerCountries = (node) => {
		node.addEventListener("click", () => {
			node.classList.toggle("travelBoxSearchListCountriesItemSelected");
			travelBoxSearchInput.value = "";
			if (
				node.classList.contains(
					"travelBoxSearchListCountriesItemSelected"
				)
			) {
				arrayCountries.push(node.getAttribute("id"));
				travelSearchSelector.innerHTML = node.getAttribute("id");
				getUniversitiesSearchedByCountry(
					arrayCountries,
					dataUniversities
				);
			} else {
				arrayCountries = arrayCountries.filter(
					(country) => country !== node.getAttribute("id")
				);
				travelSearchSelector.innerHTML = "COUNTRY";
				if (arrayCountries.length > 0) {
					getUniversitiesSearchedByCountry(
						arrayCountries,
						dataUniversities
					);
				} else {
					// container.innerHTML = "";
					// renderSearchMessage();
				}
			}
		});
	};
};
