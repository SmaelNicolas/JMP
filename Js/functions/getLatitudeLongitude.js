export const getLatitudeLongitude = async (query) => {
	let coordinates = {};
	let errorInApi = false;

	await fetch(
		`https://api.geoapify.com/v1/geocode/search?text=${query}&apiKey=ed205a9953a047aeb1b861457ecf9c6a`,
		{
			method: "GET",
		}
	)
		.then((response) => response.json())
		.then((result) => {
			coordinates.latitud = result.features[0].geometry.coordinates[0];
			coordinates.longitud = result.features[0].geometry.coordinates[1];
		})
		.catch((error) => (errorInApi = true));

	return coordinates;
};
