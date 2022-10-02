import { searchUniversitiesByCountry } from "../functions/searchUniversitiesByCountry.js";

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

	fetch("./fromExcel.json")
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
			searchUniversitiesByCountry(value, dataUniversities);
		}
		if (travelSearchSelector.value === "2") {
			// searchUniversitiesByCountry(value, dataUniversities);
		}
	});
};

// 	const searchCity = (value) => {
// 		//reset del container de cards
// 		container.innerHTML = "";

// 		//crea las cards de los lugares filtrados
// 		dataUniversities.map((item) => handleCardsByName(item, container));

// 		//agrega el evento hover sobre el contenedor de las cards y maps
// 		dataUniversities.map((item) => {
// 			document
// 				.getElementById(`cardAndMap${item.id}`)
// 				.addEventListener("mouseover", () => {
// 					document.getElementById(`map${item.id}`).style.visibility =
// 						"visible";

// 					document.getElementById(`map${item.id}`).style.transition =
// 						" all 0.3s";
// 				});
// 			document
// 				.getElementById(`cardAndMap${item.id}`)
// 				.addEventListener("mouseout", () => {
// 					document.getElementById(`map${item.id}`).style.visibility =
// 						"hidden";
// 					document.getElementById(`map${item.id}`).style.transition =
// 						" all 0.3s";
// 				});
// 		});

// 		//agrega el mapa para cada card
// 		dataUniversidades.map((item) => {
// 			createMap(item.street, item.id);
// 		});
// 	};
// };
