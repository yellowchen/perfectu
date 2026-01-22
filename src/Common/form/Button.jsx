
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

export const PrevButton = ({ className, style, action, text}) => {
	return (
		<button
			type='button'
			className={`btn prev_btn  ${className}`}
			style={{
				...style,
			}}
			onClick={action}
		>
			{text}
		</button>
	);
};

export const NextButton = ({ type, className, style, action, text }) => {
	return (
		<button
			type={type}
			className={`btn next_btn  ${className}`}
			style={{
				...style,
			}}
			onClick={action}
		>
			{text}
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

export const ModalFooterBtn = ({ handleCancel, data, handleSubmit, form }) => {
	return (
		<div className='modal-footer'>
			<button
				type='button'
				className='btn btn-secondary'
				data-bs-dismiss='modal'
				onClick={() => handleCancel(data)}
				form={form}
			>
				Close
			</button>
			<button
				type='submit'
				className='btn btn-primary'
				onClick={handleSubmit}
				form={form}
			>
				Save changes
			</button>
		</div>
	);
};

export const WishButton = ({toggleWishlist, item, wish, wishStyle, className}) => {
    return (
		<button
			type='button'
			className={`btn ${className}`}
			style={{ background: "transparent", fontSize: "1.3rem", ...wishStyle }}
			onClick={() => {
				toggleWishlist(item);
			}}
		>
			{wish?.wishlistItems?.some((wish) => wish.id === item.id) ? (
				<i
					className='bi bi-suit-heart-fill'
					style={{
						color: "#f7ae5b",
					}}
				></i>
			) : (
				<i
					className='bi bi-suit-heart-fill'
					style={{
						color: "#bdbebf",
					}}
				></i>
			)}
		</button>
	);
}