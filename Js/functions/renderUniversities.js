import { handleCardsByName } from "../domManipulation/cardsUniversities.js";
import { eventListenerByCards } from "./eventListenersByCard.js";

export const renderUniversities = (universitiesSearch) => {
	let container = document.getElementById("containerUniversitySearchResult");

	//reset del container de cards
	container.innerHTML = "";

	//Crea las cards , maps y agrega el evento hover
	universitiesSearch.map((university, index) => {
		//CREA LA DIRECCION COMPLETA
		let fullAdress = `${university.Streets} ${university.City} ${university.Country}`;

		//crea las cards de los lugares filtrados
		handleCardsByName(university, index, container);

		//agrega los event listener arrow, hover
		eventListenerByCards(university.PropertyID, index, fullAdress);
	});
};
