import { getUniversitiesSearchedByCountry } from "../functions/searchByCountry.js";

export const handleSuggestionsCountrys = () => {
	let containerSearch = document.getElementById("travelBoxSearchContainer");
	let suggestionListCountries = document.getElementById(
		"travelBoxSearchListCountriesContainer"
	);
	let selectorCountriesList = document.getElementById(
		"travelBoxSearchListCountriesContainer"
	);
	let clearAllCountriesSelected =
		document.getElementById("closeListCountries");
	let travelBoxSearchInput = document.getElementById("travelBoxSearchInput");
	travelBoxSearchInput.addEventListener("click", () => {
		selectorCountriesList.classList.remove(
			"ListCountriesContainerHideShow"
		);
	});
	let selectorCountries = document.getElementById("travelSearchSelector");
	let travelSearchSelector = document.getElementById("travelSearchSelector");
	let expandContainer = document.getElementById("expandTravelBoxSearch");
	let containerSuggestion = document.getElementById(
		"travelContainerSuggestion"
	);

	let arrayCountries = [];
	let dataUniversities = [];

	//LEE EL JSON PARA OBTENER LA LISTA DE PAISES DISPONIBLES
	fetch("./universities.json")
		.then((res) => res.json())
		.then((res) => {
			dataUniversities = res;
			getAllCountrys(res);
		});

	//CREA EL ARREGLO DE PAISES Y ELIMINA DUPLICADOS, LLAMA A LA FUNCION QUE LOS VA A RENDERIZAR.
	const getAllCountrys = (dataUniversities) => {
		let arrayCountrys = dataUniversities.map((uni) => {
			return uni.Country;
		});
		let uniqueArrayCountrys = [...new Set(arrayCountrys)];
		uniqueArrayCountrys = uniqueArrayCountrys.sort();
		renderSelectors(uniqueArrayCountrys);
	};

	// CREA Y RENDERIZA CADA NOMBRE DE PAIS Y LE ASIGNA EL EVENT LISTENER CORRESPONDIENTE.
	const renderSelectors = (arrayCountrys) => {
		arrayCountrys.map((country) => {
			let node = document.createElement("div");
			node.id = country;
			node.innerHTML = country;
			node.classList.add("travelBoxSearchListCountriesItem");
			suggestionListCountries.appendChild(node);
			eventListenerCountries(node);
		});
	};

	//EVENT LISTENER QUE MANEJA LOS CLICKS EN EL SELECTOR DE COUNTRY
	selectorCountries.addEventListener("click", () => {
		containerSearch.classList.remove("getBiggerHeight");
		containerSearch.classList.toggle("getBiggerCountries");
		selectorCountriesList.classList.toggle(
			"ListCountriesContainerHideShow"
		);
		expandContainer.classList.remove("getBiggerSeparator");
		containerSuggestion.classList.remove("showSuggestionsContainer");
	});

	//EVENT LISTENER QUE MANEJA LA OPCION DE ELIMINAR TODOS
	clearAllCountriesSelected.addEventListener("click", () => {
		const allSelected = document.querySelectorAll(
			".travelBoxSearchListCountriesItemSelected"
		);
		allSelected.forEach((box) => {
			box.classList.remove("travelBoxSearchListCountriesItemSelected");
		});
		arrayCountries = [];
		travelSearchSelector.innerHTML = "COUNTRY";
	});

	//FUNCION QUE LE ASIGNA EL EVENT LISTENER A CADA PAIS
	//MANEJA LOS CLICKS EN CADA PAIS, PARA AGREGARLE LA CLASE Y HACER EL LLAMADO A LA FUNCION QUE BUSCA LAS UNIVERSIDADES POR PAIS
	const eventListenerCountries = (node) => {
		node.addEventListener("click", () => {
			node.classList.toggle("travelBoxSearchListCountriesItemSelected");
			travelBoxSearchInput.value = "";
			if (
				node.classList.contains(
					"travelBoxSearchListCountriesItemSelected"
				)
			) {
				arrayCountries.push(node.getAttribute("id"));
				travelSearchSelector.innerHTML = node.getAttribute("id");
				getUniversitiesSearchedByCountry(
					arrayCountries,
					dataUniversities
				);
			} else {
				arrayCountries = arrayCountries.filter(
					(country) => country !== node.getAttribute("id")
				);
				travelSearchSelector.innerHTML = "COUNTRY";
				if (arrayCountries.length > 0) {
					getUniversitiesSearchedByCountry(
						arrayCountries,
						dataUniversities
					);
				} else {
					// ACA IRIA CODIGO SI SE QUIERE AGREGAR ALGO CUANDO NO HAYA NINGUN PAIS SELECCIONADO.
				}
			}
		});
	};
};
