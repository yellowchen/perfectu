export const LoginRules = [
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
		id: "password",
		labelText: "password",
		type: "password",
		rules: {
			required: "密碼為必填",
			minLength: {
				value: 5,
				message: "密碼長度過短",
			},
		},
	},
];
