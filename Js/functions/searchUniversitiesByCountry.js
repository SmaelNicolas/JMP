import { handleCardsByName } from "../domManipulation/cardsUniversities.js";
import { createMap } from "./createMap.js";

export const searchUniversitiesByCountry = (value, dataUniversities) => {
	let container = document.getElementById("containerUniversitySearchResult");

	//filtro el arreglo con los que coincidan con el lugar
	let filteredArray = dataUniversities.filter(
		(item) => value.toLowerCase() === item.Country.toLowerCase() && item
	);

	//reset del container de cards
	container.innerHTML = "";

	//agrega el evento hover sobre el contenedor de las cards y maps
	filteredArray.map((university, index) => {
		//crea las cards de los lugares filtrados
		handleCardsByName(university, index, container);

		//agrega el mapa para cada card
		let fullAdress = `${university.Streets} ${university.City} ${university.Country}`;
		createMap(fullAdress, index);

		//hover in sobre el card para ver mapa
		document
			.getElementById(`cardAndMap${index}`)
			.addEventListener("mouseover", () => {
				document.getElementById(`map${index}`).style.visibility =
					"visible";

				document.getElementById(`map${index}`).style.transition =
					" all 0.3s";
			});
		//hover out sobre el card para ocultar mapa
		document
			.getElementById(`cardAndMap${index}`)
			.addEventListener("mouseout", () => {
				document.getElementById(`map${index}`).style.visibility =
					"hidden";
				document.getElementById(`map${index}`).style.transition =
					" all 0.3s";
			});

		//click en arrow  agregar descripcion completa
		document
			.getElementById(`cardUniversitySearchResultArrowMore${index}`)
			.addEventListener("click", () => {
				document
					.getElementById(
						`cardUniversitySearchResult--centerShort${index}`
					)
					.classList.toggle(
						"cardUniversitySearchResult--center--hide"
					);
				document
					.getElementById(
						`cardUniversitySearchResult--centerLong${index}`
					)
					.classList.toggle(
						"cardUniversitySearchResult--center--hide"
					);
			});

		//click en arrow agregar descripcion reducida
		document
			.getElementById(`cardUniversitySearchResultArrowLess${index}`)
			.addEventListener("click", () => {
				document
					.getElementById(
						`cardUniversitySearchResult--centerShort${index}`
					)
					.classList.toggle(
						"cardUniversitySearchResult--center--hide"
					);
				document
					.getElementById(
						`cardUniversitySearchResult--centerLong${index}`
					)
					.classList.toggle(
						"cardUniversitySearchResult--center--hide"
					);
			});
	});
};
