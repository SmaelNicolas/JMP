import { reduceString } from "../functions/reduceString.js";

export const handleCardsByName = (item, index, container) => {
	if (item.University.length <= 14) return card12(item, index, container);
	if (item.University.length === 16) return card2(item, index, container);
	if (item.University.length === 18) return card5(item, index, container);
	if (item.University.length < 30) return card6(item, index, container);
	if (item.University.length < 36) return card13(item, index, container);
	if (item.University.length >= 36) return card11(item, index, container);
};

const card1 = (item, index, container) => {
	let descriptionReduced = reduceString(item.Description);
	let node = document.createElement("div");
	node.innerHTML = `<div id="cardAndMap${index}" class="cardAndMap--container${
		(index + 1) % 2 === 0 ? "Par" : "Impar"
	}">
				<div id="map${index}" class="map"></div>
				<div class="cardUniversitySearchResult--border">
					<div class="cardUniversitySearchResult--container">
						<div class="cardUniversitySearchResult--top">
							<div class="cardUniversitySearchResult--country">${item.Country}</div>
							<img class="cardUniversitySearchResult--fav" src="../../Assets/Icons/heart.svg" alt="fav" />
						</div>
						<div class="cardUniversitySearchResult--center" id="cardUniversitySearchResult--centerShort${index}">
							<div class="cardUniversitySearchResultN1--name">${item.University}</div>
								<div class="cardUniversitySearchResultN1--description " >${descriptionReduced}
								<div id="cardUniversitySearchResultArrowMore${index}" class="cardUniversitySearchResultArrowMore">
								<img src="../../Assets/Icons/Chevron-down-solid.svg" />
								</div>
							</div>
						</div>
						<div class="cardUniversitySearchResult--center cardUniversitySearchResult--center--hide" id="cardUniversitySearchResult--centerLong${index}">
							<div class="cardUniversitySearchResultN1--name">${item.University}</div>
							<div class="cardUniversitySearchResultN1--description" >${item.Description}
								<div id="cardUniversitySearchResultArrowLess${index}" class="cardUniversitySearchResultArrowLess">
								<img src="../../Assets/Icons/Chevron-down-solid.svg" />
								</div>
							</div>
						</div>
							<a class="cardUniversitySearchResult--link"
						 href="${item.LinkUniversity}" target='_blank'>Link</a>
					</div>
				</div>
			</div>
            `;
	container.appendChild(node);
};

const card2 = (item, index, container) => {
	let descriptionReduced = reduceString(item.Description);
	let node = document.createElement("div");
	node.innerHTML = `<div id="cardAndMap${index}" class="cardAndMap--container${
		(index + 1) % 2 === 0 ? "Par" : "Impar"
	}">
				<div id="map${index}" class="map"></div>
				<div class="cardUniversitySearchResult--border">
					<div class="cardUniversitySearchResult--container">
						<div class="cardUniversitySearchResult--top">
							<div class="cardUniversitySearchResult--country">${item.Country}</div>
							<img class="cardUniversitySearchResult--fav" src="../../Assets/Icons/heart.svg" alt="fav" />
						</div>
						<div class="cardUniversitySearchResult--center" id="cardUniversitySearchResult--centerShort${index}">
							<div class="cardUniversitySearchResultN2--name">${item.University}</div>
							<div class="cardUniversitySearchResultN2--description " >${descriptionReduced}
							<div id="cardUniversitySearchResultArrowMore${index}" class="cardUniversitySearchResultArrowMore">
							<img src="../../Assets/Icons/Chevron-down-solid.svg" />
							</div>
							</div>
						</div>
						<div class="cardUniversitySearchResult--center cardUniversitySearchResult--center--hide" id="cardUniversitySearchResult--centerLong${index}">
							<div class="cardUniversitySearchResultN2--name">${item.University}</div>
							<div class="cardUniversitySearchResultN2--description" >${item.Description}
								<div id="cardUniversitySearchResultArrowLess${index}" class="cardUniversitySearchResultArrowLess">
								<img src="../../Assets/Icons/Chevron-down-solid.svg" />
								</div>
							</div>
						</div>
							<a class="cardUniversitySearchResult--link"
						 href="${item.LinkUniversity}" target='_blank'>Link</a>
					</div>
				</div>
			</div>
            `;
	container.appendChild(node);
};

