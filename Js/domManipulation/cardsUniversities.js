import { reduceString } from "../functions/reduceString.js";

export const handleCardsByName = (item, index, container) => {
	if (item.University.length <= 12) return card9(item, index, container);
	if (item.University.length === 13) {
		return Math.random() < 0.5
			? card12(item, index, container)
			: card14(item, index, container);
	}

	if (item.University.length === 14) return card8(item, index, container);
	if (item.University.length === 15) return card10(item, index, container);
	if (item.University.length === 16) {
		return Math.random() < 0.5
			? card5(item, index, container)
			: card6(item, index, container);
	}
	if (item.University.length === 17) return card2(item, index, container);
	if (item.University.length === 18) return card7(item, index, container);
	if (item.University.length === 19) return card3(item, index, container);
	if (item.University.length === 20) return card4(item, index, container);
	if (item.University.length > 20 && item.University.length <= 30)
		return card1(item, index, container);
	if (item.University.length > 30 && item.University.length <= 60)
		return card11(item, index, container);
	if (item.University.length > 60) return card13(item, index, container);
};

const card1 = (item, index, container) => {
	let descriptionReduced = reduceString(item.AboutUniversity);
	let node = document.createElement("div");
	node.innerHTML = `<div id="cardAndMap${
		item.PropertyID
	}" class="cardAndMap--container${(index + 1) % 2 === 0 ? "Par" : "Impar"}">
		<div id="containerResultHover${item.PropertyID}" class="containerResultsHover">
				<div id="map${index}" class="map"></div>
				<div class="cardUniversitySearchResultInfoHover${
					(index + 1) % 2 === 0 ? "Par" : "Impar"
				}" id="cardUniversitySearchResultInfoHover${index}">
				<div class="cardUniversitySearchResultInfoContainerOne">
					<img  class="cardUniversitySearchResultInfoHover--iconUni" src="../../institution.svg"/>
					<div class="cardUniversitySearchResultInfoHover--type">${item.Institution}</div>
					</div>
					<div class="cardUniversitySearchResultInfoContainerTwo">
					<img  class="cardUniversitySearchResultInfoHover--iconUni" src="../../streets.svg"/>
					<div class="cardUniversitySearchResultInfoHover--street">${item.Streets}</div>
					</div>
				</div>
				</div>
					<div class="cardUniversitySearchResult--container cardUniversitySearchResult${
						(index + 1) % 2 === 0 ? "Par" : "Impar"
					}">
						<div class="cardUniversitySearchResult--top">
							<div class="cardUniversitySearchResult--country">${item.Country}</div>
							<svg fill="black" class="cardUniversitySearchResult--fav" id="cardUniversitySearchResult--fav--grey${index}" viewBox="0 0 24 24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"><path></svg>
							<svg class="cardUniversitySearchResult--fav hideBox" id="cardUniversitySearchResult--fav--red${index}" fill="#ed4956"  viewBox="0 0 48 48"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"><path><svg></svg>
						</div>
						<div class="cardUniversitySearchResult--center" id="cardUniversitySearchResult--centerShort${index}">
							<div class="cardUniversitySearchResultN1--name">${item.University}</div>
								<div class="cardUniversitySearchResultN1--description " >${descriptionReduced}
								<div id="cardUniversitySearchResultArrowMore${index}" class="cardUniversitySearchResultArrowMore">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#999" ><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>
								</div>
							</div>
						</div>
						<div class="cardUniversitySearchResult--center cardUniversitySearchResult--center--hide" id="cardUniversitySearchResult--centerLong${index}">
							<div class="cardUniversitySearchResultN1--name">${item.University}</div>
							<div class="cardUniversitySearchResultN1--description" >${item.AboutUniversity}
								<div id="cardUniversitySearchResultArrowLess${index}" class="cardUniversitySearchResultArrowLess">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#999" ><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>
								</div>
							</div>
						</div>
							<a class="cardUniversitySearchResult--link"
						 href="${item.Link}" target='_blank'>Link</a>
					</div>
			</div>
            `;
	container.appendChild(node);
	node.classList.add("containerGeneratedMapAndCard");
};

