export const renderErrorMessage = () => {
	// SI LA BUSQUEDA NO CONTIENE UNIVERSIDADES RETORNA UN MENSAJE
	// ACTUALMENTE NO TIENE USO , PORQUE TODOS LOS NOMBRES DE UNIVERSIDADES Y TODOS LOS PAISES QUE SE PUEDEN BUSCAR EXISTEN
	let container = document.getElementById("containerUniversitySearchResult");
	let node = document.createElement("div");

	node.innerHTML = "No se encontraron resultados";
	node.classList.add("containerMessagesTravelSection");
	container.appendChild(node);
};
