import { getLatitudeLongitude } from "./getLatitudeLongitude.js";

export const createMap = async (fullAdress, index) => {
	let { latitud, longitud } = await getLatitudeLongitude(fullAdress);

	mapboxgl.accessToken =
		"pk.eyJ1Ijoibmljb3NtYWVsIiwiYSI6ImNreWQzYWNwOTB2ODYydW1mcjFvcDY1ZjYifQ.AXIIQORuME-mafLfuH9vBg";
	const map = new mapboxgl.Map({
		container: `map${index}`,
		// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
		style: "mapbox://styles/mapbox/streets-v11",
		center: [latitud, longitud],
		zoom: 15,
	});

	const marker1 = new mapboxgl.Marker()
		.setLngLat([latitud, longitud])
		.addTo(map);

	// const marker2 = new mapboxgl.Marker({ color: "black", rotation: 45 })
	// 	.setLngLat([-61.541938, -39.002735])
	// 	.addTo(map);
};
