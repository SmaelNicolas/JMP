import { renderErrorMessage } from "./renderErrorMessage.js";
import { renderUniversities } from "./renderUniversities.js";

export const getUniversitiesSearched = async (query, arrayUniversities) => {
	let container = document.getElementById("containerUniversitySearchResult");

	//reset del container de cards
	container.innerHTML = "";
	console.log("QUERY", query);
	console.log("ARRAY UNIVERSITIES", arrayUniversities);

	const queryWordsArray = query.toLowerCase().split(" ");
	console.log("QUERY SPLIT", queryWordsArray);

	let universitiesWithKeyword = [];
	//filtro el arreglo con los que coincidan con alguna de las keywords
	await queryWordsArray.map((word) => {
		arrayUniversities.map((uni) => {
			uni.KeyWords.map(
				(keyword) =>
					keyword.toLowerCase() === word &&
					universitiesWithKeyword.push(uni)
			);
		});
	});
	console.log("ARRAY BUSCADAS", universitiesWithKeyword);

	//filtro el arreglo con los que coincidan con el lugar
	const universitiesSearchedArrayByLocation = arrayUniversities.filter(
		(item) =>
			(query.toLowerCase() === item.Continent.toLowerCase() ||
				query.toLowerCase() === item.Country.toLowerCase() ||
				query.toLowerCase() === item.City.toLowerCase() ||
				query.toLowerCase() === item.Streets.toLowerCase() ||
				query.toLowerCase() === item.University.toLowerCase() ||
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

	console.log("SIN UNDEFINED", universitiesWithKeyword);

	//elimina todos los duplicados del nuevo arreglo para devolver valores unicos y existentes
	let uniqueUniversitiesArray = [...new Set(universitiesWithKeyword)];

	console.log("SIN DUPPLICADOS", uniqueUniversitiesArray);

	//elimina todos los que tiene almenos un campo vacio
	let finalUniversitiesSearch = uniqueUniversitiesArray.filter(
		(uni) =>
			uni.Description !== "" &&
			uni.University !== "" &&
			uni.LinkUniversity !== "" &&
			uni.Streets !== ""
	);

	// devuelve la busqueda sin repetidos , sin indefinidos, sin vacios
	finalUniversitiesSearch.length > 0
		? renderUniversities(finalUniversitiesSearch)
		: renderErrorMessage();
};

// [

//     “Property ID”: "00000001_UNIVERSITIES”,

//     “Continent”: "Europe”,

//     “Country”: “Spain”,

//     "City”: "Kabul",

//     “Streets: "Parwan-2",

//     "Institution”: "Private",

//     "University”: "Kardan University",

//     “About University”: "Founded 2002",

//     “KeyWords”: [

//       “Social”,

//       “Creative”,

//       “Digital”,

//       "Marketing"

//     ],

//       "Link": "http://www.kardan.edu.af"

//   ]
