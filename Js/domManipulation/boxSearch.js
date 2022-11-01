import { getUniversitiesSearched } from "../functions/searchUniversities.js";

export const boxSearch = () => {
	let container = document.getElementById("containerUniversitySearchResult");

	let dataUniversities = [];
	let travelSearchSelector = document.getElementById("travelSearchSelector");
	let travelBoxSearchInput = document.getElementById("travelBoxSearchInput");

	fetch("./testUniversities.json")
		.then((res) => res.json())
		.then((res) => (dataUniversities = res));

	travelSearchSelector.addEventListener("change", (e) => {
		let value = e.target.value;
		let inputValue = travelBoxSearchInput.innerHTML;
		if (travelSearchSelector.value === "noSearch") {
			container.innerHTML = "";
		} else {
			getUniversitiesSearched(value, dataUniversities);
			travelBoxSearchInput.value = "";
		}
	});

	// travelBoxSearchInput.addEventListener("change", (e) => {
	// 	let value = e.target.value;
	// 	if (value === "") {
	// 		container.innerHTML = "";
	// 	} else {
	// 		getUniversitiesSearched(value, dataUniversities);
	// 	}
	// });
};
