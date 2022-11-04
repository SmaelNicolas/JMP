import { renderErrorMessage } from "./renderErrorMessage.js";
import { renderUniversities } from "./renderUniversities.js";

export const getUniversitiesSearchedByCountry = async (
	query,
	arrayUniversities
) => {
	let container = document.getElementById("containerUniversitySearchResult");
	container.innerHTML = "";
	// FILTRA EL ARREGLO DE UNIVERSIDADES QUE COINCIDAN CON EL LUGAR
	let universitiesSearch = [];
	arrayUniversities.map((item) =>
		query.filter((uni) => {
			uni.toLowerCase() === item.Country.toLowerCase() &&
				universitiesSearch.push(item);
		})
	);

	//ELIMINA TODOS LOS DUPLICADOS DEL ARREGLO PARA DEVOLVER VALORES UNICOS
	let uniqueUniversitiesArray = [...new Set(universitiesSearch)];

	// ELIMINA TODAS LAS UNIVERSIDADES QUE TIENEN AL MENOS UN CAMPO VACIO.
	//LOS CAMPOS QUE CONTROLA SON LOS NECESARIOS PARA RENDERIZAR UNA CARD COMPLETA
	let finalUniversitiesSearch = uniqueUniversitiesArray.filter(
		(uni) =>
			uni.AboutUniversity !== "" &&
			uni.University !== "" &&
			uni.Link !== "" &&
			uni.Streets !== ""
	);

	// DEVUELVE LA BUSQUEDA SIN REPETIDOS, INDEFINIDOS NI VACIOS
	// LLAMA A LA FUNCION QUE RENDERIZA LAS UNIVERSIDADES
	finalUniversitiesSearch.length > 0
		? renderUniversities(finalUniversitiesSearch)
		: renderErrorMessage();
};
