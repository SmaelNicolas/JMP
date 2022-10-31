export const renderSearchMessage = () => {
	let container = document.getElementById("containerUniversitySearchResult");
	let node = document.createElement("div");

	node.innerHTML = "Realize una busqueda";
	node.classList.add("containerMessagesTravelSection");
	container.appendChild(node);
};
