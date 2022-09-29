export const handleCardsByName = (item, container) => {
	if (item.name.length === 17) return card1(item, container);
	if (item.name.length >= 20) return card2(item, container);
	if (item.name.length <= 16) return card3(item, container);
	if (item.name.length === 19) return card4(item, container);
};

const card1 = (item, container) => {
	let node = document.createElement("div");
	node.innerHTML = `<div id="cardAndMap${item.id}" class="cardAndMap--container">
				<div id="map${item.id}" class="map"></div>
				<div class="cardSortByName--border">
					<div class="cardSortByName--container">
						<div class="cardSortByName--top">
							<div class="cardSortByName--country">${item.pais}</div>
							<img class="cardSortByName--fav" src="./fav.png" alt="fav" />
						</div>
						<div class="cardSortByNameN1--name">${item.name}</div>
						<div class="cardSortByNameN1--description">${item.description}</div>
						<a class="cardSortByNameN1--link" href="${item.link}">Link</a>
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
				<div class="cardSortByName--border">
				<div class="cardSortByName--container">
					<div class="cardSortByName--top">
						<div class="cardSortByName--country">${item.pais}</div>
						<img class="cardSortByName--fav" src="./fav.png" alt="fav" />
					</div>
					<div class="cardSortByName--center">
						<div class="cardSortByNameN2--name">${item.name}</div>
						<div class="cardSortByNameN2--description">${item.description}</div>
					</div>
					<a class="cardSortByName--link" href="${item.link}">Link</a>
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
				<div class="cardSortByName--border">
				<div class="cardSortByName--container">
					<div class="cardSortByName--top">
						<div class="cardSortByName--country">${item.pais}</div>
						<img class="cardSortByName--fav" src="./fav.png" alt="fav" />
					</div>
					<div class="cardSortByName--center">
						<div class="cardSortByNameN3--name">${item.name}</div>
						<div class="cardSortByNameN3--description">${item.description}</div>
					</div>
					<a class="cardSortByName--link" href="${item.link}">Link</a>
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
				<div class="cardSortByName--border">
					<div class="cardSortByName--container">
						<div class="cardSortByName--top">
							<div class="cardSortByName--country">${item.pais}</div>
							<img class="cardSortByName--fav" src="./fav.png" alt="fav" />
						</div>
						<div class="cardSortByName--center">
							<div class="cardSortByNameN4--description">${item.description}</div>
							<div class="cardSortByNameN4--name">${item.name}</div>
						</div>
						<a class="cardSortByName--link" href="${item.link}">Link</a>
					</div>
				</div>
			</div>
            `;
	container.appendChild(node);
};
