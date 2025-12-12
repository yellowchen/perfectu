//dateAddZero
export const dateAddZero = (date) => {
	return date.toString().padStart(2, 0);
};


//FormatDate
export const FormatDate = (date) => {
	return `${new Date(date * 1000).getFullYear().toString()} - ${dateAddZero(
		new Date(date * 1000).getMonth() + 1
	)} - ${dateAddZero(new Date(date * 1000).getDate())}`;
};