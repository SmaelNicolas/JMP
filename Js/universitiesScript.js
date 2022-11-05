import { handleSugestionsNameUnis } from "./domManipulation/handleSugestionsNameUnis.js";
import { handleSuggestionsCountrys } from "./domManipulation/handleSuggestionsCountrys.js";
import { getUniversitiesSearchedByCountry } from "./functions/searchByCountry.js";

// LLAMADO AL JSON PARA LEER LA INFO
fetch("../data/universities.json")
	.then((res) => res.json())
	.then((res) => firstRender(res));

// FUNCION QUE CREA Y MANEJA EL PANEL DE SUGERENCIAS DE TODOS LOS PAISES DISPONIBLES
handleSuggestionsCountrys();

// FUNCION QUE CREA Y MANEJA EL PANEL DE SUGERENCIAS DE TODOS LOS NOMBRES DE LAS UNIVERSIDADES
handleSugestionsNameUnis();

// ARRAY DE UNIVERSIDADES QUE SE VAN A RENDERIZAR AL CARGAR LA PAGINA
let initialCountries = [
	"Australia",
	"United States",
	"United Kingdom",
	"Canada",
	"Spain",
];

// FUNCION QUE RENDERIZA LAS PRIMERAS PAGINAS , LUEGO DE HABER LEIDO EL .JSON PARA OBTENER LA INFORMACION NECESARIA
const firstRender = (array) => {
	getUniversitiesSearchedByCountry(initialCountries, array);
};
