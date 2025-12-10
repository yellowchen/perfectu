
export const IconButton = ({className, style, action, icon}) => {
  return (
		<button
			type='button'
			className={`btn hover-btn icon-btn rounded-4 px-5 mx-2`}
			style={{
                ...style,
                border: "3px solid #309dc1",
                color: "#309dc1"
            }}
			onClick={action}
		>
			{icon}
		</button>
  );
}

export const TextButton = ({className, style, action, text}) => {
    return (
		<button
			type='button'
			className={`btn hover-btn text-btn ${className}`}
			style={{
                ...style,
                border: "3px solid #309dc1",
                color: "#309dc1"
            }}
			onClick={action}
		>
			{text}
		</button>
	);
}

export const SubmitButton = ({ className, style, action, text }) => {
	return (
		<button
			type='submit'
			className={`btn hover-btn text-btn ${className}`}
			style={{
				...style,
				border: "3px solid #309dc1",
				color: "#309dc1",
			}}
			onClick={action}
		>
			{text}
		</button>
	);
};

// export const BackButton = ({ className, style, action}) => {
// 	return (
// 		<button
// 			type='button'
// 			className={`btn hover-btn text-btn fw-bolder rounded-4 ${className}`}
// 			style={{
// 				...style,
// 				border: "3px solid #309dc1",
// 				color: "#309dc1",
// 			}}
// 			onClick={action}
// 		>
// 			返回
// 		</button>
// 	);
// };