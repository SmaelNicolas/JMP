export const eventListenerByCards = (index) => {
	//hover in sobre el card para ver mapa
	document
		.getElementById(`cardAndMap${index}`)
		.addEventListener("mouseover", () => {
			document.getElementById(`map${index}`).style.visibility = "visible";

			document.getElementById(`map${index}`).style.transition =
				" all 0.3s";
		});
	//hover out sobre el card para ocultar mapa
	document
		.getElementById(`cardAndMap${index}`)
		.addEventListener("mouseout", () => {
			document.getElementById(`map${index}`).style.visibility = "hidden";
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
};
