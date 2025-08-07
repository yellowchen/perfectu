export function SubmitKey(submit) {
	return (e) => {
		// console.log(e.key);
		e.getModifierState("CapsLock") && alert("CapsLock is on");
		if (e.key === "Enter") {
			submit();
		}
	};
}
