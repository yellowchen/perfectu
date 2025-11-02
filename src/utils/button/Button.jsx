
export const IconButton = ({className, style, action, icon}) => {
  return (
		<button
            type="button"
			className={`btn icon-btn ${className}`}
			style={style}
			onClick={action}
		>
			{icon}
		</button>
  );
}

export const TextButton = ({className, style, action, text}) => {
    return (
        <button
            type="button"
            className={`btn text-btn btn-primary text-light ${className}`}
            style={style}
            onClick={action}
        >
            {text}
        </button>
    )
}

export const BackButton = ({action}) => {
    return (
		<button
			type='button'
			className={`btn back-btn rounded-circle float-end mt-5 noto_serif p-0 fw-bolder`}
			onClick={action}
		>
			Back
		</button>
	);
}