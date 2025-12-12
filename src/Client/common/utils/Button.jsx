
export const ClickedButton = ({ className, style, action, content }) => {
	return (
		<button
			type='button'
			className={`btn hover-btn ${className}`}
			style={{
				...style,
			}}
			onClick={action}
		>
			{content}
		</button>
	);
};

export const SubmitButton = ({ className, style, action, text }) => {
	return (
		<button
			type='submit'
			className={`btn hover-btn ${className}`}
			style={{
				...style,
			}}
			onClick={action}
		>
			{text}
		</button>
	);
};