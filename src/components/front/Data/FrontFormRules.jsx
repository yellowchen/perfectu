//Front
export const InputRules = [
	{
		id: "name",
		labelText: "使用者名稱",
		type: "text",
		placeholder: "",
		rules: {
			required: "使用者名稱為必填",
			maxLength: {
				value: 10,
				message: "使用者名稱長度不超過 10",
			},
		},
	},
	{
		id: "email",
		labelText: "電子信箱",
		type: "email",
		placeholder: "perfectu@gmail.com",
		rules: {
			required: "Email 為必填",
			pattern: {
				value: /^\S+@\S+$/i,
				message: "Email 格式不正確",
			},
		},
	},
	{
		id: "tel",
		labelText: "手機號碼",
		type: "tel",
		placeholder: "09xx-xxx-xxx",
		rules: {
			required: "手機為必填",
			pattern: {
				value: /^09\d{2}-\d{3}-\d{3}$/,
				message: "手機格式不正確",
			},
		},
	},
	// {
	// 	id: "address",
	// 	labelText: "地址",
	// 	type: "text",
	// 	placeholder: "",
	// 	rules: {
	// 		required: "地址為必填",
	// 	},
	// },
];

export const CheckRules = [
	{
		id: "payRadios1",
		name: "payRadio",
		value: "WebATM",
		labelText: "網路ATM",
		rules: {
			required: "",
		},
	},
	{
		id: "payRadios2",
		name: "payRadio",
		value: "ATM",
		labelText: "實體ATM",
		rules: {
			required: true,
		},
	},
	{
		id: "payRadios3",
		name: "payRadio",
		value: "ApplePay",
		labelText: "Apple Pay",
		rules: {
			required: true,
		},
	},
];
