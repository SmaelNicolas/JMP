export const handleCardsByName = (item, container) => {
	if (item.name.length <= 16) return card3(item, container);
	if (item.name.length === 17) return card2(item, container);
	if (item.name.length === 18) return card5(item, container);
	if (item.name.length === 19) return card5(item, container);
	if (item.name.length >= 20) return card4(item, container);
};

export const renderAllCards = (listCards, container) => {
	listCards.map((item, index) => {
		index === 0 && card1(item, container);
		index === 1 && card2(item, container);
		index === 2 && card3(item, container);
		index === 3 && card4(item, container);
		index === 4 && card5(item, container);
		index === 5 && card6(item, container);
		index === 6 && card7(item, container);
		index === 7 && card8(item, container);
		index === 8 && card9(item, container);
		index === 9 && card10(item, container);
		index === 10 && card11(item, container);
		index === 11 && card12(item, container);
		index === 12 && card13(item, container);
		index === 13 && card14(item, container);
	});
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
						<div class="cardUniversitySearchResult--center">
							<div class="cardUniversitySearchResultN1--name">${item.name}</div>
							<div class="cardUniversitySearchResultN1--description">${item.description}</div>
						</div>
						<a class="cardUniversitySearchResult--link" href="${item.link}">Link</a>
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
						<div class="cardUniversitySearchResultN3--description">${item.description}</div>
						<div class="cardUniversitySearchResultN3--name">${item.name}</div>
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
							<div class="cardUniversitySearchResultN4--name">${item.name}</div>
							<div class="cardUniversitySearchResultN4--description">${item.description}</div>
						</div>
						<a class="cardUniversitySearchResult--link" href="${item.link}">Link</a>
					</div>
				</div>
			</div>
            `;
	container.appendChild(node);
};

const card5 = (item, container) => {
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
						<div class="cardUniversitySearchResultN5--name">${item.name}</div>
						<div class="cardUniversitySearchResultN5--description">${item.description}</div>
					</div>
					<a class="cardUniversitySearchResult--link" href="${item.link}">Link</a>
				</div>
			</div>
		</div>
            `;
	container.appendChild(node);
};

const card6 = (item, container) => {
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
							<div class="cardUniversitySearchResultN6--name">${item.name}</div>
							<div class="cardUniversitySearchResultN6--description">${item.description}</div>
						</div>
						<a class="cardUniversitySearchResult--link" href="${item.link}">Link</a>
					</div>
				</div>
			</div>
            `;
	container.appendChild(node);
};

const card7 = (item, container) => {
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
							<div class="cardUniversitySearchResultN7--name">${item.name}</div>
							<div class="cardUniversitySearchResultN7--description">${item.description}</div>
						</div>
						<a class="cardUniversitySearchResult--link" href="${item.link}">Link</a>
					</div>
				</div>
			</div>
            `;
	container.appendChild(node);
};

const card8 = (item, container) => {
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
							<div class="cardUniversitySearchResultN8--description">${item.description}</div>
							<div class="cardUniversitySearchResultN8--name">${item.name}</div>
						</div>
						<a class="cardUniversitySearchResult--link" href="${item.link}">Link</a>
					</div>
				</div>
			</div>
            `;
	container.appendChild(node);
};

const card9 = (item, container) => {
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
							<div class="cardUniversitySearchResultN9--description">${item.description}</div>
							<div class="cardUniversitySearchResultN9--name">${item.name}</div>
						</div>
						<a class="cardUniversitySearchResult--link" href="${item.link}">Link</a>
					</div>
				</div>
			</div>
            `;
	container.appendChild(node);
};

const card10 = (item, container) => {
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
							<div class="cardUniversitySearchResultN10--description">${item.description}</div>
							<div class="cardUniversitySearchResultN10--name">${item.name}</div>
						</div>
						<a class="cardUniversitySearchResult--link" href="${item.link}">Link</a>
					</div>
				</div>
			</div>
            `;
	container.appendChild(node);
};

const card11 = (item, container) => {
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
						<div class="cardUniversitySearchResultN11--name">${item.name}</div>
							<div class="cardUniversitySearchResultN11--description">${item.description}</div>
						</div>
						<a class="cardUniversitySearchResult--link" href="${item.link}">Link</a>
					</div>
				</div>
			</div>
            `;
	container.appendChild(node);
};

const card12 = (item, container) => {
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
							<div class="cardUniversitySearchResultN12--description">${item.description}</div>
							<div class="cardUniversitySearchResultN12--name">${item.name}</div>
						</div>
						<a class="cardUniversitySearchResult--link" href="${item.link}">Link</a>
					</div>
				</div>
			</div>
            `;
	container.appendChild(node);
};

const card13 = (item, container) => {
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
						<div class="cardUniversitySearchResultN13--name">${item.name}</div>
							<div class="cardUniversitySearchResultN13--description">${item.description}</div>
						</div>
						<a class="cardUniversitySearchResult--link" href="${item.link}">Link</a>
					</div>
				</div>
			</div>
            `;
	container.appendChild(node);
};

const card14 = (item, container) => {
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
							<div class="cardUniversitySearchResultN14--description">${item.description}</div>
							<div class="cardUniversitySearchResultN14--name">${item.name}</div>
						</div>
						<a class="cardUniversitySearchResult--link" href="${item.link}">Link</a>
					</div>
				</div>
			</div>
            `;
	container.appendChild(node);
};
