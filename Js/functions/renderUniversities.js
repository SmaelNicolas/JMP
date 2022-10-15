import { handleCardsByName } from "../domManipulation/cardsUniversities.js";
import { createMap } from "./createMap.js";
import { eventListenerByCards } from "./eventListenersByCard.js";

export const renderUniversities = (universitiesSearch) => {
	let container = document.getElementById("containerUniversitySearchResult");

	//reset del container de cards
	container.innerHTML = "";
	//Crea las cards , maps y agrega el evento hover
	universitiesSearch.map((university, index) => {
		//crea las cards de los lugares filtrados
		handleCardsByName(university, index, container);

		//agrega el mapa para cada card
		let fullAdress = `${university.Streets} ${university.City} ${university.Country}`;
		createMap(fullAdress, index);

		//agrega los event listener arrow, hover
		eventListenerByCards(university.PropertyID, index);
	});
};
