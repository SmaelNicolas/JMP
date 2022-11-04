import { getLatitudeLongitude } from "./getLatitudeLongitude.js";

//FUNCION QUE CREA EL MAPA.
//RECIBE UNA DIRECCION COMPLETA (CALLE+CIUDAD+PAIS) Y LLAMA A LA FUNCION PARA OBTENER LA LATITUD Y LONGITUD NECESARIAS PARA RENDERIZAR LA IMAGEN DEL MAPA
//RECIBE UN INDEX CORRESPONDIENTE A LA CARD DONDE VA A RENDERIZAR EL MAPA.
export const createMap = async (fullAdress, index) => {
	// FUNCION QUE CONSULTA A LA API geoapify.com CON UNA DIRRECION PARA OBTENER COORDENADAS
	let { latitud, longitud } = await getLatitudeLongitude(fullAdress);

	//SECCION https://www.mapbox.com/
	//ACCESSTOKEN EQUIVALE A LA LLAVE PUBLICA QUE BRINDA LA WEB, EN LA SECCION Default Public Token
	// CONTAINER ES EL ID DEL CONTENEDOR DONDE SE VA A RENDERIZAR EL  MAPA EN CADA CARD. INDEX VARIA SEGUN LA CARD
	//STYLE ES DONDE VA EL URL DEL DISEÑO DEL MAPA. SI SE CREA UN CUSTOM MAP , EL LINK DE ESTE MISMO DEBERIA IR AHI
	//CENTER ES LA POSICION DONDE CENTRA Y MUESTRA EL MARCADOR
	//ZOOM ES LA DISTACIA QUE SE VE EN EL MAPA. MENOS ZOOM MAS LEJOS SE VE
	//MARKER ES EL ICONO DE UBICACION.

	mapboxgl.accessToken =
		"pk.eyJ1Ijoibmljb3NtYWVsIiwiYSI6ImNreWQzYWNwOTB2ODYydW1mcjFvcDY1ZjYifQ.AXIIQORuME-mafLfuH9vBg";
	const map = new mapboxgl.Map({
		container: `map${index}`,
		// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
		style: "mapbox://styles/nicosmael/cla2f1ozo000w14nudmazwnku",
		center: [latitud, longitud],
		zoom: 12,
	});

	new mapboxgl.Marker({ color: "#E3325E" })
		.setLngLat([latitud, longitud])
		.addTo(map);
};
