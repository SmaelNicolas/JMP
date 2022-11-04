export const reduceString = (str) => {
	//FUNCION QUE REDUCE LA DESCRIPCION
	return str.length > 51 ? str.slice(0, 47).concat("...") : str;
};

export const reduceStreet = (str) => {
	//FUNCION QUE REDUCE LA DIRECCION

	if (str.length > 10) {
		str = [str.slice(0, 10), " ", str.slice(10)].join("");
	}
	return str.length > 34 ? str.slice(0, 31).concat("...") : str;
};
