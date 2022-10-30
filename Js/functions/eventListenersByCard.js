import { createMap } from "./createMap.js";

export const eventListenerByCards = (PropertyID, index, fullAdress) => {
	//hover in sobre el card para ver mapa
	document
		.getElementById(`cardAndMap${PropertyID}`)
		.addEventListener("mouseenter", () => {
			let windowWidth = window.innerWidth;
			document.getElementById(
				`containerResultHover${PropertyID}`
			).style.opacity = "1";

			const infoOnHover = document.getElementById(
				`containerResultHover${PropertyID}`
			);
			const infoOnHoverStyles = window.getComputedStyle(infoOnHover);

			infoOnHoverStyles.display === "none" && windowWidth < 766
				? (document.getElementById(
						`containerResultHover${PropertyID}`
				  ).style.display = "flex")
				: "";
			createMap(fullAdress, index);
		});

	//hover out sobre el card para ocultar mapa
	document
		.getElementById(`cardAndMap${PropertyID}`)
		.addEventListener("mouseleave", () => {
			let windowWidth = window.innerWidth;

			document.getElementById(
				`containerResultHover${PropertyID}`
			).style.opacity = "0";

			const infoOnHover = document.getElementById(
				`containerResultHover${PropertyID}`
			);
			const infoOnHoverStyles = window.getComputedStyle(infoOnHover);
			infoOnHoverStyles.display === "flex" && windowWidth < 766
				? (document.getElementById(
						`containerResultHover${PropertyID}`
				  ).style.display = "none")
				: "";
		});

	//click en arrow  agregar descripcion completa
	document
		.getElementById(`cardUniversitySearchResultArrowMore${index}`)
		.addEventListener("click", () => {
			document
				.getElementById(
					`cardUniversitySearchResult--centerShort${index}`
				)
				.classList.toggle("cardUniversitySearchResult--center--hide");
			document
				.getElementById(
					`cardUniversitySearchResult--centerLong${index}`
				)
				.classList.toggle("cardUniversitySearchResult--center--hide");
		});

	//click en arrow agregar descripcion reducida
	document
		.getElementById(`cardUniversitySearchResultArrowLess${index}`)
		.addEventListener("click", () => {
			document
				.getElementById(
					`cardUniversitySearchResult--centerShort${index}`
				)
				.classList.toggle("cardUniversitySearchResult--center--hide");
			document
				.getElementById(
					`cardUniversitySearchResult--centerLong${index}`
				)
				.classList.toggle("cardUniversitySearchResult--center--hide");
		});

	//click en heart gris cambia a rojo. ¿Agrega a favoritos?
	document
		.getElementById(`cardUniversitySearchResult--fav--grey${index}`)
		.addEventListener("click", () => {
			document
				.getElementById(`cardUniversitySearchResult--fav--grey${index}`)
				.classList.toggle("hideBox");
			document
				.getElementById(`cardUniversitySearchResult--fav--red${index}`)
				.classList.toggle("hideBox");
		});

	//click en heart rojo cambia a gris. ¿Agrega a favoritos?
	document
		.getElementById(`cardUniversitySearchResult--fav--red${index}`)
		.addEventListener("click", () => {
			document
				.getElementById(`cardUniversitySearchResult--fav--red${index}`)
				.classList.toggle("hideBox");
			document
				.getElementById(`cardUniversitySearchResult--fav--grey${index}`)
				.classList.toggle("hideBox");
		});
};
