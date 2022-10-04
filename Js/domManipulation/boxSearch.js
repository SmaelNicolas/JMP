import { getUniversitiesSearched } from "../functions/searchUniversities.js";

export const boxSearch = () => {
	let dataUniversities = [];
	let container = document.getElementById("containerUniversitySearchResult");

	let travelSearchSelector = document.getElementById("travelSearchSelector");
	let travelBoxSearchInput = document.getElementById("travelBoxSearchInput");
	let travelBoxSearchLabelsContainer = document.getElementById(
		"travelBoxSearchLabelsContainer"
	);
	let topUniversitiesLabel = document.getElementById("topUniversitiesLabel");
	let studyAbroadLabel = document.getElementById("studyAbroadLabel");

	// fetch("./fromExcel.json")
	// 	.then((res) => res.json())
	// 	.then((res) => (dataUniversities = res));
	fetch("./exampleKeywords.json")
		.then((res) => res.json())
		.then((res) => (dataUniversities = res));

	travelSearchSelector.addEventListener("change", () => {
		container.innerHTML = "";
		travelBoxSearchInput.value = "";
		topUniversitiesLabel.classList.toggle("travelBoxSearchLabelsSelected");
		studyAbroadLabel.classList.toggle("travelBoxSearchLabelsSelected");
		travelBoxSearchLabelsContainer.classList.toggle(
			"travelBoxSearchLabelsContainerReverse"
		);
	});

	travelBoxSearchInput.addEventListener("change", (e) => {
		let value = e.target.value;
		if (travelSearchSelector.value === "1") {
			getUniversitiesSearched(value, dataUniversities);
		}
		if (travelSearchSelector.value === "2") {
		}
	});
};
