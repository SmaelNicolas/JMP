import { createMap } from "./createMap.js";

export const eventListenerByCards = (PropertyID, index, fullAdress) => {
	//HOVER IN SOBRE LA CARD PARA MOSTRAR EL MAPA
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

	//HOVER OUT SOBRE EL CONTENEDOR DE LA CARD PARA OCULTAR EL MAPA
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

	//CLICK EN ARROW PARA MOSTRAR LA DESCRIPCION COMPLETA
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

	//CLICK EN ARROW PARA MOSTRAR LA DESCRIPCION REDUCIDA
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

	//CLICK EN EL CORAZON NEGRO PARA CAMBIARLO A COLOR ROJO
	document
		.getElementById(`cardUniversitySearchResult--fav--grey${index}`)
		.addEventListener("click", () => {
			document
				.getElementById(`cardUniversitySearchResult--fav--grey${index}`)
				.classList.toggle("hideBoxHeartUnis");
			document
				.getElementById(`cardUniversitySearchResult--fav--red${index}`)
				.classList.toggle("hideBoxHeartUnis");
		});

	//CLICK EN EL CORAZON ROJO PARA CAMBIARLO A COLOR NEGRO
	document
		.getElementById(`cardUniversitySearchResult--fav--red${index}`)
		.addEventListener("click", () => {
			document
				.getElementById(`cardUniversitySearchResult--fav--red${index}`)
				.classList.toggle("hideBoxHeartUnis");
			document
				.getElementById(`cardUniversitySearchResult--fav--grey${index}`)
				.classList.toggle("hideBoxHeartUnis");
		});
};