const card3 = (item, index, container) => {
	let descriptionReduced = reduceString(item.Description);
	let node = document.createElement("div");
	node.innerHTML = `<div id="cardAndMap${index}" class="cardAndMap--container${
		(index + 1) % 2 === 0 ? "Par" : "Impar"
	}">
				<div id="map${index}" class="map"></div>
				<div class="cardUniversitySearchResult--border">
				<div class="cardUniversitySearchResult--container">
					<div class="cardUniversitySearchResult--top">
						<div class="cardUniversitySearchResult--country">${item.Country}</div>
						<img class="cardUniversitySearchResult--fav" src="../../Assets/Icons/heart.svg" alt="fav" />
					</div>
					<div class="cardUniversitySearchResult--center" id="cardUniversitySearchResult--centerShort${index}">
						<div class="cardUniversitySearchResultN3--description " >${descriptionReduced}
							<div id="cardUniversitySearchResultArrowMore${index}" class="cardUniversitySearchResultArrowMore">
							<img src="../../Assets/Icons/Chevron-down-solid.svg" />
							</div>
						</div>
						<div class="cardUniversitySearchResultN3--name">${item.University}</div>
					</div>
						<div class="cardUniversitySearchResult--center cardUniversitySearchResult--center--hide" id="cardUniversitySearchResult--centerLong${index}">
							<div class="cardUniversitySearchResultN3--description" >${item.Description}
								<div id="cardUniversitySearchResultArrowLess${index}" class="cardUniversitySearchResultArrowLess">
								<img src="../../Assets/Icons/Chevron-down-solid.svg" />
								</div>
							</div>
							<div class="cardUniversitySearchResultN3--name">${item.University}</div>
						</div>
					<a class="cardUniversitySearchResult--link" href="${
						item.LinkUniversity
					}">Link</a>
				</div>
			</div> 
		</div> 
            `;
	container.appendChild(node);
};

const card4 = (item, index, container) => {
	let descriptionReduced = reduceString(item.Description);
	let node = document.createElement("div");
	node.innerHTML = `<div id="cardAndMap${index}" class="cardAndMap--container${
		(index + 1) % 2 === 0 ? "Par" : "Impar"
	}">
				<div id="map${index}" class="map"></div>
				<div class="cardUniversitySearchResult--border">
					<div class="cardUniversitySearchResult--container">
						<div class="cardUniversitySearchResult--top">
							<div class="cardUniversitySearchResult--country">${item.Country}</div>
							<img class="cardUniversitySearchResult--fav" src="../../Assets/Icons/heart.svg" alt="fav" />
						</div>
						<div class="cardUniversitySearchResult--center" id="cardUniversitySearchResult--centerShort${index}">
							<div class="cardUniversitySearchResultN4--name">${item.University}</div>
							<div class="cardUniversitySearchResultN4--description " >${descriptionReduced}
								<div id="cardUniversitySearchResultArrowMore${index}" class="cardUniversitySearchResultArrowMore">
								<img src="../../Assets/Icons/Chevron-down-solid.svg" />
								</div>
							</div>
						</div>
						<div class="cardUniversitySearchResult--center cardUniversitySearchResult--center--hide" id="cardUniversitySearchResult--centerLong${index}">
							<div class="cardUniversitySearchResultN4--name">${item.University}</div>
							<div class="cardUniversitySearchResultN4--description" >${item.Description}
								<div id="cardUniversitySearchResultArrowLess${index}" class="cardUniversitySearchResultArrowLess">
								<img src="../../Assets/Icons/Chevron-down-solid.svg" />
								</div>
							</div>
						</div>
							<a class="cardUniversitySearchResult--link"
						 href="${item.LinkUniversity}" target='_blank'>Link</a>
					</div>
				</div>
			</div>
            `;
	container.appendChild(node);
};

