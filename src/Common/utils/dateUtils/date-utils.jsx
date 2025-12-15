//dateAddZero
export const dateAddZero = (date) => {
	return date.toString().padStart(2, 0);
};


//FormatDate
export const FormatDate = (date) => {
	return `${date.getFullYear().toString()}-${dateAddZero(
		date.getMonth() + 1
	)}-${dateAddZero(date.getDate())}`;
};

export const FormatDateTimesK = (date) => {
<<<<<<< HEAD
	return `${new Date(date * 1000).getFullYear().toString()}-${dateAddZero(
=======
	return `${new Date(date * 1000).getFullYear().toString()} - ${dateAddZero(
>>>>>>> fa0893d2817b34e3143d9e09954c0a8f74d06685
		new Date(date * 1000).getMonth() + 1
	)}-${dateAddZero(new Date(date * 1000).getDate())}`;
};