const card2 = (item, index, container) => {
	let descriptionReduced = reduceString(item.AboutUniversity);
	let node = document.createElement("div");
	node.innerHTML = `<div id="cardAndMap${
		item.PropertyID
	}" class="cardAndMap--container${(index + 1) % 2 === 0 ? "Par" : "Impar"}">
		<div id="containerResultHover${item.PropertyID}" class="containerResultsHover">
				<div id="map${index}" class="map"></div>
				<div class="cardUniversitySearchResultInfoHover${
					(index + 1) % 2 === 0 ? "Par" : "Impar"
				}" id="cardUniversitySearchResultInfoHover${index}">
				<div class="cardUniversitySearchResultInfoContainerOne">
					<img  class="cardUniversitySearchResultInfoHover--iconUni" src="../../institution.svg"/>
					<div class="cardUniversitySearchResultInfoHover--type">${item.Institution}</div>
					</div>
					<div class="cardUniversitySearchResultInfoContainerTwo">
					<img  class="cardUniversitySearchResultInfoHover--iconUni" src="../../streets.svg"/>
					<div class="cardUniversitySearchResultInfoHover--street">${item.Streets}</div>
					</div>
				</div>
				</div>
					<div class="cardUniversitySearchResult--container cardUniversitySearchResult${
						(index + 1) % 2 === 0 ? "Par" : "Impar"
					}">
						<div class="cardUniversitySearchResult--top">
							<div class="cardUniversitySearchResult--country">${item.Country}</div>
							<svg fill="black" class="cardUniversitySearchResult--fav" id="cardUniversitySearchResult--fav--grey${index}" viewBox="0 0 24 24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"><path></svg>
							<svg class="cardUniversitySearchResult--fav hideBox" id="cardUniversitySearchResult--fav--red${index}" fill="#ed4956"  viewBox="0 0 48 48"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"><path><svg></svg>
						</div>
						<div class="cardUniversitySearchResult--center" id="cardUniversitySearchResult--centerShort${index}">
							<div class="cardUniversitySearchResultN2--name">${item.University}</div>
							<div class="cardUniversitySearchResultN2--description " >${descriptionReduced}
							<div id="cardUniversitySearchResultArrowMore${index}" class="cardUniversitySearchResultArrowMore">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#999" ><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>
							</div>
							</div>
						</div>
						<div class="cardUniversitySearchResult--center cardUniversitySearchResult--center--hide" id="cardUniversitySearchResult--centerLong${index}">
							<div class="cardUniversitySearchResultN2--name">${item.University}</div>
							<div class="cardUniversitySearchResultN2--description" >${item.AboutUniversity}
								<div id="cardUniversitySearchResultArrowLess${index}" class="cardUniversitySearchResultArrowLess">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#999" ><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>
								</div>
							</div>
						</div>
							<a class="cardUniversitySearchResult--link"
						 href="${item.Link}" target='_blank'>Link</a>
					</div>
			</div>
            `;
	container.appendChild(node);
	node.classList.add("containerGeneratedMapAndCard");
};

const card3 = (item, index, container) => {
	let descriptionReduced = reduceString(item.AboutUniversity);
	let node = document.createElement("div");
	node.innerHTML = `<div id="cardAndMap${
		item.PropertyID
	}" class="cardAndMap--container${(index + 1) % 2 === 0 ? "Par" : "Impar"}">
		<div id="containerResultHover${item.PropertyID}" class="containerResultsHover">
				<div id="map${index}" class="map"></div>
		<div class="cardUniversitySearchResultInfoHover${
			(index + 1) % 2 === 0 ? "Par" : "Impar"
		}" id="cardUniversitySearchResultInfoHover${index}">
		<div class="cardUniversitySearchResultInfoContainerOne">
					<img  class="cardUniversitySearchResultInfoHover--iconUni" src="../../institution.svg"/>
					<div class="cardUniversitySearchResultInfoHover--type">${item.Institution}</div>
					</div>
					<div class="cardUniversitySearchResultInfoContainerTwo">
					<img  class="cardUniversitySearchResultInfoHover--iconUni" src="../../streets.svg"/>
					<div class="cardUniversitySearchResultInfoHover--street">${item.Streets}</div>
					</div>
				</div>
				</div>
				<div class="cardUniversitySearchResult--container cardUniversitySearchResult${
					(index + 1) % 2 === 0 ? "Par" : "Impar"
				}">
					<div class="cardUniversitySearchResult--top">
						<div class="cardUniversitySearchResult--country">${item.Country}</div>
						<svg fill="black" class="cardUniversitySearchResult--fav" id="cardUniversitySearchResult--fav--grey${index}" viewBox="0 0 24 24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"><path></svg>
							<svg class="cardUniversitySearchResult--fav hideBox" id="cardUniversitySearchResult--fav--red${index}" fill="#ed4956"  viewBox="0 0 48 48"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"><path><svg></svg>
					</div>
					<div class="cardUniversitySearchResult--center" id="cardUniversitySearchResult--centerShort${index}">
						<div class="cardUniversitySearchResultN3--description " >${descriptionReduced}
							<div id="cardUniversitySearchResultArrowMore${index}" class="cardUniversitySearchResultArrowMore">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#999" ><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>
							</div>
						</div>
						<div class="cardUniversitySearchResultN3--name">${item.University}</div>
					</div>
						<div class="cardUniversitySearchResult--center cardUniversitySearchResult--center--hide" id="cardUniversitySearchResult--centerLong${index}">
							<div class="cardUniversitySearchResultN3--description" >${item.AboutUniversity}
								<div id="cardUniversitySearchResultArrowLess${index}" class="cardUniversitySearchResultArrowLess">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#999" ><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>
								</div>
							</div>
							<div class="cardUniversitySearchResultN3--name">${item.University}</div>
						</div>
					<a class="cardUniversitySearchResult--link" href="${item.Link}">Link</a>
				</div>
			</div> 
		</div> 
            `;
	container.appendChild(node);
	node.classList.add("containerGeneratedMapAndCard");
};