const card5 = (item, index, container) => {
	let descriptionReduced = reduceString(item.Description);
	let node = document.createElement("div");
	node.innerHTML = `<div id="cardAndMap${index}" class="cardAndMap--container${
		(index + 1) % 2 === 0 ? "Par" : "Impar"
	}">
				<div id="map${index}" class="map"></div>
				<div class="cardUniversitySearchResult--border">
				<div class="cardUniversitySearchResult--container">
					<div class="cardUniversitySearchResult--top">
						<div class="cardUniversitySearchResult--country">${item.Country}</div>
						<img class="cardUniversitySearchResult--fav" src="../../Assets/Icons/heart.svg" alt="fav" />
					</div>
					<div class="cardUniversitySearchResult--center" id="cardUniversitySearchResult--centerShort${index}">
						<div class="cardUniversitySearchResultN5--name">${item.University}</div>
						<div class="cardUniversitySearchResultN5--description " >${descriptionReduced}
							<div id="cardUniversitySearchResultArrowMore${index}" class="cardUniversitySearchResultArrowMore">
							<img src="../../Assets/Icons/Chevron-down-solid.svg" />
							</div>
						</div>
					</div>
					<div class="cardUniversitySearchResult--center cardUniversitySearchResult--center--hide" id="cardUniversitySearchResult--centerLong${index}">
						<div class="cardUniversitySearchResultN5--name">${item.University}</div>
						<div class="cardUniversitySearchResultN5--description" >${item.Description}
								<div id="cardUniversitySearchResultArrowLess${index}" class="cardUniversitySearchResultArrowLess">
								<img src="../../Assets/Icons/Chevron-down-solid.svg" />
								</div>
						</div>
					</div>
					<a class="cardUniversitySearchResult--link" href="${
						item.LinkUniversity
					}">Link</a>
				</div>
			</div>
		</div>
            `;
	container.appendChild(node);
};

const card6 = (item, index, container) => {
	let descriptionReduced = reduceString(item.Description);
	let node = document.createElement("div");
	node.innerHTML = `<div id="cardAndMap${index}" class="cardAndMap--container${
		(index + 1) % 2 === 0 ? "Par" : "Impar"
	}">
				<div id="map${index}" class="map"></div>
				<div class="cardUniversitySearchResult--border">
					<div class="cardUniversitySearchResult--container">
						<div class="cardUniversitySearchResult--top">
							<div class="cardUniversitySearchResult--country">${item.Country}</div>
							<img class="cardUniversitySearchResult--fav" src="../../Assets/Icons/heart.svg" alt="fav" />
						</div>
						<div class="cardUniversitySearchResult--center" id="cardUniversitySearchResult--centerShort${index}">
							<div class="cardUniversitySearchResultN6--name">${item.University}</div>
							<div class="cardUniversitySearchResultN6--description " >${descriptionReduced}
								<div id="cardUniversitySearchResultArrowMore${index}" class="cardUniversitySearchResultArrowMore">
								<img src="../../Assets/Icons/Chevron-down-solid.svg" />
								</div>
							</div>
						</div>
						<div class="cardUniversitySearchResult--center cardUniversitySearchResult--center--hide" id="cardUniversitySearchResult--centerLong${index}">
							<div class="cardUniversitySearchResultN6--name">${item.University}</div>
							<div class="cardUniversitySearchResultN6--description" >${item.Description}
								<div id="cardUniversitySearchResultArrowLess${index}" class="cardUniversitySearchResultArrowLess">
								<img src="../../Assets/Icons/Chevron-down-solid.svg" />
								</div>
							</div>
						</div>
							<a class="cardUniversitySearchResult--link"
						 href="${item.LinkUniversity}" target='_blank'>Link</a>
					</div>
				</div>
			</div>
            `;
	container.appendChild(node);
};

