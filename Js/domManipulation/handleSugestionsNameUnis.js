import { renderUniversities } from "../functions/renderUniversities.js";
export const handleSugestionsNameUnis = async () => {
	let dataUniversities = [];
	let unisSelected = [];
	let containerSuggestion = document.getElementById(
		"travelContainerSuggestion"
	);
	let containerSearch = document.getElementById("travelBoxSearchContainer");
	let input = document.getElementById("travelBoxSearchInput");
	let clearAllSuggestion = document.getElementById("closeListSuggestion");
	let expandContainer = document.getElementById("expandTravelBoxSearch");

	//LEE EL JSON PARA OBTENER LA LISTA DE NOMBRES DISPONIBLES
	fetch("../../data/universities.json")
		.then((res) => res.json())
		.then((res) => {
			createSuggestions(sortUniversities(res));
			dataUniversities = sortUniversities(res);
		});

	// ORDENA LAS UNIVERSIDADES ALFABETICAMENTE SEGUN EL NOMBRE
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

	// CREA EL CONTENEDOR DE NOMBRE DE PAISES SUGERIDOS
	// Y LE ASIGNA A CADA NOMBRE SU EVENT LISTENER
	const createSuggestions = async (arrrayUnis) => {
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
			eventListenerSuggestion(node, uni, nodeSubInfo);
		});
	};

	//FUNCION QUE MANEJA QUE NOMBRES MOSTRAR SEGUN EL VALOR QUE SE INGRESE EN EL BUSCADOR
	//SI COINCIDE CREA EL NOMBRE Y LE ASIGNA SUS FUNCIONALIDADES
	//VA CAMBIANDO POR CADA CARACTER QUE  SE AGREGA
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
				eventListenerSuggestion(node, uni, nodeSubInfo);
			}
		});
	};

	//AGREGA LAS FUNCIONALIDADES DE SELECCIONAR AL HACER CLICK EN EL NOMBRE Y
	// LAS FUNCIONALIDADES DE HOVER PARA COLOREAR LA DIRECCION
	const eventListenerSuggestion = (node, uni, nodeSubInfo) => {
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
		node.addEventListener("mouseenter", () => {
			nodeSubInfo.classList.toggle(
				"addColorTravelBoxSearchListCountriesItemInfo"
			);
		});
		node.addEventListener("mouseleave", () => {
			nodeSubInfo.classList.toggle(
				"addColorTravelBoxSearchListCountriesItemInfo"
			);
		});
	};

	//FUNCION QUE SE LLAMA PARA ELIMINAR TODOS Y SE SELECCIONO Y SE SIGIO ESCRIBIENDO
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

	//MANEJA LA OPCION DE ELIMINAR TODOS
	clearAllSuggestion.addEventListener("click", () => {
		const allSelected = document.querySelectorAll(
			".travelBoxSearchListNamesItemSelected"
		);
		allSelected.forEach((box) => {
			box.classList.remove("travelBoxSearchListNamesItemSelected");
		});
		unisSelected = [];
	});

	//ACUALIZA LA LISTA DE RECOMENDACIONES LUEGO QUE SE ESCRIBIO UN CARACTER
	input.addEventListener("keyup", (e) => {
		let value = e.target.value;
		addSuggestionToHtml(value);
	});

	//MANEJA LAS VISTAS CUANDO SE HACE CLICK EN EL BUSCADOR
	input.addEventListener("click", (e) => {
		containerSuggestion.classList.toggle("showSuggestionsContainer");
		containerSearch.classList.toggle("getBiggerHeight");
		expandContainer.classList.toggle("getBiggerSeparator");
		containerSearch.classList.remove("getBiggerCountries");
	});
};
