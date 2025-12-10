//設定日期格式為雙位數
export const dateAddZero = (date) => {
	return date.toString().padStart(2, 0);
	//padStart(要補全的長度,用來捕全的內容);
};


export const FormatDate = (date) => {
	return `${new Date(date * 1000).getFullYear().toString()} - ${dateAddZero(
		new Date(date * 1000).getMonth() + 1
	)} - ${dateAddZero(new Date(date * 1000).getDate())}`;
};