const card7 = (item, index, container) => {
	let descriptionReduced = reduceString(item.Description);
	let node = document.createElement("div");
	node.innerHTML = `<div id="cardAndMap${index}" class="cardAndMap--container${
		(index + 1) % 2 === 0 ? "Par" : "Impar"
	}">
				<div id="map${index}" class="map"></div>
				<div class="cardUniversitySearchResult--border">
					<div class="cardUniversitySearchResult--container">
						<div class="cardUniversitySearchResult--top">
							<div class="cardUniversitySearchResult--country">${item.Country}</div>
							<img class="cardUniversitySearchResult--fav" src="../../Assets/Icons/heart.svg" alt="fav" />
						</div>
						<div class="cardUniversitySearchResult--center" id="cardUniversitySearchResult--centerShort${index}">
							<div class="cardUniversitySearchResultN7--name">${item.University}</div>
							<div class="cardUniversitySearchResultN7--description " >${descriptionReduced}
								<div id="cardUniversitySearchResultArrowMore${index}" class="cardUniversitySearchResultArrowMore">
								<img src="../../Assets/Icons/Chevron-down-solid.svg" />
								</div>
							</div>
						</div>
						<div class="cardUniversitySearchResult--center cardUniversitySearchResult--center--hide" id="cardUniversitySearchResult--centerLong${index}">
							<div class="cardUniversitySearchResultN7--name">${item.University}</div>
							<div class="cardUniversitySearchResultN7--description" >${item.Description}
								<div id="cardUniversitySearchResultArrowLess${index}" class="cardUniversitySearchResultArrowLess">
								<img src="../../Assets/Icons/Chevron-down-solid.svg" />
								</div>
							</div>
						</div>
							<a class="cardUniversitySearchResult--link"
						 href="${item.LinkUniversity}" target='_blank'>Link</a>
					</div>
				</div>
			</div>
            `;
	container.appendChild(node);
};

const card8 = (item, index, container) => {
	let descriptionReduced = reduceString(item.Description);
	let node = document.createElement("div");
	node.innerHTML = `<div id="cardAndMap${index}" class="cardAndMap--container${
		(index + 1) % 2 === 0 ? "Par" : "Impar"
	}">
				<div id="map${index}" class="map"></div>
				<div class="cardUniversitySearchResult--border">
					<div class="cardUniversitySearchResult--container">
						<div class="cardUniversitySearchResult--top">
							<div class="cardUniversitySearchResult--country">${item.Country}</div>
							<img class="cardUniversitySearchResult--fav" src="../../Assets/Icons/heart.svg" alt="fav" />
						</div>
						<div class="cardUniversitySearchResult--center" id="cardUniversitySearchResult--centerShort${index}">
							<div class="cardUniversitySearchResultN8--description " >${descriptionReduced}
								<div id="cardUniversitySearchResultArrowMore${index}" class="cardUniversitySearchResultArrowMore">
								<img src="../../Assets/Icons/Chevron-down-solid.svg" />
								</div>
							</div>
							<div class="cardUniversitySearchResultN8--name">${item.University}</div>
						</div>
						<div class="cardUniversitySearchResult--center cardUniversitySearchResult--center--hide" id="cardUniversitySearchResult--centerLong${index}">
							<div class="cardUniversitySearchResultN8--description" >${item.Description}
								<div id="cardUniversitySearchResultArrowLess${index}" class="cardUniversitySearchResultArrowLess">
								<img src="../../Assets/Icons/Chevron-down-solid.svg" />
								</div>
							</div>
							<div class="cardUniversitySearchResultN8--name">${item.University}</div>
						</div>
							<a class="cardUniversitySearchResult--link"
						 href="${item.LinkUniversity}" target='_blank'>Link</a>
					</div>
				</div>
			</div>
            `;
	container.appendChild(node);
};