const card4 = (item, index, container) => {
	let descriptionReduced = reduceString(item.AboutUniversity);
	let node = document.createElement("div");
	node.innerHTML = `<div id="cardAndMap${
		item.PropertyID
	}" class="cardAndMap--container${(index + 1) % 2 === 0 ? "Par" : "Impar"}">
		<div id="containerResultHover${item.PropertyID}" class="containerResultsHover">
				<div id="map${index}" class="map"></div>
		<div class="cardUniversitySearchResultInfoHover${
			(index + 1) % 2 === 0 ? "Par" : "Impar"
		}" id="cardUniversitySearchResultInfoHover${index}">
		<div class="cardUniversitySearchResultInfoContainerOne">
					<img  class="cardUniversitySearchResultInfoHover--iconUni" src="../../institution.svg"/>
					<div class="cardUniversitySearchResultInfoHover--type">${item.Institution}</div>
					</div>
					<div class="cardUniversitySearchResultInfoContainerTwo">
					<img  class="cardUniversitySearchResultInfoHover--iconUni" src="../../streets.svg"/>
					<div class="cardUniversitySearchResultInfoHover--street">${item.Streets}</div>
					</div>
				</div>
				</div>
					<div class="cardUniversitySearchResult--container cardUniversitySearchResult${
						(index + 1) % 2 === 0 ? "Par" : "Impar"
					}">
						<div class="cardUniversitySearchResult--top">
							<div class="cardUniversitySearchResult--country">${item.Country}</div>
							<svg fill="black" class="cardUniversitySearchResult--fav" id="cardUniversitySearchResult--fav--grey${index}" viewBox="0 0 24 24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"><path></svg>
							<svg class="cardUniversitySearchResult--fav hideBox" id="cardUniversitySearchResult--fav--red${index}" fill="#ed4956"  viewBox="0 0 48 48"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"><path><svg></svg>
						</div>
						<div class="cardUniversitySearchResult--center" id="cardUniversitySearchResult--centerShort${index}">
							<div class="cardUniversitySearchResultN4--name">${item.University}</div>
							<div class="cardUniversitySearchResultN4--description " >${descriptionReduced}
								<div id="cardUniversitySearchResultArrowMore${index}" class="cardUniversitySearchResultArrowMore">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#999" ><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>
								</div>
							</div>
						</div>
						<div class="cardUniversitySearchResult--center cardUniversitySearchResult--center--hide" id="cardUniversitySearchResult--centerLong${index}">
							<div class="cardUniversitySearchResultN4--name">${item.University}</div>
							<div class="cardUniversitySearchResultN4--description" >${item.AboutUniversity}
								<div id="cardUniversitySearchResultArrowLess${index}" class="cardUniversitySearchResultArrowLess">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#999" ><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>
								</div>
							</div>
						</div>
							<a class="cardUniversitySearchResult--link"
						 href="${item.Link}" target='_blank'>Link</a>
					</div>
			</div>
            `;
	container.appendChild(node);
	node.classList.add("containerGeneratedMapAndCard");
};

const card5 = (item, index, container) => {
	let descriptionReduced = reduceString(item.AboutUniversity);
	let node = document.createElement("div");
	node.innerHTML = `<div id="cardAndMap${
		item.PropertyID
	}" class="cardAndMap--container${(index + 1) % 2 === 0 ? "Par" : "Impar"}">
		<div id="containerResultHover${item.PropertyID}" class="containerResultsHover">
				<div id="map${index}" class="map"></div>
		<div class="cardUniversitySearchResultInfoHover${
			(index + 1) % 2 === 0 ? "Par" : "Impar"
		}" id="cardUniversitySearchResultInfoHover${index}">
		<div class="cardUniversitySearchResultInfoContainerOne">
					<img  class="cardUniversitySearchResultInfoHover--iconUni" src="../../institution.svg"/>
					<div class="cardUniversitySearchResultInfoHover--type">${item.Institution}</div>
					</div>
					<div class="cardUniversitySearchResultInfoContainerTwo">
					<img  class="cardUniversitySearchResultInfoHover--iconUni" src="../../streets.svg"/>
					<div class="cardUniversitySearchResultInfoHover--street">${item.Streets}</div>
					</div>
				</div>
				</div>
				<div class="cardUniversitySearchResult--container cardUniversitySearchResult${
					(index + 1) % 2 === 0 ? "Par" : "Impar"
				}">
					<div class="cardUniversitySearchResult--top">
						<div class="cardUniversitySearchResult--country">${item.Country}</div>
						<svg fill="black" class="cardUniversitySearchResult--fav" id="cardUniversitySearchResult--fav--grey${index}" viewBox="0 0 24 24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"><path></svg>
							<svg class="cardUniversitySearchResult--fav hideBox" id="cardUniversitySearchResult--fav--red${index}" fill="#ed4956"  viewBox="0 0 48 48"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"><path><svg></svg>
					</div>
					<div class="cardUniversitySearchResult--center" id="cardUniversitySearchResult--centerShort${index}">
						<div class="cardUniversitySearchResultN5--name">${item.University}</div>
						<div class="cardUniversitySearchResultN5--description " >${descriptionReduced}
							<div id="cardUniversitySearchResultArrowMore${index}" class="cardUniversitySearchResultArrowMore">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#999" ><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>
							</div>
						</div>
					</div>
					<div class="cardUniversitySearchResult--center cardUniversitySearchResult--center--hide" id="cardUniversitySearchResult--centerLong${index}">
						<div class="cardUniversitySearchResultN5--name">${item.University}</div>
						<div class="cardUniversitySearchResultN5--description" >${item.AboutUniversity}
								<div id="cardUniversitySearchResultArrowLess${index}" class="cardUniversitySearchResultArrowLess">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#999" ><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>
								</div>
						</div>
					</div>
					<a class="cardUniversitySearchResult--link" href="${item.Link}">Link</a>
				</div>
		</div>
            `;
	container.appendChild(node);
	node.classList.add("containerGeneratedMapAndCard");
};

