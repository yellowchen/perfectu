//設定千分位
export const thousandFormat = (value) => {
	//千分位 方法1
	// if (isNaN(value)) return;
	// return parseInt(value).toLocaleString();

	//千分位 方法2
	if (isNaN(value)) return;
	const regex = /\B(?=(\d{3})+(?!\d))/g;
	return value.toString().replace(regex, ",");
};

//設定indicator至字串尾端
export const setTextIndicator = (tagInputRef) => {
	let range = document.createRange();
	let select = window.getSelection();
	range.setStart(tagInputRef.current.childNodes[0], tagInputRef.current.textContent.length);
	range.collapse(true);
	select.removeAllRanges();
	select.addRange(range);
	tagInputRef.current.focus();
}

export const removeAllSpace = (text) => {
    // return text.replace(/^\s+|\s+$/gm, "");
    return text.replace(/\s/g, "");
}

export const trimAllSpace = (text) => {
	return text.replace(/^\s+|\s+$/gm, "");
}