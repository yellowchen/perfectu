//設定日期格式為雙位數
export const dateAddZero = (data) => {
	return data.toString().padStart(2, 0);
	//padStart(要補全的長度,用來捕全的內容);
};
