//Front
export const InputRules = [
	{
		id: "email",
		labelText: "Email",
		type: "email",
		rules: {
			required: "Email 為必填",
			pattern: {
				value: /^\S+@\S+$/i,
				message: "Email 格式不正確",
			},
		},
	},
	{
		id: "name",
		labelText: "Username",
		type: "text",
		rules: {
			required: "使用者名稱為必填",
			maxLength: {
				value: 10,
				message: "使用者名稱長度不超過 10",
			},
		},
	},
	{
		id: "tel",
		labelText: "Tel",
		type: "tel",
		rules: {
			required: "電話為必填",
			minLength: {
				value: 6,
				message: "電話不少於 6 碼",
			},
			maxLength: {
				value: 12,
				message: "電話不超過 12 碼",
			},
		},
	},
	{
		id: "address",
		labelText: "Address",
		type: "text",
		rules: {
			required: "地址為必填",
		},
	},
];

export const CheckRules = [
	{
		id: "payRadios1",
		name: "payRadio",
		value: "WebATM",
		labelText: "WebATM",
		rules: {
			required: true,
		},
	},
	{
		id: "payRadios2",
		name: "payRadio",
		value: "ATM",
		labelText: "ATM",
		rules: {
			required: true,
		},
	},
	{
		id: "payRadios3",
		name: "payRadio",
		value: "ApplePay",
		labelText: "ApplePay",
		rules: {
			required: true,
		},
	},
];
