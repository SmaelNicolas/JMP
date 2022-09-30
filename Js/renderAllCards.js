import { renderAllCards } from "./domManipulation/cardsUniversities.js";

let container = document.getElementById("containerUniversitySearchResult");

fetch("./renderAll.json")
	.then((res) => res.json())
	.then((res) => renderAllCards(res, container));
