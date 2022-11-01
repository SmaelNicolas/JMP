export const reduceString = (str) => {
	return str.length > 51 ? str.slice(0, 47).concat("...") : str;
};

export const reduceStreet = (str) => {
	return str.length > 24 ? str.slice(0, 21).concat("...") : str;
};