const card6 = (item, index, container) => {
	let descriptionReduced = reduceString(item.AboutUniversity);
	let node = document.createElement("div");
	node.innerHTML = `<div id="cardAndMap${
		item.PropertyID
	}" class="cardAndMap--container${(index + 1) % 2 === 0 ? "Par" : "Impar"}">
		<div id="containerResultHover${item.PropertyID}" class="containerResultsHover">
				<div id="map${index}" class="map"></div>
		<div class="cardUniversitySearchResultInfoHover${
			(index + 1) % 2 === 0 ? "Par" : "Impar"
		}" id="cardUniversitySearchResultInfoHover${index}">
		<div class="cardUniversitySearchResultInfoContainerOne">
					<img  class="cardUniversitySearchResultInfoHover--iconUni" src="../../institution.svg"/>
					<div class="cardUniversitySearchResultInfoHover--type">${item.Institution}</div>
					</div>
					<div class="cardUniversitySearchResultInfoContainerTwo">
					<img  class="cardUniversitySearchResultInfoHover--iconUni" src="../../streets.svg"/>
					<div class="cardUniversitySearchResultInfoHover--street">${item.Streets}</div>
					</div>
				</div>
				</div>
					<div class="cardUniversitySearchResult--container cardUniversitySearchResult${
						(index + 1) % 2 === 0 ? "Par" : "Impar"
					}">
						<div class="cardUniversitySearchResult--top">
							<div class="cardUniversitySearchResult--country">${item.Country}</div>
							<svg fill="black" class="cardUniversitySearchResult--fav" id="cardUniversitySearchResult--fav--grey${index}" viewBox="0 0 24 24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"><path></svg>
							<svg class="cardUniversitySearchResult--fav hideBox" id="cardUniversitySearchResult--fav--red${index}" fill="#ed4956"  viewBox="0 0 48 48"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"><path><svg></svg>
						</div>
						<div class="cardUniversitySearchResult--center" id="cardUniversitySearchResult--centerShort${index}">
							<div class="cardUniversitySearchResultN6--name">${item.University}</div>
							<div class="cardUniversitySearchResultN6--description " >${descriptionReduced}
								<div id="cardUniversitySearchResultArrowMore${index}" class="cardUniversitySearchResultArrowMore">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#999" ><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>
								</div>
							</div>
						</div>
						<div class="cardUniversitySearchResult--center cardUniversitySearchResult--center--hide" id="cardUniversitySearchResult--centerLong${index}">
							<div class="cardUniversitySearchResultN6--name">${item.University}</div>
							<div class="cardUniversitySearchResultN6--description" >${item.AboutUniversity}
								<div id="cardUniversitySearchResultArrowLess${index}" class="cardUniversitySearchResultArrowLess">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#999" ><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>
								</div>
							</div>
						</div>
							<a class="cardUniversitySearchResult--link"
						 href="${item.Link}" target='_blank'>Link</a>
					</div>
			</div>
            `;
	container.appendChild(node);
	node.classList.add("containerGeneratedMapAndCard");
};

const card7 = (item, index, container) => {
	let descriptionReduced = reduceString(item.AboutUniversity);
	let node = document.createElement("div");
	node.innerHTML = `<div id="cardAndMap${
		item.PropertyID
	}" class="cardAndMap--container${(index + 1) % 2 === 0 ? "Par" : "Impar"}">
		<div id="containerResultHover${item.PropertyID}" class="containerResultsHover">
				<div id="map${index}" class="map"></div>
				<div class="cardUniversitySearchResultInfoHover${
					(index + 1) % 2 === 0 ? "Par" : "Impar"
				}" id="cardUniversitySearchResultInfoHover${index}">
				<div class="cardUniversitySearchResultInfoContainerOne">
					<img  class="cardUniversitySearchResultInfoHover--iconUni" src="../../institution.svg"/>
					<div class="cardUniversitySearchResultInfoHover--type">${item.Institution}</div>
					</div>
					<div class="cardUniversitySearchResultInfoContainerTwo">
					<img  class="cardUniversitySearchResultInfoHover--iconUni" src="../../streets.svg"/>
					<div class="cardUniversitySearchResultInfoHover--street">${item.Streets}</div>
					</div>
				</div>
				</div>
					<div class="cardUniversitySearchResult--container cardUniversitySearchResult${
						(index + 1) % 2 === 0 ? "Par" : "Impar"
					}">
						<div class="cardUniversitySearchResult--top">
							<div class="cardUniversitySearchResult--country">${item.Country}</div>
							<svg fill="black" class="cardUniversitySearchResult--fav" id="cardUniversitySearchResult--fav--grey${index}" viewBox="0 0 24 24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"><path></svg>
							<svg class="cardUniversitySearchResult--fav hideBox" id="cardUniversitySearchResult--fav--red${index}" fill="#ed4956"  viewBox="0 0 48 48"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"><path><svg></svg>
						</div>
						<div class="cardUniversitySearchResult--center" id="cardUniversitySearchResult--centerShort${index}">
							<div class="cardUniversitySearchResultN7--name">${item.University}</div>
							<div class="cardUniversitySearchResultN7--description " >${descriptionReduced}
								<div id="cardUniversitySearchResultArrowMore${index}" class="cardUniversitySearchResultArrowMore">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#999" ><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>
								</div>
							</div>
						</div>
						<div class="cardUniversitySearchResult--center cardUniversitySearchResult--center--hide" id="cardUniversitySearchResult--centerLong${index}">
							<div class="cardUniversitySearchResultN7--name">${item.University}</div>
							<div class="cardUniversitySearchResultN7--description" >${item.AboutUniversity}
								<div id="cardUniversitySearchResultArrowLess${index}" class="cardUniversitySearchResultArrowLess">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#999" ><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>
								</div>
							</div>
						</div>
							<a class="cardUniversitySearchResult--link"
						 href="${item.Link}" target='_blank'>Link</a>
					</div>
			</div>
            `;
	container.appendChild(node);
	node.classList.add("containerGeneratedMapAndCard");
};

