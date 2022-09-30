export const handleCardsByName = (item, container) => {
	if (item.name.length <= 16) return card3(item, container);
	if (item.name.length === 17) return card1(item, container);
	if (item.name.length === 18) return card4(item, container);
	if (item.name.length === 19) return card4(item, container);
	if (item.name.length >= 20) return card2(item, container);
};

const card1 = (item, container) => {
	let node = document.createElement("div");
	node.innerHTML = `<div id="cardAndMap${item.id}" class="cardAndMap--container">
				<div id="map${item.id}" class="map"></div>
				<div class="cardUniversitySearchResult--border">
					<div class="cardUniversitySearchResult--container">
						<div class="cardUniversitySearchResult--top">
							<div class="cardUniversitySearchResult--country">${item.pais}</div>
							<img class="cardUniversitySearchResult--fav" src="./fav.png" alt="fav" />
						</div>
						<div class="cardUniversitySearchResultN1--name">${item.name}</div>
						<div class="cardUniversitySearchResultN1--description">${item.description}</div>
						<a class="cardUniversitySearchResultN1--link" href="${item.link}">Link</a>
					</div>
				</div>
			</div>
            `;
	container.appendChild(node);
};

const card2 = (item, container) => {
	let node = document.createElement("div");
	node.innerHTML = `<div id="cardAndMap${item.id}" class="cardAndMap--container">
				<div id="map${item.id}" class="map"></div>
				<div class="cardUniversitySearchResult--border">
				<div class="cardUniversitySearchResult--container">
					<div class="cardUniversitySearchResult--top">
						<div class="cardUniversitySearchResult--country">${item.pais}</div>
						<img class="cardUniversitySearchResult--fav" src="./fav.png" alt="fav" />
					</div>
					<div class="cardUniversitySearchResult--center">
						<div class="cardUniversitySearchResultN2--name">${item.name}</div>
						<div class="cardUniversitySearchResultN2--description">${item.description}</div>
					</div>
					<a class="cardUniversitySearchResult--link" href="${item.link}">Link</a>
				</div>
			</div> 
		</div> 
            `;
	container.appendChild(node);
};

const card3 = (item, container) => {
	let node = document.createElement("div");
	node.innerHTML = `<div id="cardAndMap${item.id}" class="cardAndMap--container">
				<div id="map${item.id}" class="map"></div>
				<div class="cardUniversitySearchResult--border">
				<div class="cardUniversitySearchResult--container">
					<div class="cardUniversitySearchResult--top">
						<div class="cardUniversitySearchResult--country">${item.pais}</div>
						<img class="cardUniversitySearchResult--fav" src="./fav.png" alt="fav" />
					</div>
					<div class="cardUniversitySearchResult--center">
						<div class="cardUniversitySearchResultN3--name">${item.name}</div>
						<div class="cardUniversitySearchResultN3--description">${item.description}</div>
					</div>
					<a class="cardUniversitySearchResult--link" href="${item.link}">Link</a>
				</div>
			</div>
		</div>
            `;
	container.appendChild(node);
};

const card4 = (item, container) => {
	let node = document.createElement("div");
	node.innerHTML = `<div id="cardAndMap${item.id}" class="cardAndMap--container">
				<div id="map${item.id}" class="map"></div>
				<div class="cardUniversitySearchResult--border">
					<div class="cardUniversitySearchResult--container">
						<div class="cardUniversitySearchResult--top">
							<div class="cardUniversitySearchResult--country">${item.pais}</div>
							<img class="cardUniversitySearchResult--fav" src="./fav.png" alt="fav" />
						</div>
						<div class="cardUniversitySearchResult--center">
							<div class="cardUniversitySearchResultN4--description">${item.description}</div>
							<div class="cardUniversitySearchResultN4--name">${item.name}</div>
						</div>
						<a class="cardUniversitySearchResult--link" href="${item.link}">Link</a>
					</div>
				</div>
			</div>
            `;
	container.appendChild(node);
};