const card9 = (item, index, container) => {
	let descriptionReduced = reduceString(item.Description);
	let node = document.createElement("div");
	node.innerHTML = `<div id="cardAndMap${index}" class="cardAndMap--container${
		(index + 1) % 2 === 0 ? "Par" : "Impar"
	}">
				<div id="map${index}" class="map"></div>
				<div class="cardUniversitySearchResult--border">
					<div class="cardUniversitySearchResult--container">
						<div class="cardUniversitySearchResult--top">
							<div class="cardUniversitySearchResult--country">${item.Country}</div>
							<img class="cardUniversitySearchResult--fav" src="../../Assets/Icons/heart.svg" alt="fav" />
						</div>
						<div class="cardUniversitySearchResult--center" id="cardUniversitySearchResult--centerShort${index}">
							<div class="cardUniversitySearchResultN9--description " >${descriptionReduced}
								<div id="cardUniversitySearchResultArrowMore${index}" class="cardUniversitySearchResultArrowMore">
								<img src="../../Assets/Icons/Chevron-down-solid.svg" />
								</div>
							</div>
							<div class="cardUniversitySearchResultN9--name">${item.University}</div>
						</div>
						<div class="cardUniversitySearchResult--center cardUniversitySearchResult--center--hide" id="cardUniversitySearchResult--centerLong${index}">
							<div class="cardUniversitySearchResultN9--description" >${item.Description}
								<div id="cardUniversitySearchResultArrowLess${index}" class="cardUniversitySearchResultArrowLess">
								<img src="../../Assets/Icons/Chevron-down-solid.svg" />
								</div>
							</div>
							<div class="cardUniversitySearchResultN9--name">${item.University}</div>
						</div>
							<a class="cardUniversitySearchResult--link"
						 href="${item.LinkUniversity}" target='_blank'>Link</a>
					</div>
				</div>
			</div>
            `;
	container.appendChild(node);
};

const card10 = (item, index, container) => {
	let descriptionReduced = reduceString(item.Description);
	let node = document.createElement("div");
	node.innerHTML = `<div id="cardAndMap${index}" class="cardAndMap--container${
		(index + 1) % 2 === 0 ? "Par" : "Impar"
	}">
				<div id="map${index}" class="map"></div>
				<div class="cardUniversitySearchResult--border">
					<div class="cardUniversitySearchResult--container">
						<div class="cardUniversitySearchResult--top">
							<div class="cardUniversitySearchResult--country">${item.Country}</div>
							<img class="cardUniversitySearchResult--fav" src="../../Assets/Icons/heart.svg" alt="fav" />
						</div>
						<div class="cardUniversitySearchResult--center" id="cardUniversitySearchResult--centerShort${index}">
							<div class="cardUniversitySearchResultN10--description " >${descriptionReduced}
							<div id="cardUniversitySearchResultArrowMore${index}" class="cardUniversitySearchResultArrowMore">
							<img src="../../Assets/Icons/Chevron-down-solid.svg" />
							</div>
							</div>
							<div class="cardUniversitySearchResultN10--name">${item.University}</div>
						</div>
						<div class="cardUniversitySearchResult--center cardUniversitySearchResult--center--hide" id="cardUniversitySearchResult--centerLong${index}">
							<div class="cardUniversitySearchResultN10--description" >${item.Description}
								<div id="cardUniversitySearchResultArrowLess${index}" class="cardUniversitySearchResultArrowLess">
								<img src="../../Assets/Icons/Chevron-down-solid.svg" />
								</div>
							</div>
							<div class="cardUniversitySearchResultN10--name">${item.University}</div>
						</div>
							<a class="cardUniversitySearchResult--link"
						 href="${item.LinkUniversity}" target='_blank'>Link</a>
					</div>
				</div>
			</div>
            `;
	container.appendChild(node);
};

