//設定indicator至字串尾端
export const setTextIndicator = (tagInputRef) => {
	let range = document.createRange();
	let select = window.getSelection();
	range.setStart(tagInputRef.current.childNodes[0], tagInputRef.current.textContent.length);
	range.collapse(true);
	select.removeAllRanges();
	select.addRange(range);
	tagInputRef.current.focus();
};
