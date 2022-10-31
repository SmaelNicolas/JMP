import { renderErrorMessage } from "./renderErrorMessage.js";
import { renderSearchMessage } from "./renderSearchMessage.js";
import { renderUniversities } from "./renderUniversities.js";

export const getUniversitiesSearched = async (query, arrayUniversities) => {
	let container = document.getElementById("containerUniversitySearchResult");
	//reset del container de cards
	container.innerHTML = "";
	// if (/^\s*$/.test(query)) return renderSearchMessage();
	// if (query.replace(" ", "").length === 0) return renderSearchMessage();
	const queryWordsArray = query.toLowerCase().split(" ");
	let universitiesWithKeyword = [];

	//filtro el arreglo con los que coincidan con alguna de las keywords
	await queryWordsArray.map((word) => {
		arrayUniversities.map((uni) => {
			uni.KeyWords.map(
				(keyword) =>
					keyword.toLowerCase() === word &&
					universitiesWithKeyword.push(uni)
			);
			uni.Country.toLowerCase().includes(word) &&
				universitiesWithKeyword.push(uni);
			uni.University.toLowerCase().includes(word) &&
				universitiesWithKeyword.push(uni);
			uni.Institution.toLowerCase().includes(word) &&
				universitiesWithKeyword.push(uni);
			uni.City.toLowerCase().includes(word) &&
				universitiesWithKeyword.push(uni);
			uni.Continent.toLowerCase().includes(word) &&
				universitiesWithKeyword.push(uni);
			uni.Streets.toLowerCase().includes(word) &&
				universitiesWithKeyword.push(uni);
		});
	});

	//filtro el arreglo con los que coincidan con el lugar
	const universitiesSearchedArrayByLocation = arrayUniversities.filter(
		(item) =>
			(query.toLowerCase() === item.Continent.toLowerCase() ||
				query.toLowerCase() === item.Country.toLowerCase() ||
				query.toLowerCase() === item.City.toLowerCase() ||
				item.Streets.toLowerCase().includes(query.toLowerCase()) ||
				item.University.toLowerCase().includes(query.toLowerCase()) ||
				query.toLowerCase() === item.Institution.toLowerCase()) &&
			item
	);

	// let arrayComplete = [];
	// //recorre todos los arreglos de todas las palabras y guarda los que son distintos de undefined en un nuevo arreglo
	// await universitiesWithKeyword.map((array) =>
	// 	array.map((prod) => prod !== undefined && arrayComplete.push(prod))
	// );

	universitiesWithKeyword = universitiesWithKeyword.concat(
		universitiesSearchedArrayByLocation
	);

	//elimina todos los duplicados del nuevo arreglo para devolver valores unicos y existentes
	let uniqueUniversitiesArray = [...new Set(universitiesWithKeyword)];

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
