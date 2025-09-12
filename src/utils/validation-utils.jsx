//設定提醒CapsLock是否作用
export const SubmitKey = (submit) => {
	return (e) => {
		e.getModifierState("CapsLock") && alert("CapsLock is on");
		if (e.key === "Enter") {
			submit();
		}
	};
}