const card8 = (item, index, container) => {
	let descriptionReduced = reduceString(item.AboutUniversity);
	let node = document.createElement("div");
	node.innerHTML = `<div id="cardAndMap${
		item.PropertyID
	}" class="cardAndMap--container${(index + 1) % 2 === 0 ? "Par" : "Impar"}">
		<div id="containerResultHover${item.PropertyID}" class="containerResultsHover">
				<div id="map${index}" class="map"></div>
		<div class="cardUniversitySearchResultInfoHover${
			(index + 1) % 2 === 0 ? "Par" : "Impar"
		}" id="cardUniversitySearchResultInfoHover${index}">
		<div class="cardUniversitySearchResultInfoContainerOne">
					<img  class="cardUniversitySearchResultInfoHover--iconUni" src="../../institution.svg"/>
					<div class="cardUniversitySearchResultInfoHover--type">${item.Institution}</div>
					</div>
					<div class="cardUniversitySearchResultInfoContainerTwo">
					<img  class="cardUniversitySearchResultInfoHover--iconUni" src="../../streets.svg"/>
					<div class="cardUniversitySearchResultInfoHover--street">${item.Streets}</div>
					</div>
				</div>
				</div>
					<div class="cardUniversitySearchResult--container cardUniversitySearchResult${
						(index + 1) % 2 === 0 ? "Par" : "Impar"
					}">
						<div class="cardUniversitySearchResult--top">
							<div class="cardUniversitySearchResult--country">${item.Country}</div>
							<svg fill="black" class="cardUniversitySearchResult--fav" id="cardUniversitySearchResult--fav--grey${index}" viewBox="0 0 24 24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"><path></svg>
							<svg class="cardUniversitySearchResult--fav hideBox" id="cardUniversitySearchResult--fav--red${index}" fill="#ed4956"  viewBox="0 0 48 48"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"><path><svg></svg>
						</div>
						<div class="cardUniversitySearchResult--center" id="cardUniversitySearchResult--centerShort${index}">
							<div class="cardUniversitySearchResultN8--description " >${descriptionReduced}
								<div id="cardUniversitySearchResultArrowMore${index}" class="cardUniversitySearchResultArrowMore">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#999" ><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>
								</div>
							</div>
							<div class="cardUniversitySearchResultN8--name">${item.University}</div>
						</div>
						<div class="cardUniversitySearchResult--center cardUniversitySearchResult--center--hide" id="cardUniversitySearchResult--centerLong${index}">
							<div class="cardUniversitySearchResultN8--description" >${item.AboutUniversity}
								<div id="cardUniversitySearchResultArrowLess${index}" class="cardUniversitySearchResultArrowLess">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#999" ><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>
								</div>
							</div>
							<div class="cardUniversitySearchResultN8--name">${item.University}</div>
						</div>
							<a class="cardUniversitySearchResult--link"
						 href="${item.Link}" target='_blank'>Link</a>
					</div>
			</div>
            `;
	container.appendChild(node);
	node.classList.add("containerGeneratedMapAndCard");
};

const card9 = (item, index, container) => {
	let descriptionReduced = reduceString(item.AboutUniversity);
	let node = document.createElement("div");
	node.innerHTML = `<div id="cardAndMap${
		item.PropertyID
	}" class="cardAndMap--container${(index + 1) % 2 === 0 ? "Par" : "Impar"}">
		<div id="containerResultHover${item.PropertyID}" class="containerResultsHover">
				<div id="map${index}" class="map"></div>
		<div class="cardUniversitySearchResultInfoHover${
			(index + 1) % 2 === 0 ? "Par" : "Impar"
		}" id="cardUniversitySearchResultInfoHover${index}">
		<div class="cardUniversitySearchResultInfoContainerOne">
					<img  class="cardUniversitySearchResultInfoHover--iconUni" src="../../institution.svg"/>
					<div class="cardUniversitySearchResultInfoHover--type">${item.Institution}</div>
					</div>
					<div class="cardUniversitySearchResultInfoContainerTwo">
					<img  class="cardUniversitySearchResultInfoHover--iconUni" src="../../streets.svg"/>
					<div class="cardUniversitySearchResultInfoHover--street">${item.Streets}</div>
					</div>
				</div>
				</div>
					<div class="cardUniversitySearchResult--container cardUniversitySearchResult${
						(index + 1) % 2 === 0 ? "Par" : "Impar"
					}">
						<div class="cardUniversitySearchResult--top">
							<div class="cardUniversitySearchResult--country">${item.Country}</div>
							<svg fill="black" class="cardUniversitySearchResult--fav" id="cardUniversitySearchResult--fav--grey${index}" viewBox="0 0 24 24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"><path></svg>
							<svg class="cardUniversitySearchResult--fav hideBox" id="cardUniversitySearchResult--fav--red${index}" fill="#ed4956"  viewBox="0 0 48 48"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"><path><svg></svg>
						</div>
						<div class="cardUniversitySearchResult--center" id="cardUniversitySearchResult--centerShort${index}">
							<div class="cardUniversitySearchResultN9--description " >${descriptionReduced}
								<div id="cardUniversitySearchResultArrowMore${index}" class="cardUniversitySearchResultArrowMore">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#999" ><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>
								</div>
							</div>
							<div class="cardUniversitySearchResultN9--name">${item.University}</div>
						</div>
						<div class="cardUniversitySearchResult--center cardUniversitySearchResult--center--hide" id="cardUniversitySearchResult--centerLong${index}">
							<div class="cardUniversitySearchResultN9--description" >${item.AboutUniversity}
								<div id="cardUniversitySearchResultArrowLess${index}" class="cardUniversitySearchResultArrowLess">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#999" ><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>
								</div>
							</div>
							<div class="cardUniversitySearchResultN9--name">${item.University}</div>
						</div>
							<a class="cardUniversitySearchResult--link"
						 href="${item.Link}" target='_blank'>Link</a>
					</div>
			</div>
            `;
	container.appendChild(node);
	node.classList.add("containerGeneratedMapAndCard");
};

