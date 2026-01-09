export const paymentCheckRules = [
	{
		id: "payRadios1",
		name: "payRadio",
		value: "creditCard",
		labelText: <i className='bi bi-credit-card-2-back fst-normal'> 信用卡</i>,
		rules: {
			required: true,
		},
	},
	{
		id: "payRadios2",
		name: "payRadio",
		value: "WebATM",
		labelText: <i className='bi bi-bank fst-normal'> 網路ATM</i>,
		rules: {
			required: true,
		},
	},
	{
		id: "payRadios3",
		name: "payRadio",
		value: "LinePay",
		labelText: <span>LINE Pay</span>,
		rules: {
			required: true,
		},
	},
	{
		id: "payRadios4",
		name: "payRadio",
		value: "ApplePay",
		labelText: <i className='bi bi-apple fst-normal'> Pay</i>,
		rules: {
			required: true,
		},
	},
	{
		id: "payRadios5",
		name: "payRadio",
		value: "GooglePay",
		labelText: <i className='bi bi-google fst-normal'> Pay</i>,
		rules: {
			required: true,
		},
	},
];