const card11 = (item, index, container) => {
	let descriptionReduced = reduceString(item.Description);
	let node = document.createElement("div");
	node.innerHTML = `<div id="cardAndMap${index}" class="cardAndMap--container${
		(index + 1) % 2 === 0 ? "Par" : "Impar"
	}">
				<div id="map${index}" class="map"></div>
				<div class="cardUniversitySearchResult--border">
					<div class="cardUniversitySearchResult--container">
						<div class="cardUniversitySearchResult--top">
							<div class="cardUniversitySearchResult--country">${item.Country}</div>
							<img class="cardUniversitySearchResult--fav" src="../../Assets/Icons/heart.svg" alt="fav" />
						</div>
						<div class="cardUniversitySearchResult--center" id="cardUniversitySearchResult--centerShort${index}">
						<div class="cardUniversitySearchResultN11--name">${item.University}</div>
							<div class="cardUniversitySearchResultN11--description " >${descriptionReduced}
							<div id="cardUniversitySearchResultArrowMore${index}" class="cardUniversitySearchResultArrowMore">
							<img src="../../Assets/Icons/Chevron-down-solid.svg" />
							</div>
							</div>
						</div>
						<div class="cardUniversitySearchResult--center cardUniversitySearchResult--center--hide" id="cardUniversitySearchResult--centerLong${index}">
							<div class="cardUniversitySearchResultN11--name">${item.University}</div>
							<div class="cardUniversitySearchResultN11--description " >${item.Description}
								<div id="cardUniversitySearchResultArrowLess${index}" class="cardUniversitySearchResultArrowLess">
								<img src="../../Assets/Icons/Chevron-down-solid.svg" />
								</div>
							</div>
						</div>
							<a class="cardUniversitySearchResult--link"
						 href="${item.LinkUniversity}" target='_blank'>Link</a>
					</div>
				</div>
			</div>
            `;
	container.appendChild(node);
};

const card12 = (item, index, container) => {
	let descriptionReduced = reduceString(item.Description);
	let node = document.createElement("div");
	node.innerHTML = `<div id="cardAndMap${index}" class="cardAndMap--container${
		(index + 1) % 2 === 0 ? "Par" : "Impar"
	}">
				<div id="map${index}" class="map"></div>
				<div class="cardUniversitySearchResult--border">
					<div class="cardUniversitySearchResult--container">
						<div class="cardUniversitySearchResult--top">
							<div class="cardUniversitySearchResult--country">${item.Country}</div>
							<img class="cardUniversitySearchResult--fav" src="../../Assets/Icons/heart.svg" alt="fav" />
						</div>
						<div class="cardUniversitySearchResult--center" id="cardUniversitySearchResult--centerShort${index}">
							<div class="cardUniversitySearchResultN12--description " >${descriptionReduced}
							<div id="cardUniversitySearchResultArrowMore${index}" class="cardUniversitySearchResultArrowMore">
							<img src="../../Assets/Icons/Chevron-down-solid.svg" />
							</div>
							</div>
							<div class="cardUniversitySearchResultN12--name">${item.University}</div>
						</div>
						<div class="cardUniversitySearchResult--center cardUniversitySearchResult--center--hide" id="cardUniversitySearchResult--centerLong${index}">
							<div class="cardUniversitySearchResultN12--description " >${item.Description}
								<div id="cardUniversitySearchResultArrowLess${index}" class="cardUniversitySearchResultArrowLess">
								<img src="../../Assets/Icons/Chevron-down-solid.svg" />
								</div>
							</div>
							<div class="cardUniversitySearchResultN12--name">${item.University}</div>
						</div>
							<a class="cardUniversitySearchResult--link"
						 href="${item.LinkUniversity}" target='_blank'>Link</a>
					</div>
				</div>
			</div>
            `;
	container.appendChild(node);
};

