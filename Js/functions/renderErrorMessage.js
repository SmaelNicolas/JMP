export const renderErrorMessage = () => {
	let container = document.getElementById("containerUniversitySearchResult");
	let node = document.createElement("div");

	node.innerHTML = "No se encontraron resultados";
	node.classList.add("containerMessagesTravelSection");
	container.appendChild(node);
};
