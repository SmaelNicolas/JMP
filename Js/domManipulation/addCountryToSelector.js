import { searchByCountries } from "../functions/searchByCountries.js";

export const addCountryToSelector = () => {
	let travelSearchSelector = document.getElementById(
		"travelBoxSearchListCountriesContainer"
	);

	fetch("./universities.json")
		.then((res) => res.json())
		.then((res) => getAllCountrys(res));

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
			travelSearchSelector.appendChild(node);
		});
		searchByCountries();
	};
};
