import { renderUniversities } from "../functions/renderUniversities.js";

export const createSugestionsNameUnis = async () => {
	let dataUniversities = [];
	let unisSelected = [];
	let containerSuggestion = document.getElementById(
		"travelContainerSuggestion"
	);
	let containerSearch = document.getElementById("travelBoxSearchContainer");
	let input = document.getElementById("travelBoxSearchInput");
	let clearAllSuggestion = document.getElementById("closeListSuggestion");
	fetch("./universities.json")
		.then((res) => res.json())
		.then((res) => {
			createSuggestions(sortUniversities(res));
			dataUniversities = sortUniversities(res);
		});
	const sortUniversities = (value) => {
		return value.sort((a, b) => {
			const firstNameUni = a.University.toUpperCase();
			const secondNameUni = b.University.toUpperCase();
			if (firstNameUni < secondNameUni) {
				return -1;
			}
			if (firstNameUni > secondNameUni) {
				return 1;
			}
			return 0;
		});
	};
	const createSuggestions = async (arrrayUnis) => {
		arrrayUnis = await arrrayUnis.sort();
		await arrrayUnis.map((uni) => {
			let node = document.createElement("div");
			let nodeSubInfo = document.createElement("div");
			node.id = uni.University;
			nodeSubInfo.id = `${uni.University}Info`;
			node.innerHTML = uni.University;
			nodeSubInfo.innerHTML = `${uni.Streets}, ${uni.City} , ${uni.Country}  `;
			node.classList.add("travelBoxSearchListCountriesItem");
			nodeSubInfo.classList.add("travelBoxSearchListCountriesItemInfo");
			node.appendChild(nodeSubInfo);
			containerSuggestion.appendChild(node);
			eventListenerSuggestion(node, uni);
		});
	};
	const addSuggestionToHtml = (value) => {
		containerSuggestion.innerHTML = "";
		let clearAll = document.createElement("div");
		clearAll.id = "closeListCountries";
		clearAll.innerHTML = "Clear All";
		clearAll.classList.add("travelBoxSearchListCountriesClose");
		containerSuggestion.appendChild(clearAll);
		eventListerClearAll(clearAll);
		dataUniversities.map((uni) => {
			if (
				uni.University.toLowerCase().startsWith(value.toLowerCase(), 0)
			) {
				let node = document.createElement("div");
				let nodeSubInfo = document.createElement("div");
				node.id = uni.University;
				nodeSubInfo.id = `${uni.University}Info`;
				node.innerHTML = uni.University;
				nodeSubInfo.innerHTML = `${uni.Streets}, ${uni.City} , ${uni.Country}  `;
				node.classList.add("travelBoxSearchListCountriesItem");
				nodeSubInfo.classList.add(
					"travelBoxSearchListCountriesItemInfo"
				);
				node.appendChild(nodeSubInfo);
				containerSuggestion.appendChild(node);
				eventListenerSuggestion(node, uni);
			}
		});
	};
	const eventListenerSuggestion = (node, uni) => {
		node.addEventListener("click", () => {
			node.classList.toggle("travelBoxSearchListNamesItemSelected");
			if (
				node.classList.contains("travelBoxSearchListNamesItemSelected")
			) {
				unisSelected.push(uni);
			} else {
				unisSelected = unisSelected.filter(
					(uniSearch) => uniSearch !== uni
				);
			}
			unisSelected.length > 0 && renderUniversities(unisSelected);
		});
	};
	const eventListerClearAll = (node) => {
		node.addEventListener("click", () => {
			const allSelected = document.querySelectorAll(
				".travelBoxSearchListNamesItemSelected"
			);
			allSelected.forEach((box) => {
				box.classList.remove("travelBoxSearchListNamesItemSelected");
			});
		});
		unisSelected = [];
	};
	clearAllSuggestion.addEventListener("click", () => {
		const allSelected = document.querySelectorAll(
			".travelBoxSearchListNamesItemSelected"
		);
		allSelected.forEach((box) => {
			box.classList.remove("travelBoxSearchListNamesItemSelected");
		});
		unisSelected = [];
	});
	input.addEventListener("keydown", (e) => {
		let value = e.target.value;
		addSuggestionToHtml(value);
	});
	input.addEventListener("keyup", (e) => {
		let value = e.target.value;
		addSuggestionToHtml(value);
	});
	input.addEventListener("click", (e) => {
		containerSuggestion.classList.toggle("showSuggestionsContainer");
		containerSearch.classList.toggle("getBiggerHeight");
	});
};