const card10 = (item, index, container) => {
	let descriptionReduced = reduceString(item.AboutUniversity);
	let node = document.createElement("div");
	node.innerHTML = `<div id="cardAndMap${
		item.PropertyID
	}" class="cardAndMap--container${(index + 1) % 2 === 0 ? "Par" : "Impar"}">
		<div id="containerResultHover${item.PropertyID}" class="containerResultsHover">
				<div id="map${index}" class="map"></div>
		<div class="cardUniversitySearchResultInfoHover${
			(index + 1) % 2 === 0 ? "Par" : "Impar"
		}" id="cardUniversitySearchResultInfoHover${index}">
		<div class="cardUniversitySearchResultInfoContainerOne">
					<img  class="cardUniversitySearchResultInfoHover--iconUni" src="../../institution.svg"/>
					<div class="cardUniversitySearchResultInfoHover--type">${item.Institution}</div>
					</div>
					<div class="cardUniversitySearchResultInfoContainerTwo">
					<img  class="cardUniversitySearchResultInfoHover--iconUni" src="../../streets.svg"/>
					<div class="cardUniversitySearchResultInfoHover--street">${item.Streets}</div>
					</div>
				</div>
				</div>
					<div class="cardUniversitySearchResult--container cardUniversitySearchResult${
						(index + 1) % 2 === 0 ? "Par" : "Impar"
					}">
						<div class="cardUniversitySearchResult--top">
							<div class="cardUniversitySearchResult--country">${item.Country}</div>
							<svg fill="black" class="cardUniversitySearchResult--fav" id="cardUniversitySearchResult--fav--grey${index}" viewBox="0 0 24 24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"><path></svg>
							<svg class="cardUniversitySearchResult--fav hideBox" id="cardUniversitySearchResult--fav--red${index}" fill="#ed4956"  viewBox="0 0 48 48"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"><path><svg></svg>
						</div>
						<div class="cardUniversitySearchResult--center" id="cardUniversitySearchResult--centerShort${index}">
							<div class="cardUniversitySearchResultN10--description " >${descriptionReduced}
							<div id="cardUniversitySearchResultArrowMore${index}" class="cardUniversitySearchResultArrowMore">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#999" ><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>
							</div>
							</div>
							<div class="cardUniversitySearchResultN10--name">${item.University}</div>
						</div>
						<div class="cardUniversitySearchResult--center cardUniversitySearchResult--center--hide" id="cardUniversitySearchResult--centerLong${index}">
							<div class="cardUniversitySearchResultN10--description" >${item.AboutUniversity}
								<div id="cardUniversitySearchResultArrowLess${index}" class="cardUniversitySearchResultArrowLess">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#999" ><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>
								</div>
							</div>
							<div class="cardUniversitySearchResultN10--name">${item.University}</div>
						</div>
							<a class="cardUniversitySearchResult--link"
						 href="${item.Link}" target='_blank'>Link</a>
					</div>
			</div>
            `;
	container.appendChild(node);
	node.classList.add("containerGeneratedMapAndCard");
};

