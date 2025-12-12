export const thousandFormat = (value) => {
	if (isNaN(value)) return;
	const regex = /\B(?=(\d{3})+(?!\d))/g;
	return value.toString().replace(regex, ",");
};


export const removeAllSpace = (text) => {
    return text.replace(/\s/g, "");
}

export const trimAllSpace = (text) => {
	return text.replace(/^\s+|\s+$/gm, "");
}