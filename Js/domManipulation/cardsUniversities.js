import { reduceString } from "../functions/reduceString.js";

export const handleCardsByName = (item, index, container) => {
	if (item.University.length <= 14) return card12(item, index, container);
	if (item.University.length === 16) return card2(item, index, container);
	if (item.University.length === 18) return card5(item, index, container);
	if (item.University.length < 30) return card6(item, index, container);
	if (item.University.length < 32) return card13(item, index, container);
	if (item.University.length >= 32) return card11(item, index, container);
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
							<svg class="cardUniversitySearchResult--fav" id="cardUniversitySearchResult--fav--grey${index}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1080" zoomAndPan="magnify" viewBox="0 0 810 809.999993" height="1080" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="id1"><path d="M 149.316406 178.398438 L 660.816406 178.398438 L 660.816406 631.398438 L 149.316406 631.398438 Z M 149.316406 178.398438 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#id1)"><path fill="#a7a7a7" d="M 405.066406 631.28125 L 399.644531 627.601562 C 399.03125 627.191406 336.730469 584.667969 275.351562 525.886719 C 239.136719 491.128906 210.183594 457.597656 189.316406 426.113281 C 162.820312 385.835938 149.316406 348.523438 149.316406 315.402344 C 149.316406 239.957031 210.796875 178.519531 286.296875 178.519531 C 314.324219 178.519531 341.433594 187.105469 364.554688 203.460938 C 381.332031 215.320312 395.039062 230.449219 405.066406 247.828125 C 415.089844 230.347656 428.800781 215.21875 445.578125 203.460938 C 468.695312 187.105469 495.804688 178.519531 523.835938 178.519531 C 599.332031 178.519531 660.816406 239.957031 660.816406 315.402344 L 660.816406 315.503906 C 660.507812 348.417969 646.902344 385.425781 620.304688 425.601562 C 599.4375 457.085938 570.585938 490.617188 534.375 525.476562 C 473.09375 584.460938 411.101562 627.191406 410.488281 627.601562 Z M 286.296875 197.636719 C 221.335938 197.636719 168.445312 250.488281 168.445312 315.402344 C 168.445312 344.738281 180.824219 378.371094 205.273438 415.378906 C 225.222656 445.636719 253.253906 478.144531 288.445312 511.878906 C 338.265625 559.621094 388.800781 596.523438 405.066406 607.972656 C 421.332031 596.421875 471.5625 559.3125 521.277344 511.472656 C 556.367188 477.632812 584.296875 445.230469 604.347656 414.96875 C 628.796875 377.964844 641.378906 344.535156 641.582031 315.402344 C 641.582031 250.488281 588.695312 197.738281 523.734375 197.738281 C 475.550781 197.738281 431.460938 228.199219 413.863281 273.589844 L 404.964844 296.691406 L 396.164062 273.589844 C 378.570312 228.199219 334.480469 197.636719 286.296875 197.636719 Z M 286.296875 197.636719 "  fill-opacity="1" fill-rule="nonzero"/></g></svg>
							<svg class="cardUniversitySearchResult--fav hideBox" id="cardUniversitySearchResult--fav--red${index}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1080" zoomAndPan="magnify" viewBox="0 0 810 809.999993" height="1080" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="id1"><path d="M 149.316406 178.398438 L 660.816406 178.398438 L 660.816406 631.398438 L 149.316406 631.398438 Z M 149.316406 178.398438 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#id1)"><path fill="#ed4956" d="M 405.066406 631.28125 L 399.644531 627.601562 C 399.03125 627.191406 336.730469 584.667969 275.351562 525.886719 C 239.136719 491.128906 210.183594 457.597656 189.316406 426.113281 C 162.820312 385.835938 149.316406 348.523438 149.316406 315.402344 C 149.316406 239.957031 210.796875 178.519531 286.296875 178.519531 C 314.324219 178.519531 341.433594 187.105469 364.554688 203.460938 C 381.332031 215.320312 395.039062 230.449219 405.066406 247.828125 C 415.089844 230.347656 428.800781 215.21875 445.578125 203.460938 C 468.695312 187.105469 495.804688 178.519531 523.835938 178.519531 C 599.332031 178.519531 660.816406 239.957031 660.816406 315.402344 L 660.816406 315.503906 C 660.507812 348.417969 646.902344 385.425781 620.304688 425.601562 C 599.4375 457.085938 570.585938 490.617188 534.375 525.476562 C 473.09375 584.460938 411.101562 627.191406 410.488281 627.601562 Z M 286.296875 197.636719 C 221.335938 197.636719 168.445312 250.488281 168.445312 315.402344 C 168.445312 344.738281 180.824219 378.371094 205.273438 415.378906 C 225.222656 445.636719 253.253906 478.144531 288.445312 511.878906 C 338.265625 559.621094 388.800781 596.523438 405.066406 607.972656 C 421.332031 596.421875 471.5625 559.3125 521.277344 511.472656 C 556.367188 477.632812 584.296875 445.230469 604.347656 414.96875 C 628.796875 377.964844 641.378906 344.535156 641.582031 315.402344 C 641.582031 250.488281 588.695312 197.738281 523.734375 197.738281 C 475.550781 197.738281 431.460938 228.199219 413.863281 273.589844 L 404.964844 296.691406 L 396.164062 273.589844 C 378.570312 228.199219 334.480469 197.636719 286.296875 197.636719 Z M 286.296875 197.636719 "  fill-opacity="1" fill-rule="nonzero"/></g></svg>
						</div>
						<div class="cardUniversitySearchResult--center" id="cardUniversitySearchResult--centerShort${index}">
							<div class="cardUniversitySearchResultN1--name">${item.University}</div>
								<div class="cardUniversitySearchResultN1--description " >${descriptionReduced}
								<div id="cardUniversitySearchResultArrowMore${index}" class="cardUniversitySearchResultArrowMore">
								<img src="../../Assets/arrows/Chevron-down-solid.svg" />
								</div>
							</div>
						</div>
						<div class="cardUniversitySearchResult--center cardUniversitySearchResult--center--hide" id="cardUniversitySearchResult--centerLong${index}">
							<div class="cardUniversitySearchResultN1--name">${item.University}</div>
							<div class="cardUniversitySearchResultN1--description" >${item.Description}
								<div id="cardUniversitySearchResultArrowLess${index}" class="cardUniversitySearchResultArrowLess">
								<img src="../../Assets/arrows/Chevron-down-solid.svg" />
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
							<svg class="cardUniversitySearchResult--fav" id="cardUniversitySearchResult--fav--grey${index}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1080" zoomAndPan="magnify" viewBox="0 0 810 809.999993" height="1080" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="id1"><path d="M 149.316406 178.398438 L 660.816406 178.398438 L 660.816406 631.398438 L 149.316406 631.398438 Z M 149.316406 178.398438 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#id1)"><path fill="#a7a7a7" d="M 405.066406 631.28125 L 399.644531 627.601562 C 399.03125 627.191406 336.730469 584.667969 275.351562 525.886719 C 239.136719 491.128906 210.183594 457.597656 189.316406 426.113281 C 162.820312 385.835938 149.316406 348.523438 149.316406 315.402344 C 149.316406 239.957031 210.796875 178.519531 286.296875 178.519531 C 314.324219 178.519531 341.433594 187.105469 364.554688 203.460938 C 381.332031 215.320312 395.039062 230.449219 405.066406 247.828125 C 415.089844 230.347656 428.800781 215.21875 445.578125 203.460938 C 468.695312 187.105469 495.804688 178.519531 523.835938 178.519531 C 599.332031 178.519531 660.816406 239.957031 660.816406 315.402344 L 660.816406 315.503906 C 660.507812 348.417969 646.902344 385.425781 620.304688 425.601562 C 599.4375 457.085938 570.585938 490.617188 534.375 525.476562 C 473.09375 584.460938 411.101562 627.191406 410.488281 627.601562 Z M 286.296875 197.636719 C 221.335938 197.636719 168.445312 250.488281 168.445312 315.402344 C 168.445312 344.738281 180.824219 378.371094 205.273438 415.378906 C 225.222656 445.636719 253.253906 478.144531 288.445312 511.878906 C 338.265625 559.621094 388.800781 596.523438 405.066406 607.972656 C 421.332031 596.421875 471.5625 559.3125 521.277344 511.472656 C 556.367188 477.632812 584.296875 445.230469 604.347656 414.96875 C 628.796875 377.964844 641.378906 344.535156 641.582031 315.402344 C 641.582031 250.488281 588.695312 197.738281 523.734375 197.738281 C 475.550781 197.738281 431.460938 228.199219 413.863281 273.589844 L 404.964844 296.691406 L 396.164062 273.589844 C 378.570312 228.199219 334.480469 197.636719 286.296875 197.636719 Z M 286.296875 197.636719 "  fill-opacity="1" fill-rule="nonzero"/></g></svg>
							<svg class="cardUniversitySearchResult--fav hideBox" id="cardUniversitySearchResult--fav--red${index}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1080" zoomAndPan="magnify" viewBox="0 0 810 809.999993" height="1080" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="id1"><path d="M 149.316406 178.398438 L 660.816406 178.398438 L 660.816406 631.398438 L 149.316406 631.398438 Z M 149.316406 178.398438 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#id1)"><path fill="#ed4956" d="M 405.066406 631.28125 L 399.644531 627.601562 C 399.03125 627.191406 336.730469 584.667969 275.351562 525.886719 C 239.136719 491.128906 210.183594 457.597656 189.316406 426.113281 C 162.820312 385.835938 149.316406 348.523438 149.316406 315.402344 C 149.316406 239.957031 210.796875 178.519531 286.296875 178.519531 C 314.324219 178.519531 341.433594 187.105469 364.554688 203.460938 C 381.332031 215.320312 395.039062 230.449219 405.066406 247.828125 C 415.089844 230.347656 428.800781 215.21875 445.578125 203.460938 C 468.695312 187.105469 495.804688 178.519531 523.835938 178.519531 C 599.332031 178.519531 660.816406 239.957031 660.816406 315.402344 L 660.816406 315.503906 C 660.507812 348.417969 646.902344 385.425781 620.304688 425.601562 C 599.4375 457.085938 570.585938 490.617188 534.375 525.476562 C 473.09375 584.460938 411.101562 627.191406 410.488281 627.601562 Z M 286.296875 197.636719 C 221.335938 197.636719 168.445312 250.488281 168.445312 315.402344 C 168.445312 344.738281 180.824219 378.371094 205.273438 415.378906 C 225.222656 445.636719 253.253906 478.144531 288.445312 511.878906 C 338.265625 559.621094 388.800781 596.523438 405.066406 607.972656 C 421.332031 596.421875 471.5625 559.3125 521.277344 511.472656 C 556.367188 477.632812 584.296875 445.230469 604.347656 414.96875 C 628.796875 377.964844 641.378906 344.535156 641.582031 315.402344 C 641.582031 250.488281 588.695312 197.738281 523.734375 197.738281 C 475.550781 197.738281 431.460938 228.199219 413.863281 273.589844 L 404.964844 296.691406 L 396.164062 273.589844 C 378.570312 228.199219 334.480469 197.636719 286.296875 197.636719 Z M 286.296875 197.636719 "  fill-opacity="1" fill-rule="nonzero"/></g></svg>
						</div>
						<div class="cardUniversitySearchResult--center" id="cardUniversitySearchResult--centerShort${index}">
							<div class="cardUniversitySearchResultN2--name">${item.University}</div>
							<div class="cardUniversitySearchResultN2--description " >${descriptionReduced}
							<div id="cardUniversitySearchResultArrowMore${index}" class="cardUniversitySearchResultArrowMore">
							<img src="../../Assets/arrows/Chevron-down-solid.svg" />
							</div>
							</div>
						</div>
						<div class="cardUniversitySearchResult--center cardUniversitySearchResult--center--hide" id="cardUniversitySearchResult--centerLong${index}">
							<div class="cardUniversitySearchResultN2--name">${item.University}</div>
							<div class="cardUniversitySearchResultN2--description" >${item.Description}
								<div id="cardUniversitySearchResultArrowLess${index}" class="cardUniversitySearchResultArrowLess">
								<img src="../../Assets/arrows/Chevron-down-solid.svg" />
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
						<svg class="cardUniversitySearchResult--fav" id="cardUniversitySearchResult--fav--grey${index}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1080" zoomAndPan="magnify" viewBox="0 0 810 809.999993" height="1080" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="id1"><path d="M 149.316406 178.398438 L 660.816406 178.398438 L 660.816406 631.398438 L 149.316406 631.398438 Z M 149.316406 178.398438 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#id1)"><path fill="#a7a7a7" d="M 405.066406 631.28125 L 399.644531 627.601562 C 399.03125 627.191406 336.730469 584.667969 275.351562 525.886719 C 239.136719 491.128906 210.183594 457.597656 189.316406 426.113281 C 162.820312 385.835938 149.316406 348.523438 149.316406 315.402344 C 149.316406 239.957031 210.796875 178.519531 286.296875 178.519531 C 314.324219 178.519531 341.433594 187.105469 364.554688 203.460938 C 381.332031 215.320312 395.039062 230.449219 405.066406 247.828125 C 415.089844 230.347656 428.800781 215.21875 445.578125 203.460938 C 468.695312 187.105469 495.804688 178.519531 523.835938 178.519531 C 599.332031 178.519531 660.816406 239.957031 660.816406 315.402344 L 660.816406 315.503906 C 660.507812 348.417969 646.902344 385.425781 620.304688 425.601562 C 599.4375 457.085938 570.585938 490.617188 534.375 525.476562 C 473.09375 584.460938 411.101562 627.191406 410.488281 627.601562 Z M 286.296875 197.636719 C 221.335938 197.636719 168.445312 250.488281 168.445312 315.402344 C 168.445312 344.738281 180.824219 378.371094 205.273438 415.378906 C 225.222656 445.636719 253.253906 478.144531 288.445312 511.878906 C 338.265625 559.621094 388.800781 596.523438 405.066406 607.972656 C 421.332031 596.421875 471.5625 559.3125 521.277344 511.472656 C 556.367188 477.632812 584.296875 445.230469 604.347656 414.96875 C 628.796875 377.964844 641.378906 344.535156 641.582031 315.402344 C 641.582031 250.488281 588.695312 197.738281 523.734375 197.738281 C 475.550781 197.738281 431.460938 228.199219 413.863281 273.589844 L 404.964844 296.691406 L 396.164062 273.589844 C 378.570312 228.199219 334.480469 197.636719 286.296875 197.636719 Z M 286.296875 197.636719 "  fill-opacity="1" fill-rule="nonzero"/></g></svg>
							<svg class="cardUniversitySearchResult--fav hideBox" id="cardUniversitySearchResult--fav--red${index}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1080" zoomAndPan="magnify" viewBox="0 0 810 809.999993" height="1080" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="id1"><path d="M 149.316406 178.398438 L 660.816406 178.398438 L 660.816406 631.398438 L 149.316406 631.398438 Z M 149.316406 178.398438 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#id1)"><path fill="#ed4956" d="M 405.066406 631.28125 L 399.644531 627.601562 C 399.03125 627.191406 336.730469 584.667969 275.351562 525.886719 C 239.136719 491.128906 210.183594 457.597656 189.316406 426.113281 C 162.820312 385.835938 149.316406 348.523438 149.316406 315.402344 C 149.316406 239.957031 210.796875 178.519531 286.296875 178.519531 C 314.324219 178.519531 341.433594 187.105469 364.554688 203.460938 C 381.332031 215.320312 395.039062 230.449219 405.066406 247.828125 C 415.089844 230.347656 428.800781 215.21875 445.578125 203.460938 C 468.695312 187.105469 495.804688 178.519531 523.835938 178.519531 C 599.332031 178.519531 660.816406 239.957031 660.816406 315.402344 L 660.816406 315.503906 C 660.507812 348.417969 646.902344 385.425781 620.304688 425.601562 C 599.4375 457.085938 570.585938 490.617188 534.375 525.476562 C 473.09375 584.460938 411.101562 627.191406 410.488281 627.601562 Z M 286.296875 197.636719 C 221.335938 197.636719 168.445312 250.488281 168.445312 315.402344 C 168.445312 344.738281 180.824219 378.371094 205.273438 415.378906 C 225.222656 445.636719 253.253906 478.144531 288.445312 511.878906 C 338.265625 559.621094 388.800781 596.523438 405.066406 607.972656 C 421.332031 596.421875 471.5625 559.3125 521.277344 511.472656 C 556.367188 477.632812 584.296875 445.230469 604.347656 414.96875 C 628.796875 377.964844 641.378906 344.535156 641.582031 315.402344 C 641.582031 250.488281 588.695312 197.738281 523.734375 197.738281 C 475.550781 197.738281 431.460938 228.199219 413.863281 273.589844 L 404.964844 296.691406 L 396.164062 273.589844 C 378.570312 228.199219 334.480469 197.636719 286.296875 197.636719 Z M 286.296875 197.636719 "  fill-opacity="1" fill-rule="nonzero"/></g></svg>
					</div>
					<div class="cardUniversitySearchResult--center" id="cardUniversitySearchResult--centerShort${index}">
						<div class="cardUniversitySearchResultN3--description " >${descriptionReduced}
							<div id="cardUniversitySearchResultArrowMore${index}" class="cardUniversitySearchResultArrowMore">
							<img src="../../Assets/arrows/Chevron-down-solid.svg" />
							</div>
						</div>
						<div class="cardUniversitySearchResultN3--name">${item.University}</div>
					</div>
						<div class="cardUniversitySearchResult--center cardUniversitySearchResult--center--hide" id="cardUniversitySearchResult--centerLong${index}">
							<div class="cardUniversitySearchResultN3--description" >${item.Description}
								<div id="cardUniversitySearchResultArrowLess${index}" class="cardUniversitySearchResultArrowLess">
								<img src="../../Assets/arrows/Chevron-down-solid.svg" />
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
							<svg class="cardUniversitySearchResult--fav" id="cardUniversitySearchResult--fav--grey${index}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1080" zoomAndPan="magnify" viewBox="0 0 810 809.999993" height="1080" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="id1"><path d="M 149.316406 178.398438 L 660.816406 178.398438 L 660.816406 631.398438 L 149.316406 631.398438 Z M 149.316406 178.398438 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#id1)"><path fill="#a7a7a7" d="M 405.066406 631.28125 L 399.644531 627.601562 C 399.03125 627.191406 336.730469 584.667969 275.351562 525.886719 C 239.136719 491.128906 210.183594 457.597656 189.316406 426.113281 C 162.820312 385.835938 149.316406 348.523438 149.316406 315.402344 C 149.316406 239.957031 210.796875 178.519531 286.296875 178.519531 C 314.324219 178.519531 341.433594 187.105469 364.554688 203.460938 C 381.332031 215.320312 395.039062 230.449219 405.066406 247.828125 C 415.089844 230.347656 428.800781 215.21875 445.578125 203.460938 C 468.695312 187.105469 495.804688 178.519531 523.835938 178.519531 C 599.332031 178.519531 660.816406 239.957031 660.816406 315.402344 L 660.816406 315.503906 C 660.507812 348.417969 646.902344 385.425781 620.304688 425.601562 C 599.4375 457.085938 570.585938 490.617188 534.375 525.476562 C 473.09375 584.460938 411.101562 627.191406 410.488281 627.601562 Z M 286.296875 197.636719 C 221.335938 197.636719 168.445312 250.488281 168.445312 315.402344 C 168.445312 344.738281 180.824219 378.371094 205.273438 415.378906 C 225.222656 445.636719 253.253906 478.144531 288.445312 511.878906 C 338.265625 559.621094 388.800781 596.523438 405.066406 607.972656 C 421.332031 596.421875 471.5625 559.3125 521.277344 511.472656 C 556.367188 477.632812 584.296875 445.230469 604.347656 414.96875 C 628.796875 377.964844 641.378906 344.535156 641.582031 315.402344 C 641.582031 250.488281 588.695312 197.738281 523.734375 197.738281 C 475.550781 197.738281 431.460938 228.199219 413.863281 273.589844 L 404.964844 296.691406 L 396.164062 273.589844 C 378.570312 228.199219 334.480469 197.636719 286.296875 197.636719 Z M 286.296875 197.636719 "  fill-opacity="1" fill-rule="nonzero"/></g></svg>
							<svg class="cardUniversitySearchResult--fav hideBox" id="cardUniversitySearchResult--fav--red${index}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1080" zoomAndPan="magnify" viewBox="0 0 810 809.999993" height="1080" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="id1"><path d="M 149.316406 178.398438 L 660.816406 178.398438 L 660.816406 631.398438 L 149.316406 631.398438 Z M 149.316406 178.398438 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#id1)"><path fill="#ed4956" d="M 405.066406 631.28125 L 399.644531 627.601562 C 399.03125 627.191406 336.730469 584.667969 275.351562 525.886719 C 239.136719 491.128906 210.183594 457.597656 189.316406 426.113281 C 162.820312 385.835938 149.316406 348.523438 149.316406 315.402344 C 149.316406 239.957031 210.796875 178.519531 286.296875 178.519531 C 314.324219 178.519531 341.433594 187.105469 364.554688 203.460938 C 381.332031 215.320312 395.039062 230.449219 405.066406 247.828125 C 415.089844 230.347656 428.800781 215.21875 445.578125 203.460938 C 468.695312 187.105469 495.804688 178.519531 523.835938 178.519531 C 599.332031 178.519531 660.816406 239.957031 660.816406 315.402344 L 660.816406 315.503906 C 660.507812 348.417969 646.902344 385.425781 620.304688 425.601562 C 599.4375 457.085938 570.585938 490.617188 534.375 525.476562 C 473.09375 584.460938 411.101562 627.191406 410.488281 627.601562 Z M 286.296875 197.636719 C 221.335938 197.636719 168.445312 250.488281 168.445312 315.402344 C 168.445312 344.738281 180.824219 378.371094 205.273438 415.378906 C 225.222656 445.636719 253.253906 478.144531 288.445312 511.878906 C 338.265625 559.621094 388.800781 596.523438 405.066406 607.972656 C 421.332031 596.421875 471.5625 559.3125 521.277344 511.472656 C 556.367188 477.632812 584.296875 445.230469 604.347656 414.96875 C 628.796875 377.964844 641.378906 344.535156 641.582031 315.402344 C 641.582031 250.488281 588.695312 197.738281 523.734375 197.738281 C 475.550781 197.738281 431.460938 228.199219 413.863281 273.589844 L 404.964844 296.691406 L 396.164062 273.589844 C 378.570312 228.199219 334.480469 197.636719 286.296875 197.636719 Z M 286.296875 197.636719 "  fill-opacity="1" fill-rule="nonzero"/></g></svg>
						</div>
						<div class="cardUniversitySearchResult--center" id="cardUniversitySearchResult--centerShort${index}">
							<div class="cardUniversitySearchResultN4--name">${item.University}</div>
							<div class="cardUniversitySearchResultN4--description " >${descriptionReduced}
								<div id="cardUniversitySearchResultArrowMore${index}" class="cardUniversitySearchResultArrowMore">
								<img src="../../Assets/arrows/Chevron-down-solid.svg" />
								</div>
							</div>
						</div>
						<div class="cardUniversitySearchResult--center cardUniversitySearchResult--center--hide" id="cardUniversitySearchResult--centerLong${index}">
							<div class="cardUniversitySearchResultN4--name">${item.University}</div>
							<div class="cardUniversitySearchResultN4--description" >${item.Description}
								<div id="cardUniversitySearchResultArrowLess${index}" class="cardUniversitySearchResultArrowLess">
								<img src="../../Assets/arrows/Chevron-down-solid.svg" />
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
						<svg class="cardUniversitySearchResult--fav" id="cardUniversitySearchResult--fav--grey${index}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1080" zoomAndPan="magnify" viewBox="0 0 810 809.999993" height="1080" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="id1"><path d="M 149.316406 178.398438 L 660.816406 178.398438 L 660.816406 631.398438 L 149.316406 631.398438 Z M 149.316406 178.398438 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#id1)"><path fill="#a7a7a7" d="M 405.066406 631.28125 L 399.644531 627.601562 C 399.03125 627.191406 336.730469 584.667969 275.351562 525.886719 C 239.136719 491.128906 210.183594 457.597656 189.316406 426.113281 C 162.820312 385.835938 149.316406 348.523438 149.316406 315.402344 C 149.316406 239.957031 210.796875 178.519531 286.296875 178.519531 C 314.324219 178.519531 341.433594 187.105469 364.554688 203.460938 C 381.332031 215.320312 395.039062 230.449219 405.066406 247.828125 C 415.089844 230.347656 428.800781 215.21875 445.578125 203.460938 C 468.695312 187.105469 495.804688 178.519531 523.835938 178.519531 C 599.332031 178.519531 660.816406 239.957031 660.816406 315.402344 L 660.816406 315.503906 C 660.507812 348.417969 646.902344 385.425781 620.304688 425.601562 C 599.4375 457.085938 570.585938 490.617188 534.375 525.476562 C 473.09375 584.460938 411.101562 627.191406 410.488281 627.601562 Z M 286.296875 197.636719 C 221.335938 197.636719 168.445312 250.488281 168.445312 315.402344 C 168.445312 344.738281 180.824219 378.371094 205.273438 415.378906 C 225.222656 445.636719 253.253906 478.144531 288.445312 511.878906 C 338.265625 559.621094 388.800781 596.523438 405.066406 607.972656 C 421.332031 596.421875 471.5625 559.3125 521.277344 511.472656 C 556.367188 477.632812 584.296875 445.230469 604.347656 414.96875 C 628.796875 377.964844 641.378906 344.535156 641.582031 315.402344 C 641.582031 250.488281 588.695312 197.738281 523.734375 197.738281 C 475.550781 197.738281 431.460938 228.199219 413.863281 273.589844 L 404.964844 296.691406 L 396.164062 273.589844 C 378.570312 228.199219 334.480469 197.636719 286.296875 197.636719 Z M 286.296875 197.636719 "  fill-opacity="1" fill-rule="nonzero"/></g></svg>
							<svg class="cardUniversitySearchResult--fav hideBox" id="cardUniversitySearchResult--fav--red${index}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1080" zoomAndPan="magnify" viewBox="0 0 810 809.999993" height="1080" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="id1"><path d="M 149.316406 178.398438 L 660.816406 178.398438 L 660.816406 631.398438 L 149.316406 631.398438 Z M 149.316406 178.398438 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#id1)"><path fill="#ed4956" d="M 405.066406 631.28125 L 399.644531 627.601562 C 399.03125 627.191406 336.730469 584.667969 275.351562 525.886719 C 239.136719 491.128906 210.183594 457.597656 189.316406 426.113281 C 162.820312 385.835938 149.316406 348.523438 149.316406 315.402344 C 149.316406 239.957031 210.796875 178.519531 286.296875 178.519531 C 314.324219 178.519531 341.433594 187.105469 364.554688 203.460938 C 381.332031 215.320312 395.039062 230.449219 405.066406 247.828125 C 415.089844 230.347656 428.800781 215.21875 445.578125 203.460938 C 468.695312 187.105469 495.804688 178.519531 523.835938 178.519531 C 599.332031 178.519531 660.816406 239.957031 660.816406 315.402344 L 660.816406 315.503906 C 660.507812 348.417969 646.902344 385.425781 620.304688 425.601562 C 599.4375 457.085938 570.585938 490.617188 534.375 525.476562 C 473.09375 584.460938 411.101562 627.191406 410.488281 627.601562 Z M 286.296875 197.636719 C 221.335938 197.636719 168.445312 250.488281 168.445312 315.402344 C 168.445312 344.738281 180.824219 378.371094 205.273438 415.378906 C 225.222656 445.636719 253.253906 478.144531 288.445312 511.878906 C 338.265625 559.621094 388.800781 596.523438 405.066406 607.972656 C 421.332031 596.421875 471.5625 559.3125 521.277344 511.472656 C 556.367188 477.632812 584.296875 445.230469 604.347656 414.96875 C 628.796875 377.964844 641.378906 344.535156 641.582031 315.402344 C 641.582031 250.488281 588.695312 197.738281 523.734375 197.738281 C 475.550781 197.738281 431.460938 228.199219 413.863281 273.589844 L 404.964844 296.691406 L 396.164062 273.589844 C 378.570312 228.199219 334.480469 197.636719 286.296875 197.636719 Z M 286.296875 197.636719 "  fill-opacity="1" fill-rule="nonzero"/></g></svg>
					</div>
					<div class="cardUniversitySearchResult--center" id="cardUniversitySearchResult--centerShort${index}">
						<div class="cardUniversitySearchResultN5--name">${item.University}</div>
						<div class="cardUniversitySearchResultN5--description " >${descriptionReduced}
							<div id="cardUniversitySearchResultArrowMore${index}" class="cardUniversitySearchResultArrowMore">
							<img src="../../Assets/arrows/Chevron-down-solid.svg" />
							</div>
						</div>
					</div>
					<div class="cardUniversitySearchResult--center cardUniversitySearchResult--center--hide" id="cardUniversitySearchResult--centerLong${index}">
						<div class="cardUniversitySearchResultN5--name">${item.University}</div>
						<div class="cardUniversitySearchResultN5--description" >${item.Description}
								<div id="cardUniversitySearchResultArrowLess${index}" class="cardUniversitySearchResultArrowLess">
								<img src="../../Assets/arrows/Chevron-down-solid.svg" />
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
							<svg class="cardUniversitySearchResult--fav" id="cardUniversitySearchResult--fav--grey${index}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1080" zoomAndPan="magnify" viewBox="0 0 810 809.999993" height="1080" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="id1"><path d="M 149.316406 178.398438 L 660.816406 178.398438 L 660.816406 631.398438 L 149.316406 631.398438 Z M 149.316406 178.398438 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#id1)"><path fill="#a7a7a7" d="M 405.066406 631.28125 L 399.644531 627.601562 C 399.03125 627.191406 336.730469 584.667969 275.351562 525.886719 C 239.136719 491.128906 210.183594 457.597656 189.316406 426.113281 C 162.820312 385.835938 149.316406 348.523438 149.316406 315.402344 C 149.316406 239.957031 210.796875 178.519531 286.296875 178.519531 C 314.324219 178.519531 341.433594 187.105469 364.554688 203.460938 C 381.332031 215.320312 395.039062 230.449219 405.066406 247.828125 C 415.089844 230.347656 428.800781 215.21875 445.578125 203.460938 C 468.695312 187.105469 495.804688 178.519531 523.835938 178.519531 C 599.332031 178.519531 660.816406 239.957031 660.816406 315.402344 L 660.816406 315.503906 C 660.507812 348.417969 646.902344 385.425781 620.304688 425.601562 C 599.4375 457.085938 570.585938 490.617188 534.375 525.476562 C 473.09375 584.460938 411.101562 627.191406 410.488281 627.601562 Z M 286.296875 197.636719 C 221.335938 197.636719 168.445312 250.488281 168.445312 315.402344 C 168.445312 344.738281 180.824219 378.371094 205.273438 415.378906 C 225.222656 445.636719 253.253906 478.144531 288.445312 511.878906 C 338.265625 559.621094 388.800781 596.523438 405.066406 607.972656 C 421.332031 596.421875 471.5625 559.3125 521.277344 511.472656 C 556.367188 477.632812 584.296875 445.230469 604.347656 414.96875 C 628.796875 377.964844 641.378906 344.535156 641.582031 315.402344 C 641.582031 250.488281 588.695312 197.738281 523.734375 197.738281 C 475.550781 197.738281 431.460938 228.199219 413.863281 273.589844 L 404.964844 296.691406 L 396.164062 273.589844 C 378.570312 228.199219 334.480469 197.636719 286.296875 197.636719 Z M 286.296875 197.636719 "  fill-opacity="1" fill-rule="nonzero"/></g></svg>
							<svg class="cardUniversitySearchResult--fav hideBox" id="cardUniversitySearchResult--fav--red${index}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1080" zoomAndPan="magnify" viewBox="0 0 810 809.999993" height="1080" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="id1"><path d="M 149.316406 178.398438 L 660.816406 178.398438 L 660.816406 631.398438 L 149.316406 631.398438 Z M 149.316406 178.398438 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#id1)"><path fill="#ed4956" d="M 405.066406 631.28125 L 399.644531 627.601562 C 399.03125 627.191406 336.730469 584.667969 275.351562 525.886719 C 239.136719 491.128906 210.183594 457.597656 189.316406 426.113281 C 162.820312 385.835938 149.316406 348.523438 149.316406 315.402344 C 149.316406 239.957031 210.796875 178.519531 286.296875 178.519531 C 314.324219 178.519531 341.433594 187.105469 364.554688 203.460938 C 381.332031 215.320312 395.039062 230.449219 405.066406 247.828125 C 415.089844 230.347656 428.800781 215.21875 445.578125 203.460938 C 468.695312 187.105469 495.804688 178.519531 523.835938 178.519531 C 599.332031 178.519531 660.816406 239.957031 660.816406 315.402344 L 660.816406 315.503906 C 660.507812 348.417969 646.902344 385.425781 620.304688 425.601562 C 599.4375 457.085938 570.585938 490.617188 534.375 525.476562 C 473.09375 584.460938 411.101562 627.191406 410.488281 627.601562 Z M 286.296875 197.636719 C 221.335938 197.636719 168.445312 250.488281 168.445312 315.402344 C 168.445312 344.738281 180.824219 378.371094 205.273438 415.378906 C 225.222656 445.636719 253.253906 478.144531 288.445312 511.878906 C 338.265625 559.621094 388.800781 596.523438 405.066406 607.972656 C 421.332031 596.421875 471.5625 559.3125 521.277344 511.472656 C 556.367188 477.632812 584.296875 445.230469 604.347656 414.96875 C 628.796875 377.964844 641.378906 344.535156 641.582031 315.402344 C 641.582031 250.488281 588.695312 197.738281 523.734375 197.738281 C 475.550781 197.738281 431.460938 228.199219 413.863281 273.589844 L 404.964844 296.691406 L 396.164062 273.589844 C 378.570312 228.199219 334.480469 197.636719 286.296875 197.636719 Z M 286.296875 197.636719 "  fill-opacity="1" fill-rule="nonzero"/></g></svg>
						</div>
						<div class="cardUniversitySearchResult--center" id="cardUniversitySearchResult--centerShort${index}">
							<div class="cardUniversitySearchResultN6--name">${item.University}</div>
							<div class="cardUniversitySearchResultN6--description " >${descriptionReduced}
								<div id="cardUniversitySearchResultArrowMore${index}" class="cardUniversitySearchResultArrowMore">
								<img src="../../Assets/arrows/Chevron-down-solid.svg" />
								</div>
							</div>
						</div>
						<div class="cardUniversitySearchResult--center cardUniversitySearchResult--center--hide" id="cardUniversitySearchResult--centerLong${index}">
							<div class="cardUniversitySearchResultN6--name">${item.University}</div>
							<div class="cardUniversitySearchResultN6--description" >${item.Description}
								<div id="cardUniversitySearchResultArrowLess${index}" class="cardUniversitySearchResultArrowLess">
								<img src="../../Assets/arrows/Chevron-down-solid.svg" />
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
							<svg class="cardUniversitySearchResult--fav" id="cardUniversitySearchResult--fav--grey${index}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1080" zoomAndPan="magnify" viewBox="0 0 810 809.999993" height="1080" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="id1"><path d="M 149.316406 178.398438 L 660.816406 178.398438 L 660.816406 631.398438 L 149.316406 631.398438 Z M 149.316406 178.398438 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#id1)"><path fill="#a7a7a7" d="M 405.066406 631.28125 L 399.644531 627.601562 C 399.03125 627.191406 336.730469 584.667969 275.351562 525.886719 C 239.136719 491.128906 210.183594 457.597656 189.316406 426.113281 C 162.820312 385.835938 149.316406 348.523438 149.316406 315.402344 C 149.316406 239.957031 210.796875 178.519531 286.296875 178.519531 C 314.324219 178.519531 341.433594 187.105469 364.554688 203.460938 C 381.332031 215.320312 395.039062 230.449219 405.066406 247.828125 C 415.089844 230.347656 428.800781 215.21875 445.578125 203.460938 C 468.695312 187.105469 495.804688 178.519531 523.835938 178.519531 C 599.332031 178.519531 660.816406 239.957031 660.816406 315.402344 L 660.816406 315.503906 C 660.507812 348.417969 646.902344 385.425781 620.304688 425.601562 C 599.4375 457.085938 570.585938 490.617188 534.375 525.476562 C 473.09375 584.460938 411.101562 627.191406 410.488281 627.601562 Z M 286.296875 197.636719 C 221.335938 197.636719 168.445312 250.488281 168.445312 315.402344 C 168.445312 344.738281 180.824219 378.371094 205.273438 415.378906 C 225.222656 445.636719 253.253906 478.144531 288.445312 511.878906 C 338.265625 559.621094 388.800781 596.523438 405.066406 607.972656 C 421.332031 596.421875 471.5625 559.3125 521.277344 511.472656 C 556.367188 477.632812 584.296875 445.230469 604.347656 414.96875 C 628.796875 377.964844 641.378906 344.535156 641.582031 315.402344 C 641.582031 250.488281 588.695312 197.738281 523.734375 197.738281 C 475.550781 197.738281 431.460938 228.199219 413.863281 273.589844 L 404.964844 296.691406 L 396.164062 273.589844 C 378.570312 228.199219 334.480469 197.636719 286.296875 197.636719 Z M 286.296875 197.636719 "  fill-opacity="1" fill-rule="nonzero"/></g></svg>
							<svg class="cardUniversitySearchResult--fav hideBox" id="cardUniversitySearchResult--fav--red${index}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1080" zoomAndPan="magnify" viewBox="0 0 810 809.999993" height="1080" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="id1"><path d="M 149.316406 178.398438 L 660.816406 178.398438 L 660.816406 631.398438 L 149.316406 631.398438 Z M 149.316406 178.398438 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#id1)"><path fill="#ed4956" d="M 405.066406 631.28125 L 399.644531 627.601562 C 399.03125 627.191406 336.730469 584.667969 275.351562 525.886719 C 239.136719 491.128906 210.183594 457.597656 189.316406 426.113281 C 162.820312 385.835938 149.316406 348.523438 149.316406 315.402344 C 149.316406 239.957031 210.796875 178.519531 286.296875 178.519531 C 314.324219 178.519531 341.433594 187.105469 364.554688 203.460938 C 381.332031 215.320312 395.039062 230.449219 405.066406 247.828125 C 415.089844 230.347656 428.800781 215.21875 445.578125 203.460938 C 468.695312 187.105469 495.804688 178.519531 523.835938 178.519531 C 599.332031 178.519531 660.816406 239.957031 660.816406 315.402344 L 660.816406 315.503906 C 660.507812 348.417969 646.902344 385.425781 620.304688 425.601562 C 599.4375 457.085938 570.585938 490.617188 534.375 525.476562 C 473.09375 584.460938 411.101562 627.191406 410.488281 627.601562 Z M 286.296875 197.636719 C 221.335938 197.636719 168.445312 250.488281 168.445312 315.402344 C 168.445312 344.738281 180.824219 378.371094 205.273438 415.378906 C 225.222656 445.636719 253.253906 478.144531 288.445312 511.878906 C 338.265625 559.621094 388.800781 596.523438 405.066406 607.972656 C 421.332031 596.421875 471.5625 559.3125 521.277344 511.472656 C 556.367188 477.632812 584.296875 445.230469 604.347656 414.96875 C 628.796875 377.964844 641.378906 344.535156 641.582031 315.402344 C 641.582031 250.488281 588.695312 197.738281 523.734375 197.738281 C 475.550781 197.738281 431.460938 228.199219 413.863281 273.589844 L 404.964844 296.691406 L 396.164062 273.589844 C 378.570312 228.199219 334.480469 197.636719 286.296875 197.636719 Z M 286.296875 197.636719 "  fill-opacity="1" fill-rule="nonzero"/></g></svg>
						</div>
						<div class="cardUniversitySearchResult--center" id="cardUniversitySearchResult--centerShort${index}">
							<div class="cardUniversitySearchResultN7--name">${item.University}</div>
							<div class="cardUniversitySearchResultN7--description " >${descriptionReduced}
								<div id="cardUniversitySearchResultArrowMore${index}" class="cardUniversitySearchResultArrowMore">
								<img src="../../Assets/arrows/Chevron-down-solid.svg" />
								</div>
							</div>
						</div>
						<div class="cardUniversitySearchResult--center cardUniversitySearchResult--center--hide" id="cardUniversitySearchResult--centerLong${index}">
							<div class="cardUniversitySearchResultN7--name">${item.University}</div>
							<div class="cardUniversitySearchResultN7--description" >${item.Description}
								<div id="cardUniversitySearchResultArrowLess${index}" class="cardUniversitySearchResultArrowLess">
								<img src="../../Assets/arrows/Chevron-down-solid.svg" />
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
							<svg class="cardUniversitySearchResult--fav" id="cardUniversitySearchResult--fav--grey${index}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1080" zoomAndPan="magnify" viewBox="0 0 810 809.999993" height="1080" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="id1"><path d="M 149.316406 178.398438 L 660.816406 178.398438 L 660.816406 631.398438 L 149.316406 631.398438 Z M 149.316406 178.398438 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#id1)"><path fill="#a7a7a7" d="M 405.066406 631.28125 L 399.644531 627.601562 C 399.03125 627.191406 336.730469 584.667969 275.351562 525.886719 C 239.136719 491.128906 210.183594 457.597656 189.316406 426.113281 C 162.820312 385.835938 149.316406 348.523438 149.316406 315.402344 C 149.316406 239.957031 210.796875 178.519531 286.296875 178.519531 C 314.324219 178.519531 341.433594 187.105469 364.554688 203.460938 C 381.332031 215.320312 395.039062 230.449219 405.066406 247.828125 C 415.089844 230.347656 428.800781 215.21875 445.578125 203.460938 C 468.695312 187.105469 495.804688 178.519531 523.835938 178.519531 C 599.332031 178.519531 660.816406 239.957031 660.816406 315.402344 L 660.816406 315.503906 C 660.507812 348.417969 646.902344 385.425781 620.304688 425.601562 C 599.4375 457.085938 570.585938 490.617188 534.375 525.476562 C 473.09375 584.460938 411.101562 627.191406 410.488281 627.601562 Z M 286.296875 197.636719 C 221.335938 197.636719 168.445312 250.488281 168.445312 315.402344 C 168.445312 344.738281 180.824219 378.371094 205.273438 415.378906 C 225.222656 445.636719 253.253906 478.144531 288.445312 511.878906 C 338.265625 559.621094 388.800781 596.523438 405.066406 607.972656 C 421.332031 596.421875 471.5625 559.3125 521.277344 511.472656 C 556.367188 477.632812 584.296875 445.230469 604.347656 414.96875 C 628.796875 377.964844 641.378906 344.535156 641.582031 315.402344 C 641.582031 250.488281 588.695312 197.738281 523.734375 197.738281 C 475.550781 197.738281 431.460938 228.199219 413.863281 273.589844 L 404.964844 296.691406 L 396.164062 273.589844 C 378.570312 228.199219 334.480469 197.636719 286.296875 197.636719 Z M 286.296875 197.636719 "  fill-opacity="1" fill-rule="nonzero"/></g></svg>
							<svg class="cardUniversitySearchResult--fav hideBox" id="cardUniversitySearchResult--fav--red${index}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1080" zoomAndPan="magnify" viewBox="0 0 810 809.999993" height="1080" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="id1"><path d="M 149.316406 178.398438 L 660.816406 178.398438 L 660.816406 631.398438 L 149.316406 631.398438 Z M 149.316406 178.398438 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#id1)"><path fill="#ed4956" d="M 405.066406 631.28125 L 399.644531 627.601562 C 399.03125 627.191406 336.730469 584.667969 275.351562 525.886719 C 239.136719 491.128906 210.183594 457.597656 189.316406 426.113281 C 162.820312 385.835938 149.316406 348.523438 149.316406 315.402344 C 149.316406 239.957031 210.796875 178.519531 286.296875 178.519531 C 314.324219 178.519531 341.433594 187.105469 364.554688 203.460938 C 381.332031 215.320312 395.039062 230.449219 405.066406 247.828125 C 415.089844 230.347656 428.800781 215.21875 445.578125 203.460938 C 468.695312 187.105469 495.804688 178.519531 523.835938 178.519531 C 599.332031 178.519531 660.816406 239.957031 660.816406 315.402344 L 660.816406 315.503906 C 660.507812 348.417969 646.902344 385.425781 620.304688 425.601562 C 599.4375 457.085938 570.585938 490.617188 534.375 525.476562 C 473.09375 584.460938 411.101562 627.191406 410.488281 627.601562 Z M 286.296875 197.636719 C 221.335938 197.636719 168.445312 250.488281 168.445312 315.402344 C 168.445312 344.738281 180.824219 378.371094 205.273438 415.378906 C 225.222656 445.636719 253.253906 478.144531 288.445312 511.878906 C 338.265625 559.621094 388.800781 596.523438 405.066406 607.972656 C 421.332031 596.421875 471.5625 559.3125 521.277344 511.472656 C 556.367188 477.632812 584.296875 445.230469 604.347656 414.96875 C 628.796875 377.964844 641.378906 344.535156 641.582031 315.402344 C 641.582031 250.488281 588.695312 197.738281 523.734375 197.738281 C 475.550781 197.738281 431.460938 228.199219 413.863281 273.589844 L 404.964844 296.691406 L 396.164062 273.589844 C 378.570312 228.199219 334.480469 197.636719 286.296875 197.636719 Z M 286.296875 197.636719 "  fill-opacity="1" fill-rule="nonzero"/></g></svg>
						</div>
						<div class="cardUniversitySearchResult--center" id="cardUniversitySearchResult--centerShort${index}">
							<div class="cardUniversitySearchResultN8--description " >${descriptionReduced}
								<div id="cardUniversitySearchResultArrowMore${index}" class="cardUniversitySearchResultArrowMore">
								<img src="../../Assets/arrows/Chevron-down-solid.svg" />
								</div>
							</div>
							<div class="cardUniversitySearchResultN8--name">${item.University}</div>
						</div>
						<div class="cardUniversitySearchResult--center cardUniversitySearchResult--center--hide" id="cardUniversitySearchResult--centerLong${index}">
							<div class="cardUniversitySearchResultN8--description" >${item.Description}
								<div id="cardUniversitySearchResultArrowLess${index}" class="cardUniversitySearchResultArrowLess">
								<img src="../../Assets/arrows/Chevron-down-solid.svg" />
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
							<svg class="cardUniversitySearchResult--fav" id="cardUniversitySearchResult--fav--grey${index}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1080" zoomAndPan="magnify" viewBox="0 0 810 809.999993" height="1080" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="id1"><path d="M 149.316406 178.398438 L 660.816406 178.398438 L 660.816406 631.398438 L 149.316406 631.398438 Z M 149.316406 178.398438 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#id1)"><path fill="#a7a7a7" d="M 405.066406 631.28125 L 399.644531 627.601562 C 399.03125 627.191406 336.730469 584.667969 275.351562 525.886719 C 239.136719 491.128906 210.183594 457.597656 189.316406 426.113281 C 162.820312 385.835938 149.316406 348.523438 149.316406 315.402344 C 149.316406 239.957031 210.796875 178.519531 286.296875 178.519531 C 314.324219 178.519531 341.433594 187.105469 364.554688 203.460938 C 381.332031 215.320312 395.039062 230.449219 405.066406 247.828125 C 415.089844 230.347656 428.800781 215.21875 445.578125 203.460938 C 468.695312 187.105469 495.804688 178.519531 523.835938 178.519531 C 599.332031 178.519531 660.816406 239.957031 660.816406 315.402344 L 660.816406 315.503906 C 660.507812 348.417969 646.902344 385.425781 620.304688 425.601562 C 599.4375 457.085938 570.585938 490.617188 534.375 525.476562 C 473.09375 584.460938 411.101562 627.191406 410.488281 627.601562 Z M 286.296875 197.636719 C 221.335938 197.636719 168.445312 250.488281 168.445312 315.402344 C 168.445312 344.738281 180.824219 378.371094 205.273438 415.378906 C 225.222656 445.636719 253.253906 478.144531 288.445312 511.878906 C 338.265625 559.621094 388.800781 596.523438 405.066406 607.972656 C 421.332031 596.421875 471.5625 559.3125 521.277344 511.472656 C 556.367188 477.632812 584.296875 445.230469 604.347656 414.96875 C 628.796875 377.964844 641.378906 344.535156 641.582031 315.402344 C 641.582031 250.488281 588.695312 197.738281 523.734375 197.738281 C 475.550781 197.738281 431.460938 228.199219 413.863281 273.589844 L 404.964844 296.691406 L 396.164062 273.589844 C 378.570312 228.199219 334.480469 197.636719 286.296875 197.636719 Z M 286.296875 197.636719 "  fill-opacity="1" fill-rule="nonzero"/></g></svg>
							<svg class="cardUniversitySearchResult--fav hideBox" id="cardUniversitySearchResult--fav--red${index}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1080" zoomAndPan="magnify" viewBox="0 0 810 809.999993" height="1080" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="id1"><path d="M 149.316406 178.398438 L 660.816406 178.398438 L 660.816406 631.398438 L 149.316406 631.398438 Z M 149.316406 178.398438 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#id1)"><path fill="#ed4956" d="M 405.066406 631.28125 L 399.644531 627.601562 C 399.03125 627.191406 336.730469 584.667969 275.351562 525.886719 C 239.136719 491.128906 210.183594 457.597656 189.316406 426.113281 C 162.820312 385.835938 149.316406 348.523438 149.316406 315.402344 C 149.316406 239.957031 210.796875 178.519531 286.296875 178.519531 C 314.324219 178.519531 341.433594 187.105469 364.554688 203.460938 C 381.332031 215.320312 395.039062 230.449219 405.066406 247.828125 C 415.089844 230.347656 428.800781 215.21875 445.578125 203.460938 C 468.695312 187.105469 495.804688 178.519531 523.835938 178.519531 C 599.332031 178.519531 660.816406 239.957031 660.816406 315.402344 L 660.816406 315.503906 C 660.507812 348.417969 646.902344 385.425781 620.304688 425.601562 C 599.4375 457.085938 570.585938 490.617188 534.375 525.476562 C 473.09375 584.460938 411.101562 627.191406 410.488281 627.601562 Z M 286.296875 197.636719 C 221.335938 197.636719 168.445312 250.488281 168.445312 315.402344 C 168.445312 344.738281 180.824219 378.371094 205.273438 415.378906 C 225.222656 445.636719 253.253906 478.144531 288.445312 511.878906 C 338.265625 559.621094 388.800781 596.523438 405.066406 607.972656 C 421.332031 596.421875 471.5625 559.3125 521.277344 511.472656 C 556.367188 477.632812 584.296875 445.230469 604.347656 414.96875 C 628.796875 377.964844 641.378906 344.535156 641.582031 315.402344 C 641.582031 250.488281 588.695312 197.738281 523.734375 197.738281 C 475.550781 197.738281 431.460938 228.199219 413.863281 273.589844 L 404.964844 296.691406 L 396.164062 273.589844 C 378.570312 228.199219 334.480469 197.636719 286.296875 197.636719 Z M 286.296875 197.636719 "  fill-opacity="1" fill-rule="nonzero"/></g></svg>
						</div>
						<div class="cardUniversitySearchResult--center" id="cardUniversitySearchResult--centerShort${index}">
							<div class="cardUniversitySearchResultN9--description " >${descriptionReduced}
								<div id="cardUniversitySearchResultArrowMore${index}" class="cardUniversitySearchResultArrowMore">
								<img src="../../Assets/arrows/Chevron-down-solid.svg" />
								</div>
							</div>
							<div class="cardUniversitySearchResultN9--name">${item.University}</div>
						</div>
						<div class="cardUniversitySearchResult--center cardUniversitySearchResult--center--hide" id="cardUniversitySearchResult--centerLong${index}">
							<div class="cardUniversitySearchResultN9--description" >${item.Description}
								<div id="cardUniversitySearchResultArrowLess${index}" class="cardUniversitySearchResultArrowLess">
								<img src="../../Assets/arrows/Chevron-down-solid.svg" />
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
							<svg class="cardUniversitySearchResult--fav" id="cardUniversitySearchResult--fav--grey${index}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1080" zoomAndPan="magnify" viewBox="0 0 810 809.999993" height="1080" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="id1"><path d="M 149.316406 178.398438 L 660.816406 178.398438 L 660.816406 631.398438 L 149.316406 631.398438 Z M 149.316406 178.398438 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#id1)"><path fill="#a7a7a7" d="M 405.066406 631.28125 L 399.644531 627.601562 C 399.03125 627.191406 336.730469 584.667969 275.351562 525.886719 C 239.136719 491.128906 210.183594 457.597656 189.316406 426.113281 C 162.820312 385.835938 149.316406 348.523438 149.316406 315.402344 C 149.316406 239.957031 210.796875 178.519531 286.296875 178.519531 C 314.324219 178.519531 341.433594 187.105469 364.554688 203.460938 C 381.332031 215.320312 395.039062 230.449219 405.066406 247.828125 C 415.089844 230.347656 428.800781 215.21875 445.578125 203.460938 C 468.695312 187.105469 495.804688 178.519531 523.835938 178.519531 C 599.332031 178.519531 660.816406 239.957031 660.816406 315.402344 L 660.816406 315.503906 C 660.507812 348.417969 646.902344 385.425781 620.304688 425.601562 C 599.4375 457.085938 570.585938 490.617188 534.375 525.476562 C 473.09375 584.460938 411.101562 627.191406 410.488281 627.601562 Z M 286.296875 197.636719 C 221.335938 197.636719 168.445312 250.488281 168.445312 315.402344 C 168.445312 344.738281 180.824219 378.371094 205.273438 415.378906 C 225.222656 445.636719 253.253906 478.144531 288.445312 511.878906 C 338.265625 559.621094 388.800781 596.523438 405.066406 607.972656 C 421.332031 596.421875 471.5625 559.3125 521.277344 511.472656 C 556.367188 477.632812 584.296875 445.230469 604.347656 414.96875 C 628.796875 377.964844 641.378906 344.535156 641.582031 315.402344 C 641.582031 250.488281 588.695312 197.738281 523.734375 197.738281 C 475.550781 197.738281 431.460938 228.199219 413.863281 273.589844 L 404.964844 296.691406 L 396.164062 273.589844 C 378.570312 228.199219 334.480469 197.636719 286.296875 197.636719 Z M 286.296875 197.636719 "  fill-opacity="1" fill-rule="nonzero"/></g></svg>
							<svg class="cardUniversitySearchResult--fav hideBox" id="cardUniversitySearchResult--fav--red${index}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1080" zoomAndPan="magnify" viewBox="0 0 810 809.999993" height="1080" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="id1"><path d="M 149.316406 178.398438 L 660.816406 178.398438 L 660.816406 631.398438 L 149.316406 631.398438 Z M 149.316406 178.398438 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#id1)"><path fill="#ed4956" d="M 405.066406 631.28125 L 399.644531 627.601562 C 399.03125 627.191406 336.730469 584.667969 275.351562 525.886719 C 239.136719 491.128906 210.183594 457.597656 189.316406 426.113281 C 162.820312 385.835938 149.316406 348.523438 149.316406 315.402344 C 149.316406 239.957031 210.796875 178.519531 286.296875 178.519531 C 314.324219 178.519531 341.433594 187.105469 364.554688 203.460938 C 381.332031 215.320312 395.039062 230.449219 405.066406 247.828125 C 415.089844 230.347656 428.800781 215.21875 445.578125 203.460938 C 468.695312 187.105469 495.804688 178.519531 523.835938 178.519531 C 599.332031 178.519531 660.816406 239.957031 660.816406 315.402344 L 660.816406 315.503906 C 660.507812 348.417969 646.902344 385.425781 620.304688 425.601562 C 599.4375 457.085938 570.585938 490.617188 534.375 525.476562 C 473.09375 584.460938 411.101562 627.191406 410.488281 627.601562 Z M 286.296875 197.636719 C 221.335938 197.636719 168.445312 250.488281 168.445312 315.402344 C 168.445312 344.738281 180.824219 378.371094 205.273438 415.378906 C 225.222656 445.636719 253.253906 478.144531 288.445312 511.878906 C 338.265625 559.621094 388.800781 596.523438 405.066406 607.972656 C 421.332031 596.421875 471.5625 559.3125 521.277344 511.472656 C 556.367188 477.632812 584.296875 445.230469 604.347656 414.96875 C 628.796875 377.964844 641.378906 344.535156 641.582031 315.402344 C 641.582031 250.488281 588.695312 197.738281 523.734375 197.738281 C 475.550781 197.738281 431.460938 228.199219 413.863281 273.589844 L 404.964844 296.691406 L 396.164062 273.589844 C 378.570312 228.199219 334.480469 197.636719 286.296875 197.636719 Z M 286.296875 197.636719 "  fill-opacity="1" fill-rule="nonzero"/></g></svg>
						</div>
						<div class="cardUniversitySearchResult--center" id="cardUniversitySearchResult--centerShort${index}">
							<div class="cardUniversitySearchResultN10--description " >${descriptionReduced}
							<div id="cardUniversitySearchResultArrowMore${index}" class="cardUniversitySearchResultArrowMore">
							<img src="../../Assets/arrows/Chevron-down-solid.svg" />
							</div>
							</div>
							<div class="cardUniversitySearchResultN10--name">${item.University}</div>
						</div>
						<div class="cardUniversitySearchResult--center cardUniversitySearchResult--center--hide" id="cardUniversitySearchResult--centerLong${index}">
							<div class="cardUniversitySearchResultN10--description" >${item.Description}
								<div id="cardUniversitySearchResultArrowLess${index}" class="cardUniversitySearchResultArrowLess">
								<img src="../../Assets/arrows/Chevron-down-solid.svg" />
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
							<svg class="cardUniversitySearchResult--fav" id="cardUniversitySearchResult--fav--grey${index}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1080" zoomAndPan="magnify" viewBox="0 0 810 809.999993" height="1080" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="id1"><path d="M 149.316406 178.398438 L 660.816406 178.398438 L 660.816406 631.398438 L 149.316406 631.398438 Z M 149.316406 178.398438 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#id1)"><path fill="#a7a7a7" d="M 405.066406 631.28125 L 399.644531 627.601562 C 399.03125 627.191406 336.730469 584.667969 275.351562 525.886719 C 239.136719 491.128906 210.183594 457.597656 189.316406 426.113281 C 162.820312 385.835938 149.316406 348.523438 149.316406 315.402344 C 149.316406 239.957031 210.796875 178.519531 286.296875 178.519531 C 314.324219 178.519531 341.433594 187.105469 364.554688 203.460938 C 381.332031 215.320312 395.039062 230.449219 405.066406 247.828125 C 415.089844 230.347656 428.800781 215.21875 445.578125 203.460938 C 468.695312 187.105469 495.804688 178.519531 523.835938 178.519531 C 599.332031 178.519531 660.816406 239.957031 660.816406 315.402344 L 660.816406 315.503906 C 660.507812 348.417969 646.902344 385.425781 620.304688 425.601562 C 599.4375 457.085938 570.585938 490.617188 534.375 525.476562 C 473.09375 584.460938 411.101562 627.191406 410.488281 627.601562 Z M 286.296875 197.636719 C 221.335938 197.636719 168.445312 250.488281 168.445312 315.402344 C 168.445312 344.738281 180.824219 378.371094 205.273438 415.378906 C 225.222656 445.636719 253.253906 478.144531 288.445312 511.878906 C 338.265625 559.621094 388.800781 596.523438 405.066406 607.972656 C 421.332031 596.421875 471.5625 559.3125 521.277344 511.472656 C 556.367188 477.632812 584.296875 445.230469 604.347656 414.96875 C 628.796875 377.964844 641.378906 344.535156 641.582031 315.402344 C 641.582031 250.488281 588.695312 197.738281 523.734375 197.738281 C 475.550781 197.738281 431.460938 228.199219 413.863281 273.589844 L 404.964844 296.691406 L 396.164062 273.589844 C 378.570312 228.199219 334.480469 197.636719 286.296875 197.636719 Z M 286.296875 197.636719 "  fill-opacity="1" fill-rule="nonzero"/></g></svg>
							<svg class="cardUniversitySearchResult--fav hideBox" id="cardUniversitySearchResult--fav--red${index}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1080" zoomAndPan="magnify" viewBox="0 0 810 809.999993" height="1080" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="id1"><path d="M 149.316406 178.398438 L 660.816406 178.398438 L 660.816406 631.398438 L 149.316406 631.398438 Z M 149.316406 178.398438 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#id1)"><path fill="#ed4956" d="M 405.066406 631.28125 L 399.644531 627.601562 C 399.03125 627.191406 336.730469 584.667969 275.351562 525.886719 C 239.136719 491.128906 210.183594 457.597656 189.316406 426.113281 C 162.820312 385.835938 149.316406 348.523438 149.316406 315.402344 C 149.316406 239.957031 210.796875 178.519531 286.296875 178.519531 C 314.324219 178.519531 341.433594 187.105469 364.554688 203.460938 C 381.332031 215.320312 395.039062 230.449219 405.066406 247.828125 C 415.089844 230.347656 428.800781 215.21875 445.578125 203.460938 C 468.695312 187.105469 495.804688 178.519531 523.835938 178.519531 C 599.332031 178.519531 660.816406 239.957031 660.816406 315.402344 L 660.816406 315.503906 C 660.507812 348.417969 646.902344 385.425781 620.304688 425.601562 C 599.4375 457.085938 570.585938 490.617188 534.375 525.476562 C 473.09375 584.460938 411.101562 627.191406 410.488281 627.601562 Z M 286.296875 197.636719 C 221.335938 197.636719 168.445312 250.488281 168.445312 315.402344 C 168.445312 344.738281 180.824219 378.371094 205.273438 415.378906 C 225.222656 445.636719 253.253906 478.144531 288.445312 511.878906 C 338.265625 559.621094 388.800781 596.523438 405.066406 607.972656 C 421.332031 596.421875 471.5625 559.3125 521.277344 511.472656 C 556.367188 477.632812 584.296875 445.230469 604.347656 414.96875 C 628.796875 377.964844 641.378906 344.535156 641.582031 315.402344 C 641.582031 250.488281 588.695312 197.738281 523.734375 197.738281 C 475.550781 197.738281 431.460938 228.199219 413.863281 273.589844 L 404.964844 296.691406 L 396.164062 273.589844 C 378.570312 228.199219 334.480469 197.636719 286.296875 197.636719 Z M 286.296875 197.636719 "  fill-opacity="1" fill-rule="nonzero"/></g></svg>
						</div>
						<div class="cardUniversitySearchResult--center" id="cardUniversitySearchResult--centerShort${index}">
						<div class="cardUniversitySearchResultN11--name">${item.University}</div>
							<div class="cardUniversitySearchResultN11--description " >${descriptionReduced}
							<div id="cardUniversitySearchResultArrowMore${index}" class="cardUniversitySearchResultArrowMore">
							<img src="../../Assets/arrows/Chevron-down-solid.svg" />
							</div>
							</div>
						</div>
						<div class="cardUniversitySearchResult--center cardUniversitySearchResult--center--hide" id="cardUniversitySearchResult--centerLong${index}">
							<div class="cardUniversitySearchResultN11--name">${item.University}</div>
							<div class="cardUniversitySearchResultN11--description " >${item.Description}
								<div id="cardUniversitySearchResultArrowLess${index}" class="cardUniversitySearchResultArrowLess">
								<img src="../../Assets/arrows/Chevron-down-solid.svg" />
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
							<svg class="cardUniversitySearchResult--fav" id="cardUniversitySearchResult--fav--grey${index}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1080" zoomAndPan="magnify" viewBox="0 0 810 809.999993" height="1080" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="id1"><path d="M 149.316406 178.398438 L 660.816406 178.398438 L 660.816406 631.398438 L 149.316406 631.398438 Z M 149.316406 178.398438 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#id1)"><path fill="#a7a7a7" d="M 405.066406 631.28125 L 399.644531 627.601562 C 399.03125 627.191406 336.730469 584.667969 275.351562 525.886719 C 239.136719 491.128906 210.183594 457.597656 189.316406 426.113281 C 162.820312 385.835938 149.316406 348.523438 149.316406 315.402344 C 149.316406 239.957031 210.796875 178.519531 286.296875 178.519531 C 314.324219 178.519531 341.433594 187.105469 364.554688 203.460938 C 381.332031 215.320312 395.039062 230.449219 405.066406 247.828125 C 415.089844 230.347656 428.800781 215.21875 445.578125 203.460938 C 468.695312 187.105469 495.804688 178.519531 523.835938 178.519531 C 599.332031 178.519531 660.816406 239.957031 660.816406 315.402344 L 660.816406 315.503906 C 660.507812 348.417969 646.902344 385.425781 620.304688 425.601562 C 599.4375 457.085938 570.585938 490.617188 534.375 525.476562 C 473.09375 584.460938 411.101562 627.191406 410.488281 627.601562 Z M 286.296875 197.636719 C 221.335938 197.636719 168.445312 250.488281 168.445312 315.402344 C 168.445312 344.738281 180.824219 378.371094 205.273438 415.378906 C 225.222656 445.636719 253.253906 478.144531 288.445312 511.878906 C 338.265625 559.621094 388.800781 596.523438 405.066406 607.972656 C 421.332031 596.421875 471.5625 559.3125 521.277344 511.472656 C 556.367188 477.632812 584.296875 445.230469 604.347656 414.96875 C 628.796875 377.964844 641.378906 344.535156 641.582031 315.402344 C 641.582031 250.488281 588.695312 197.738281 523.734375 197.738281 C 475.550781 197.738281 431.460938 228.199219 413.863281 273.589844 L 404.964844 296.691406 L 396.164062 273.589844 C 378.570312 228.199219 334.480469 197.636719 286.296875 197.636719 Z M 286.296875 197.636719 "  fill-opacity="1" fill-rule="nonzero"/></g></svg>
							<svg class="cardUniversitySearchResult--fav hideBox" id="cardUniversitySearchResult--fav--red${index}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1080" zoomAndPan="magnify" viewBox="0 0 810 809.999993" height="1080" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="id1"><path d="M 149.316406 178.398438 L 660.816406 178.398438 L 660.816406 631.398438 L 149.316406 631.398438 Z M 149.316406 178.398438 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#id1)"><path fill="#ed4956" d="M 405.066406 631.28125 L 399.644531 627.601562 C 399.03125 627.191406 336.730469 584.667969 275.351562 525.886719 C 239.136719 491.128906 210.183594 457.597656 189.316406 426.113281 C 162.820312 385.835938 149.316406 348.523438 149.316406 315.402344 C 149.316406 239.957031 210.796875 178.519531 286.296875 178.519531 C 314.324219 178.519531 341.433594 187.105469 364.554688 203.460938 C 381.332031 215.320312 395.039062 230.449219 405.066406 247.828125 C 415.089844 230.347656 428.800781 215.21875 445.578125 203.460938 C 468.695312 187.105469 495.804688 178.519531 523.835938 178.519531 C 599.332031 178.519531 660.816406 239.957031 660.816406 315.402344 L 660.816406 315.503906 C 660.507812 348.417969 646.902344 385.425781 620.304688 425.601562 C 599.4375 457.085938 570.585938 490.617188 534.375 525.476562 C 473.09375 584.460938 411.101562 627.191406 410.488281 627.601562 Z M 286.296875 197.636719 C 221.335938 197.636719 168.445312 250.488281 168.445312 315.402344 C 168.445312 344.738281 180.824219 378.371094 205.273438 415.378906 C 225.222656 445.636719 253.253906 478.144531 288.445312 511.878906 C 338.265625 559.621094 388.800781 596.523438 405.066406 607.972656 C 421.332031 596.421875 471.5625 559.3125 521.277344 511.472656 C 556.367188 477.632812 584.296875 445.230469 604.347656 414.96875 C 628.796875 377.964844 641.378906 344.535156 641.582031 315.402344 C 641.582031 250.488281 588.695312 197.738281 523.734375 197.738281 C 475.550781 197.738281 431.460938 228.199219 413.863281 273.589844 L 404.964844 296.691406 L 396.164062 273.589844 C 378.570312 228.199219 334.480469 197.636719 286.296875 197.636719 Z M 286.296875 197.636719 "  fill-opacity="1" fill-rule="nonzero"/></g></svg>
						</div>
						<div class="cardUniversitySearchResult--center" id="cardUniversitySearchResult--centerShort${index}">
							<div class="cardUniversitySearchResultN12--description " >${descriptionReduced}
							<div id="cardUniversitySearchResultArrowMore${index}" class="cardUniversitySearchResultArrowMore">
							<img src="../../Assets/arrows/Chevron-down-solid.svg" />
							</div>
							</div>
							<div class="cardUniversitySearchResultN12--name">${item.University}</div>
						</div>
						<div class="cardUniversitySearchResult--center cardUniversitySearchResult--center--hide" id="cardUniversitySearchResult--centerLong${index}">
							<div class="cardUniversitySearchResultN12--description " >${item.Description}
								<div id="cardUniversitySearchResultArrowLess${index}" class="cardUniversitySearchResultArrowLess">
								<img src="../../Assets/arrows/Chevron-down-solid.svg" />
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
							<svg class="cardUniversitySearchResult--fav" id="cardUniversitySearchResult--fav--grey${index}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1080" zoomAndPan="magnify" viewBox="0 0 810 809.999993" height="1080" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="id1"><path d="M 149.316406 178.398438 L 660.816406 178.398438 L 660.816406 631.398438 L 149.316406 631.398438 Z M 149.316406 178.398438 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#id1)"><path fill="#a7a7a7" d="M 405.066406 631.28125 L 399.644531 627.601562 C 399.03125 627.191406 336.730469 584.667969 275.351562 525.886719 C 239.136719 491.128906 210.183594 457.597656 189.316406 426.113281 C 162.820312 385.835938 149.316406 348.523438 149.316406 315.402344 C 149.316406 239.957031 210.796875 178.519531 286.296875 178.519531 C 314.324219 178.519531 341.433594 187.105469 364.554688 203.460938 C 381.332031 215.320312 395.039062 230.449219 405.066406 247.828125 C 415.089844 230.347656 428.800781 215.21875 445.578125 203.460938 C 468.695312 187.105469 495.804688 178.519531 523.835938 178.519531 C 599.332031 178.519531 660.816406 239.957031 660.816406 315.402344 L 660.816406 315.503906 C 660.507812 348.417969 646.902344 385.425781 620.304688 425.601562 C 599.4375 457.085938 570.585938 490.617188 534.375 525.476562 C 473.09375 584.460938 411.101562 627.191406 410.488281 627.601562 Z M 286.296875 197.636719 C 221.335938 197.636719 168.445312 250.488281 168.445312 315.402344 C 168.445312 344.738281 180.824219 378.371094 205.273438 415.378906 C 225.222656 445.636719 253.253906 478.144531 288.445312 511.878906 C 338.265625 559.621094 388.800781 596.523438 405.066406 607.972656 C 421.332031 596.421875 471.5625 559.3125 521.277344 511.472656 C 556.367188 477.632812 584.296875 445.230469 604.347656 414.96875 C 628.796875 377.964844 641.378906 344.535156 641.582031 315.402344 C 641.582031 250.488281 588.695312 197.738281 523.734375 197.738281 C 475.550781 197.738281 431.460938 228.199219 413.863281 273.589844 L 404.964844 296.691406 L 396.164062 273.589844 C 378.570312 228.199219 334.480469 197.636719 286.296875 197.636719 Z M 286.296875 197.636719 "  fill-opacity="1" fill-rule="nonzero"/></g></svg>
							<svg class="cardUniversitySearchResult--fav hideBox" id="cardUniversitySearchResult--fav--red${index}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1080" zoomAndPan="magnify" viewBox="0 0 810 809.999993" height="1080" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="id1"><path d="M 149.316406 178.398438 L 660.816406 178.398438 L 660.816406 631.398438 L 149.316406 631.398438 Z M 149.316406 178.398438 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#id1)"><path fill="#ed4956" d="M 405.066406 631.28125 L 399.644531 627.601562 C 399.03125 627.191406 336.730469 584.667969 275.351562 525.886719 C 239.136719 491.128906 210.183594 457.597656 189.316406 426.113281 C 162.820312 385.835938 149.316406 348.523438 149.316406 315.402344 C 149.316406 239.957031 210.796875 178.519531 286.296875 178.519531 C 314.324219 178.519531 341.433594 187.105469 364.554688 203.460938 C 381.332031 215.320312 395.039062 230.449219 405.066406 247.828125 C 415.089844 230.347656 428.800781 215.21875 445.578125 203.460938 C 468.695312 187.105469 495.804688 178.519531 523.835938 178.519531 C 599.332031 178.519531 660.816406 239.957031 660.816406 315.402344 L 660.816406 315.503906 C 660.507812 348.417969 646.902344 385.425781 620.304688 425.601562 C 599.4375 457.085938 570.585938 490.617188 534.375 525.476562 C 473.09375 584.460938 411.101562 627.191406 410.488281 627.601562 Z M 286.296875 197.636719 C 221.335938 197.636719 168.445312 250.488281 168.445312 315.402344 C 168.445312 344.738281 180.824219 378.371094 205.273438 415.378906 C 225.222656 445.636719 253.253906 478.144531 288.445312 511.878906 C 338.265625 559.621094 388.800781 596.523438 405.066406 607.972656 C 421.332031 596.421875 471.5625 559.3125 521.277344 511.472656 C 556.367188 477.632812 584.296875 445.230469 604.347656 414.96875 C 628.796875 377.964844 641.378906 344.535156 641.582031 315.402344 C 641.582031 250.488281 588.695312 197.738281 523.734375 197.738281 C 475.550781 197.738281 431.460938 228.199219 413.863281 273.589844 L 404.964844 296.691406 L 396.164062 273.589844 C 378.570312 228.199219 334.480469 197.636719 286.296875 197.636719 Z M 286.296875 197.636719 "  fill-opacity="1" fill-rule="nonzero"/></g></svg>
						</div>
						<div class="cardUniversitySearchResult--center" id="cardUniversitySearchResult--centerShort${index}">
							<div class="cardUniversitySearchResultN13--name">${item.University}</div>
							<div class="cardUniversitySearchResultN13--description " >${descriptionReduced}
							<div id="cardUniversitySearchResultArrowMore${index}" class="cardUniversitySearchResultArrowMore">
							<img src="../../Assets/arrows/Chevron-down-solid.svg" />
							</div></div>
						</div>
						<div class="cardUniversitySearchResult--center cardUniversitySearchResult--center--hide" id="cardUniversitySearchResult--centerLong${index}">
							<div class="cardUniversitySearchResultN13--name">${item.University}</div>
							<div class="cardUniversitySearchResultN13--description " >${item.Description}
								<div id="cardUniversitySearchResultArrowLess${index}" class="cardUniversitySearchResultArrowLess">
								<img src="../../Assets/arrows/Chevron-down-solid.svg" />
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
							<svg class="cardUniversitySearchResult--fav" id="cardUniversitySearchResult--fav--grey${index}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1080" zoomAndPan="magnify" viewBox="0 0 810 809.999993" height="1080" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="id1"><path d="M 149.316406 178.398438 L 660.816406 178.398438 L 660.816406 631.398438 L 149.316406 631.398438 Z M 149.316406 178.398438 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#id1)"><path fill="#a7a7a7" d="M 405.066406 631.28125 L 399.644531 627.601562 C 399.03125 627.191406 336.730469 584.667969 275.351562 525.886719 C 239.136719 491.128906 210.183594 457.597656 189.316406 426.113281 C 162.820312 385.835938 149.316406 348.523438 149.316406 315.402344 C 149.316406 239.957031 210.796875 178.519531 286.296875 178.519531 C 314.324219 178.519531 341.433594 187.105469 364.554688 203.460938 C 381.332031 215.320312 395.039062 230.449219 405.066406 247.828125 C 415.089844 230.347656 428.800781 215.21875 445.578125 203.460938 C 468.695312 187.105469 495.804688 178.519531 523.835938 178.519531 C 599.332031 178.519531 660.816406 239.957031 660.816406 315.402344 L 660.816406 315.503906 C 660.507812 348.417969 646.902344 385.425781 620.304688 425.601562 C 599.4375 457.085938 570.585938 490.617188 534.375 525.476562 C 473.09375 584.460938 411.101562 627.191406 410.488281 627.601562 Z M 286.296875 197.636719 C 221.335938 197.636719 168.445312 250.488281 168.445312 315.402344 C 168.445312 344.738281 180.824219 378.371094 205.273438 415.378906 C 225.222656 445.636719 253.253906 478.144531 288.445312 511.878906 C 338.265625 559.621094 388.800781 596.523438 405.066406 607.972656 C 421.332031 596.421875 471.5625 559.3125 521.277344 511.472656 C 556.367188 477.632812 584.296875 445.230469 604.347656 414.96875 C 628.796875 377.964844 641.378906 344.535156 641.582031 315.402344 C 641.582031 250.488281 588.695312 197.738281 523.734375 197.738281 C 475.550781 197.738281 431.460938 228.199219 413.863281 273.589844 L 404.964844 296.691406 L 396.164062 273.589844 C 378.570312 228.199219 334.480469 197.636719 286.296875 197.636719 Z M 286.296875 197.636719 "  fill-opacity="1" fill-rule="nonzero"/></g></svg>
							<svg class="cardUniversitySearchResult--fav hideBox" id="cardUniversitySearchResult--fav--red${index}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1080" zoomAndPan="magnify" viewBox="0 0 810 809.999993" height="1080" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="id1"><path d="M 149.316406 178.398438 L 660.816406 178.398438 L 660.816406 631.398438 L 149.316406 631.398438 Z M 149.316406 178.398438 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#id1)"><path fill="#ed4956" d="M 405.066406 631.28125 L 399.644531 627.601562 C 399.03125 627.191406 336.730469 584.667969 275.351562 525.886719 C 239.136719 491.128906 210.183594 457.597656 189.316406 426.113281 C 162.820312 385.835938 149.316406 348.523438 149.316406 315.402344 C 149.316406 239.957031 210.796875 178.519531 286.296875 178.519531 C 314.324219 178.519531 341.433594 187.105469 364.554688 203.460938 C 381.332031 215.320312 395.039062 230.449219 405.066406 247.828125 C 415.089844 230.347656 428.800781 215.21875 445.578125 203.460938 C 468.695312 187.105469 495.804688 178.519531 523.835938 178.519531 C 599.332031 178.519531 660.816406 239.957031 660.816406 315.402344 L 660.816406 315.503906 C 660.507812 348.417969 646.902344 385.425781 620.304688 425.601562 C 599.4375 457.085938 570.585938 490.617188 534.375 525.476562 C 473.09375 584.460938 411.101562 627.191406 410.488281 627.601562 Z M 286.296875 197.636719 C 221.335938 197.636719 168.445312 250.488281 168.445312 315.402344 C 168.445312 344.738281 180.824219 378.371094 205.273438 415.378906 C 225.222656 445.636719 253.253906 478.144531 288.445312 511.878906 C 338.265625 559.621094 388.800781 596.523438 405.066406 607.972656 C 421.332031 596.421875 471.5625 559.3125 521.277344 511.472656 C 556.367188 477.632812 584.296875 445.230469 604.347656 414.96875 C 628.796875 377.964844 641.378906 344.535156 641.582031 315.402344 C 641.582031 250.488281 588.695312 197.738281 523.734375 197.738281 C 475.550781 197.738281 431.460938 228.199219 413.863281 273.589844 L 404.964844 296.691406 L 396.164062 273.589844 C 378.570312 228.199219 334.480469 197.636719 286.296875 197.636719 Z M 286.296875 197.636719 "  fill-opacity="1" fill-rule="nonzero"/></g></svg>
						</div>
						<div class="cardUniversitySearchResult--center" id="cardUniversitySearchResult--centerShort${index}">
							<div class="cardUniversitySearchResultN14--description " >${descriptionReduced}
							<div id="cardUniversitySearchResultArrowMore${index}" class="cardUniversitySearchResultArrowMore">
							<img src="../../Assets/arrows/Chevron-down-solid.svg" />
							</div></div>
							<div class="cardUniversitySearchResultN14--name">${item.University}</div>
						</div>
						<div class="cardUniversitySearchResult--center cardUniversitySearchResult--center--hide" id="cardUniversitySearchResult--centerLong${index}">
							<div class="cardUniversitySearchResultN14--description " >${item.Description}
								<div id="cardUniversitySearchResultArrowLess${index}" class="cardUniversitySearchResultArrowLess">
								<img src="../../Assets/arrows/Chevron-down-solid.svg" />
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