const card11 = (item, index, container) => {
	let descriptionReduced = reduceString(item.AboutUniversity);
	let node = document.createElement("div");
	node.innerHTML = `<div id="cardAndMap${
		item.PropertyID
	}" class="cardAndMap--container${(index + 1) % 2 === 0 ? "Par" : "Impar"}">
		<div id="containerResultHover${item.PropertyID}" class="containerResultsHover">
				<div id="map${index}" class="map"></div>
				<div class="cardUniversitySearchResultInfoHover${
					(index + 1) % 2 === 0 ? "Par" : "Impar"
				}" id="cardUniversitySearchResultInfoHover${index}">
				<div class="cardUniversitySearchResultInfoContainerOne">
					<img  class="cardUniversitySearchResultInfoHover--iconUni" src="../../institution.svg"/>
					<div class="cardUniversitySearchResultInfoHover--type">${item.Institution}</div>
					</div>
					<div class="cardUniversitySearchResultInfoContainerTwo">
					<img  class="cardUniversitySearchResultInfoHover--iconUni" src="../../streets.svg"/>
					<div class="cardUniversitySearchResultInfoHover--street">${item.Streets}</div>
					</div>
				</div>
				</div>
					<div class="cardUniversitySearchResult--container cardUniversitySearchResult${
						(index + 1) % 2 === 0 ? "Par" : "Impar"
					}">
						<div class="cardUniversitySearchResult--top">
							<div class="cardUniversitySearchResult--country">${item.Country}</div>
							<svg fill="black" class="cardUniversitySearchResult--fav" id="cardUniversitySearchResult--fav--grey${index}" viewBox="0 0 24 24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"><path></svg>
							<svg class="cardUniversitySearchResult--fav hideBox" id="cardUniversitySearchResult--fav--red${index}" fill="#ed4956"  viewBox="0 0 48 48"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"><path><svg></svg>
						</div>
						<div class="cardUniversitySearchResult--center" id="cardUniversitySearchResult--centerShort${index}">
						<div class="cardUniversitySearchResultN11--name">${item.University}</div>
							<div class="cardUniversitySearchResultN11--description " >${descriptionReduced}
							<div id="cardUniversitySearchResultArrowMore${index}" class="cardUniversitySearchResultArrowMore">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#999" ><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>
							</div>
							</div>
						</div>
						<div class="cardUniversitySearchResult--center cardUniversitySearchResult--center--hide" id="cardUniversitySearchResult--centerLong${index}">
							<div class="cardUniversitySearchResultN11--name">${item.University}</div>
							<div class="cardUniversitySearchResultN11--description " >${
								item.AboutUniversity
							}
								<div id="cardUniversitySearchResultArrowLess${index}" class="cardUniversitySearchResultArrowLess">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#999" ><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>
								</div>
							</div>
						</div>
							<a class="cardUniversitySearchResult--link"
						 href="${item.Link}" target='_blank'>Link</a>
					</div>
			</div>
            `;
	container.appendChild(node);
	node.classList.add("containerGeneratedMapAndCard");
};

const card12 = (item, index, container) => {
	let descriptionReduced = reduceString(item.AboutUniversity);
	let node = document.createElement("div");
	node.innerHTML = `<div id="cardAndMap${
		item.PropertyID
	}" class="cardAndMap--container${(index + 1) % 2 === 0 ? "Par" : "Impar"}">
		<div id="containerResultHover${item.PropertyID}" class="containerResultsHover">
				<div id="map${index}" class="map"></div>
				<div class="cardUniversitySearchResultInfoHover${
					(index + 1) % 2 === 0 ? "Par" : "Impar"
				}" id="cardUniversitySearchResultInfoHover${index}">
				<div class="cardUniversitySearchResultInfoContainerOne">
					<img  class="cardUniversitySearchResultInfoHover--iconUni" src="../../institution.svg"/>
					<div class="cardUniversitySearchResultInfoHover--type">${item.Institution}</div>
					</div>
					<div class="cardUniversitySearchResultInfoContainerTwo">
					<img  class="cardUniversitySearchResultInfoHover--iconUni" src="../../streets.svg"/>
					<div class="cardUniversitySearchResultInfoHover--street">${item.Streets}</div>
					</div>
				</div>
				</div>
					<div class="cardUniversitySearchResult--container cardUniversitySearchResult${
						(index + 1) % 2 === 0 ? "Par" : "Impar"
					}">
						<div class="cardUniversitySearchResult--top">
							<div class="cardUniversitySearchResult--country">${item.Country}</div>
							<svg fill="black" class="cardUniversitySearchResult--fav" id="cardUniversitySearchResult--fav--grey${index}" viewBox="0 0 24 24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"><path></svg>
							<svg class="cardUniversitySearchResult--fav hideBox" id="cardUniversitySearchResult--fav--red${index}" fill="#ed4956"  viewBox="0 0 48 48"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"><path><svg></svg>
						</div>
						<div class="cardUniversitySearchResult--center" id="cardUniversitySearchResult--centerShort${index}">
							<div class="cardUniversitySearchResultN12--description " >${descriptionReduced}
							<div id="cardUniversitySearchResultArrowMore${index}" class="cardUniversitySearchResultArrowMore">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#999" ><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>
							</div>
							</div>
							<div class="cardUniversitySearchResultN12--name">${item.University}</div>
						</div>
						<div class="cardUniversitySearchResult--center cardUniversitySearchResult--center--hide" id="cardUniversitySearchResult--centerLong${index}">
							<div class="cardUniversitySearchResultN12--description " >${
								item.AboutUniversity
							}
								<div id="cardUniversitySearchResultArrowLess${index}" class="cardUniversitySearchResultArrowLess">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#999" ><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>
								</div>
							</div>
							<div class="cardUniversitySearchResultN12--name">${item.University}</div>
						</div>
							<a class="cardUniversitySearchResult--link"
						 href="${item.Link}" target='_blank'>Link</a>
					</div>
			</div>
            `;
	container.appendChild(node);
	node.classList.add("containerGeneratedMapAndCard");
};

