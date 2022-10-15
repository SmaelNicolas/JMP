export const addCountryToSelector = () => {
	let travelSearchSelector = document.getElementById("travelSearchSelector");

	fetch("./exampleKeywords.json")
		.then((res) => res.json())
		.then((res) => getAllCountrys(res));

	const getAllCountrys = (dataUniversities) => {
		let arrayCountrys = dataUniversities.map((uni) => {
			return uni.Country;
		});
		let uniqueArrayCountrys = [...new Set(arrayCountrys)];
		renderSelectors(uniqueArrayCountrys);
	};

	const renderSelectors = (arrayCountrys) => {
		arrayCountrys.map((country) => {
			let node = document.createElement("option");
			node.innerHTML = `<option class="travelSearchSelectorOption" value="${country}">${country}</option>`;
			travelSearchSelector.appendChild(node);
		});
	};
};
