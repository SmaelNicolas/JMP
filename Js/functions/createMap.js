import { getLatitudeLongitude } from "./getLatitudeLongitude.js";

export const createMap = async (fullAdress, index) => {
	let { latitud, longitud } = await getLatitudeLongitude(fullAdress);

	mapboxgl.accessToken =
		"pk.eyJ1Ijoibmljb3NtYWVsIiwiYSI6ImNreWQzYWNwOTB2ODYydW1mcjFvcDY1ZjYifQ.AXIIQORuME-mafLfuH9vBg";
	const map = new mapboxgl.Map({
		container: `map${index}`,
		// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
		style: "mapbox://styles/nicosmael/cla2f1ozo000w14nudmazwnku",
		center: [latitud, longitud],
		zoom: 12,
	});

	const marker1 = new mapboxgl.Marker({ color: "#E3325E" })
		.setLngLat([latitud, longitud])
		.addTo(map);
};