const card13 = (item, index, container) => {
	let descriptionReduced = reduceString(item.AboutUniversity);
	let node = document.createElement("div");
	node.innerHTML = `<div id="cardAndMap${
		item.PropertyID
	}" class="cardAndMap--container${(index + 1) % 2 === 0 ? "Par" : "Impar"}">
		<div id="containerResultHover${item.PropertyID}" class="containerResultsHover">
			<div id="map${index}" class="map"></div>
				<div class="cardUniversitySearchResultInfoHover${
					(index + 1) % 2 === 0 ? "Par" : "Impar"
				}" id="cardUniversitySearchResultInfoHover${index}">
				<div class="cardUniversitySearchResultInfoContainerOne">
					<img  class="cardUniversitySearchResultInfoHover--iconUni" src="../../institution.svg"/>
					<div class="cardUniversitySearchResultInfoHover--type">${item.Institution}</div>
					</div>
					<div class="cardUniversitySearchResultInfoContainerTwo">
					<img  class="cardUniversitySearchResultInfoHover--iconUni" src="../../streets.svg"/>
					<div class="cardUniversitySearchResultInfoHover--street">${item.Streets}</div>
					</div>
				</div>
				</div>
					<div class="cardUniversitySearchResult--container cardUniversitySearchResult${
						(index + 1) % 2 === 0 ? "Par" : "Impar"
					}">
						<div class="cardUniversitySearchResult--top">
							<div class="cardUniversitySearchResult--country">${item.Country}</div>
							<svg fill="black" class="cardUniversitySearchResult--fav" id="cardUniversitySearchResult--fav--grey${index}" viewBox="0 0 24 24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"><path></svg>
							<svg class="cardUniversitySearchResult--fav hideBox" id="cardUniversitySearchResult--fav--red${index}" fill="#ed4956"  viewBox="0 0 48 48"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"><path><svg></svg>
						</div>
						<div class="cardUniversitySearchResult--center" id="cardUniversitySearchResult--centerShort${index}">
							<div class="cardUniversitySearchResultN13--name">${item.University}</div>
							<div class="cardUniversitySearchResultN13--description " >${descriptionReduced}
							<div id="cardUniversitySearchResultArrowMore${index}" class="cardUniversitySearchResultArrowMore">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#999" ><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>
							</div></div>
						</div>
						<div class="cardUniversitySearchResult--center cardUniversitySearchResult--center--hide" id="cardUniversitySearchResult--centerLong${index}">
							<div class="cardUniversitySearchResultN13--name">${item.University}</div>
							<div class="cardUniversitySearchResultN13--description " >${
								item.AboutUniversity
							}
								<div id="cardUniversitySearchResultArrowLess${index}" class="cardUniversitySearchResultArrowLess">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#999" ><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>
								</div>
							</div>
						</div>
							<a class="cardUniversitySearchResult--link"
						 href="${item.Link}" target='_blank'>Link</a>
					</div>
			</div>
            `;
	container.appendChild(node);
	node.classList.add("containerGeneratedMapAndCard");
};

const card14 = (item, index, container) => {
	let descriptionReduced = reduceString(item.AboutUniversity);
	let node = document.createElement("div");
	node.innerHTML = `<div id="cardAndMap${
		item.PropertyID
	}" class="cardAndMap--container${(index + 1) % 2 === 0 ? "Par" : "Impar"}">
		<div id="containerResultHover${item.PropertyID}" class="containerResultsHover">
				<div id="map${index}" class="map"></div>
				<div class="cardUniversitySearchResultInfoHover${
					(index + 1) % 2 === 0 ? "Par" : "Impar"
				}" id="cardUniversitySearchResultInfoHover${index}">
				<div class="cardUniversitySearchResultInfoContainerOne">
					<img  class="cardUniversitySearchResultInfoHover--iconUni" src="../../institution.svg"/>
					<div class="cardUniversitySearchResultInfoHover--type">${item.Institution}</div>
					</div>
					<div class="cardUniversitySearchResultInfoContainerTwo">
					<img  class="cardUniversitySearchResultInfoHover--iconUni" src="../../streets.svg"/>
					<div class="cardUniversitySearchResultInfoHover--street">${item.Streets}</div>
					</div>
				</div>
				</div>
					<div class="cardUniversitySearchResult--container cardUniversitySearchResult${
						(index + 1) % 2 === 0 ? "Par" : "Impar"
					}">
						<div class="cardUniversitySearchResult--top">
							<div class="cardUniversitySearchResult--country">${item.Country}</div>
							<svg fill="black" class="cardUniversitySearchResult--fav" id="cardUniversitySearchResult--fav--grey${index}" viewBox="0 0 24 24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"><path></svg>
							<svg class="cardUniversitySearchResult--fav hideBox" id="cardUniversitySearchResult--fav--red${index}" fill="#ed4956"  viewBox="0 0 48 48"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"><path><svg></svg>
						</div>
						<div class="cardUniversitySearchResult--center" id="cardUniversitySearchResult--centerShort${index}">
							<div class="cardUniversitySearchResultN14--description " >${descriptionReduced}
							<div id="cardUniversitySearchResultArrowMore${index}" class="cardUniversitySearchResultArrowMore">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#999" ><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>
							</div></div>
							<div class="cardUniversitySearchResultN14--name">${item.University}</div>
						</div>
						<div class="cardUniversitySearchResult--center cardUniversitySearchResult--center--hide" id="cardUniversitySearchResult--centerLong${index}">
							<div class="cardUniversitySearchResultN14--description " >${
								item.AboutUniversity
							}
								<div id="cardUniversitySearchResultArrowLess${index}" class="cardUniversitySearchResultArrowLess">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#999" ><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>
								</div>
							</div>
							<div class="cardUniversitySearchResultN14--name">${item.University}</div>
						</div>
							<a class="cardUniversitySearchResult--link"
						 href="${item.Link}" target='_blank'>Link</a>
					
					</div>
			</div>
            `;
	container.appendChild(node);
	node.classList.add("containerGeneratedMapAndCard");
};
