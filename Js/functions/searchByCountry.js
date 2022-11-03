import { renderErrorMessage } from "./renderErrorMessage.js";
import { renderUniversities } from "./renderUniversities.js";

export const getUniversitiesSearchedByCountry = async (
	query,
	arrayUniversities
) => {
	let container = document.getElementById("containerUniversitySearchResult");
	container.innerHTML = "";
	// filtro el arreglo con los que coincidan con el lugar
	let universitiesSearch = [];
	arrayUniversities.map((item) =>
		query.filter((uni) => {
			uni.toLowerCase() === item.Country.toLowerCase() &&
				universitiesSearch.push(item);
		})
	);
	//elimina todos los duplicados del nuevo arreglo para devolver valores unicos y existentes
	let uniqueUniversitiesArray = [...new Set(universitiesSearch)];
	//elimina todos los que tiene almenos un campo vacio
	let finalUniversitiesSearch = uniqueUniversitiesArray.filter(
		(uni) =>
			uni.AboutUniversity !== "" &&
			uni.University !== "" &&
			uni.Link !== "" &&
			uni.Streets !== ""
	);

	// devuelve la busqueda sin repetidos , sin indefinidos, sin vacios
	finalUniversitiesSearch.length > 0
		? renderUniversities(finalUniversitiesSearch)
		: renderErrorMessage();
};
