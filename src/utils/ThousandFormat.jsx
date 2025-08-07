export const thousandFormat = (value) => {
	//千分位 方法1
	// if (isNaN(value)) return;
	// return parseInt(value).toLocaleString();

	//千分位 方法2
	if (isNaN(value)) return;
	const regex = /\B(?=(\d{3})+(?!\d))/g;
	return value.toString().replace(regex, ",");
};
