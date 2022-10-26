export const eventListenerByCards = (PropertyID, index) => {
	document.getElementById(`cardAndMap${PropertyID}`).style.width = "400px";
	//hover in sobre el card para ver mapa
	document
		.getElementById(`cardAndMap${PropertyID}`)
		.addEventListener("mouseover", () => {
			document.getElementById(`map${index}`).style.display = "flex";
			document.getElementById(`map${index}`).style.visibility = "visible";
			document.getElementById(`cardAndMap${PropertyID}`).style.width =
				"650px";
			document.getElementById(
				`cardUniversitySearchResultInfoHover${index}`
			).style.display = "flex";
			document.getElementById(
				`cardUniversitySearchResultInfoHover${index}`
			).style.transition = " all 0.3s linear";
			document.getElementById(
				`containerResultHover${PropertyID}`
			).style.display = "flex";
		});

	//hover out sobre el card para ocultar mapa
	document
		.getElementById(`cardAndMap${PropertyID}`)
		.addEventListener("mouseout", () => {
			document.getElementById(`map${index}`).style.display = "none";
			document.getElementById(`map${index}`).style.visibility = "hidden";
			document.getElementById(`cardAndMap${PropertyID}`).style.width =
				"400px";
			document.getElementById(
				`cardUniversitySearchResultInfoHover${index}`
			).style.display = "none";

			document.getElementById(
				`cardUniversitySearchResultInfoHover${index}`
			).style.transition = " all 0.3s linear";
			document.getElementById(
				`containerResultHover${PropertyID}`
			).style.display = "none";
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
