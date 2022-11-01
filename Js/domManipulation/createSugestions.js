export const createSuggestions = async () => {
	let input = document.getElementById("travelBoxSearchInput");

	let containerSuggestion = document.getElementById(
		"travelContainerSuggestion"
	);
	let containerSearch = document.getElementById("travelBoxSearchContainer");

	let dataSuggestions = [];
	fetch("./exampleKeywords.json")
		.then((res) => res.json())
		.then((res) => getSuggestions(res));

	const getSuggestions = async (arrrayUnis) => {
		await arrrayUnis.map((uni) => {
			dataSuggestions.push(uni.Continent);
			dataSuggestions.push(uni.Country);
			dataSuggestions.push(uni.City);
			dataSuggestions.push(uni.Institution);
			dataSuggestions.push(uni.University);
			uni.KeyWords.map((word) => {
				dataSuggestions.push(word);
			});
		});
		dataSuggestions = [...new Set(dataSuggestions)];
		dataSuggestions = dataSuggestions.sort();
		dataSuggestions = dataSuggestions.filter((item) => item !== "");
		addAllSuggestion();
	};

	input.addEventListener("keydown", (e) => {
		let value = e.target.value;
		addSuggestionToHtml(value);
	});
	input.addEventListener("keyup", (e) => {
		let value = e.target.value;
		addSuggestionToHtml(value);
	});

	input.addEventListener("focusin", (e) => {
		containerSuggestion.classList.add("showSuggestionsContainer");
		containerSearch.classList.toggle("getBiggerHeight");
	});

	input.addEventListener("focusout", (e) => {
		setTimeout(() => {
			containerSuggestion.classList.remove("showSuggestionsContainer");
			containerSearch.classList.remove("getBiggerHeight");
		}, 100);
	});

	const addAllSuggestion = () => {
		dataSuggestions.map((word) => {
			let node = document.createElement("div");
			node.id = word;
			node.innerHTML = word;
			node.classList.add("travelBoxSearchListCountriesItem");
			containerSuggestion.appendChild(node);
			node.addEventListener("click", () => {
				node.classList.toggle(
					"travelBoxSearchListCountriesItemSelected"
				);
				containerSuggestion.classList.remove(
					"showSuggestionsContainer"
				);
				containerSearch.classList.remove("getBiggerHeight");
				input.value = word;
			});
		});
	};

	const addSuggestionToHtml = (value) => {
		containerSuggestion.innerHTML = "";
		dataSuggestions.map((word) => {
			if (word.toLowerCase().includes(value.toLowerCase(), 0)) {
				let node = document.createElement("div");
				node.id = word;
				node.innerHTML = word;
				node.classList.add("travelBoxSearchListCountriesItem");
				containerSuggestion.appendChild(node);
				node.addEventListener("click", () => {
					node.classList.toggle(
						"travelBoxSearchListCountriesItemSelected"
					);
					containerSuggestion.classList.remove(
						"showSuggestionsContainer"
					);
					containerSearch.classList.remove("getBiggerHeight");
					input.value = word;
				});
			}
		});
	};
};
