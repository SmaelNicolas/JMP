import { handleCardsByName } from "./cards.js";
import { createMap } from "./map.js";

let dataUniversidades = [];
let container = document.getElementById("containerWithCards");

let searchPlaces = document.getElementById("searchPlaces");
let searchUniversities = document.getElementById("searchUniversities");
let buttonPlaces = document.getElementById("byPlaces");
let buttonCountry = document.getElementById("byCountry");
let boxAbroad = document.getElementById("boxSearchAbroad");
let boxUni = document.getElementById("boxSearchUni");

fetch("./universidades.json")
	.then((res) => res.json())
	.then((res) => (dataUniversidades = res));

//filtro por lugares
searchPlaces.addEventListener("change", (e) => {
	//tomo el valor del input
	let value = e.target.value;

	//filtro el arreglo con los que coincidan con el lugar
	let filteredArray = dataUniversidades.filter(
		(item) => value.toLowerCase() === item.pais.toLowerCase() && item
	);

	//reset del container de cards
	container.innerHTML = "";

	//crea las cards de los lugares filtrados
	filteredArray.map((item) => handleCardsByName(item, container));

	//agrega el evento hover sobre el contenedor de las cards y maps
	filteredArray.map((item) => {
		document
			.getElementById(`cardAndMap${item.id}`)
			.addEventListener("mouseover", () => {
				document.getElementById(`map${item.id}`).style.visibility =
					"visible";

				document.getElementById(`map${item.id}`).style.transition =
					" all 0.3s";
			});
		document
			.getElementById(`cardAndMap${item.id}`)
			.addEventListener("mouseout", () => {
				document.getElementById(`map${item.id}`).style.visibility =
					"hidden";
				document.getElementById(`map${item.id}`).style.transition =
					" all 0.3s";
			});
	});

	//agrega el mapa para cada card
	filteredArray.map((item) => {
		createMap(item.coordenadas.longitud, item.coordenadas.latitud, item.id);
	});
});

searchUniversities.addEventListener("change", (e) => {
	//reset del container de cards
	container.innerHTML = "";

	//crea las cards de los lugares filtrados
	dataUniversidades.map((item) => handleCardsByName(item, container));

	//agrega el evento hover sobre el contenedor de las cards y maps
	dataUniversidades.map((item) => {
		document
			.getElementById(`cardAndMap${item.id}`)
			.addEventListener("mouseover", () => {
				document.getElementById(`map${item.id}`).style.visibility =
					"visible";

				document.getElementById(`map${item.id}`).style.transition =
					" all 0.3s";
			});
		document
			.getElementById(`cardAndMap${item.id}`)
			.addEventListener("mouseout", () => {
				document.getElementById(`map${item.id}`).style.visibility =
					"hidden";
				document.getElementById(`map${item.id}`).style.transition =
					" all 0.3s";
			});
	});

	//agrega el mapa para cada card
	dataUniversidades.map((item) => {
		createMap(item.coordenadas.longitud, item.coordenadas.latitud, item.id);
	});
});

//cambia a universidades
buttonPlaces.addEventListener("click", () => {
	boxAbroad.classList.toggle("hideBox");
	boxUni.classList.toggle("hideBox");
});

//cambia a lugares
buttonCountry.addEventListener("click", () => {
	boxUni.classList.toggle("hideBox");
	boxAbroad.classList.toggle("hideBox");
});
