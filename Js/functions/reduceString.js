export const reduceString = (str) => {
	return str.length > 51 ? str.slice(0, 47).concat("...") : str;
};