const card13 = (item, index, container) => {
	let descriptionReduced = reduceString(item.Description);
	let node = document.createElement("div");
	node.innerHTML = `<div id="cardAndMap${index}" class="cardAndMap--container${
		(index + 1) % 2 === 0 ? "Par" : "Impar"
	}">
				<div id="map${index}" class="map"></div>
				<div class="cardUniversitySearchResult--border">
					<div class="cardUniversitySearchResult--container">
						<div class="cardUniversitySearchResult--top">
							<div class="cardUniversitySearchResult--country">${item.Country}</div>
							<img class="cardUniversitySearchResult--fav" src="../../Assets/Icons/heart.svg" alt="fav" />
						</div>
						<div class="cardUniversitySearchResult--center" id="cardUniversitySearchResult--centerShort${index}">
							<div class="cardUniversitySearchResultN13--name">${item.University}</div>
							<div class="cardUniversitySearchResultN13--description " >${descriptionReduced}
							<div id="cardUniversitySearchResultArrowMore${index}" class="cardUniversitySearchResultArrowMore">
							<img src="../../Assets/Icons/Chevron-down-solid.svg" />
							</div></div>
						</div>
						<div class="cardUniversitySearchResult--center cardUniversitySearchResult--center--hide" id="cardUniversitySearchResult--centerLong${index}">
							<div class="cardUniversitySearchResultN13--name">${item.University}</div>
							<div class="cardUniversitySearchResultN13--description " >${item.Description}
								<div id="cardUniversitySearchResultArrowLess${index}" class="cardUniversitySearchResultArrowLess">
								<img src="../../Assets/Icons/Chevron-down-solid.svg" />
								</div>
							</div>
						</div>
							<a class="cardUniversitySearchResult--link"
						 href="${item.LinkUniversity}" target='_blank'>Link</a>
					</div>
				</div>
			</div>
            `;
	container.appendChild(node);
};

const card14 = (item, index, container) => {
	let descriptionReduced = reduceString(item.Description);
	let node = document.createElement("div");
	node.innerHTML = `<div id="cardAndMap${index}" class="cardAndMap--container${
		(index + 1) % 2 === 0 ? "Par" : "Impar"
	}">
				<div id="map${index}" class="map"></div>
				<div class="cardUniversitySearchResult--border">
					<div class="cardUniversitySearchResult--container">
						<div class="cardUniversitySearchResult--top">
							<div class="cardUniversitySearchResult--country">${item.Country}</div>
							<img class="cardUniversitySearchResult--fav" src="../../Assets/Icons/heart.svg" alt="fav" />
						</div>
						<div class="cardUniversitySearchResult--center" id="cardUniversitySearchResult--centerShort${index}">
							<div class="cardUniversitySearchResultN14--description " >${descriptionReduced}
							<div id="cardUniversitySearchResultArrowMore${index}" class="cardUniversitySearchResultArrowMore">
							<img src="../../Assets/Icons/Chevron-down-solid.svg" />
							</div></div>
							<div class="cardUniversitySearchResultN14--name">${item.University}</div>
						</div>
						<div class="cardUniversitySearchResult--center cardUniversitySearchResult--center--hide" id="cardUniversitySearchResult--centerLong${index}">
							<div class="cardUniversitySearchResultN14--description " >${item.Description}
								<div id="cardUniversitySearchResultArrowLess${index}" class="cardUniversitySearchResultArrowLess">
								<img src="../../Assets/Icons/Chevron-down-solid.svg" />
								</div>
							</div>
							<div class="cardUniversitySearchResultN14--name">${item.University}</div>
						</div>
							<a class="cardUniversitySearchResult--link"
						 href="${item.LinkUniversity}" target='_blank'>Link</a>
					
					</div>
				</div>
			</div>
            `;
	container.appendChild(node);
};
