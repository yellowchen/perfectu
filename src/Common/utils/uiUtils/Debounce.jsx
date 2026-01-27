export const debounce = (func, wait = 10, immediate = true) => {
	//設定immediate為true，會讓debounce在wait時間開始計算之前就觸發函數（也就是沒有任何延遲就觸發函數），根據immediate的值來決定如何執行func
	//A.
    //B.如果是immediate的情況下，我們立即執行func，並在wait時間內鎖住func的執行，wait時間之後再觸發，才會重新執行func

	let timeout;
	return function () {
		// reference the context and args for the setTimeout function
		let context = this, //輸入的物件會被指定為目標函式中的 this
			args = arguments; //一個 array-like 物件 ，定義了fun要呼叫的一組參數

		//apply to調用具有給定this的函式，將參數已類陣列的方式傳入

		//wait時間已過
		let later = function () {
			timeout = null; //wait時間已過，timeout被更新為null (刪除 timeoutID)
			if (!immediate) func.apply(context, args); //A.不立即執行，隔wait秒數後再執行
		};

		// Should the function be called now?
		// If immediate is true + not already in a timeout --> then the answer is
		let callNow = immediate && !timeout;

		clearTimeout(timeout); //清空上次的計時器
		timeout = setTimeout(later, wait); //新設置計時器

		if (callNow) func.apply(context, args); //B.立即執行，下次再隔wait(20s)
	};
};
