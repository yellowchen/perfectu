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

export const PrevButton = ({ className, style, action, text }) => {
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

export const WishButton = ({ toggleWishlist, item, wish, wishStyle, className }) => {
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
};

export const QuantityButton = ({
    handleQuantity,
	quantity,
	style,
	className,
	btnClassName,
}) => {
	return (
		<div
			className={`input-group border-2 ${className}`}
			style={{ ...style }}
		>
			<button
				className={`input-group-text bg-primary text-light rounded-start-4 ${btnClassName}`}
				onClick={() => {
					handleQuantity((prev) => (prev === 1 ? 1 : prev - 1));
				}}
			>
				<i className='bi bi-dash-lg'></i>
			</button>
			<input
				className='form-control text-center'
				readOnly
				value={quantity < 1 ? 1 : quantity}
			/>
			<button
				className={`input-group-text bg-primary text-light rounded-end-4 ${btnClassName}`}
				onClick={() => {
					handleQuantity((prev) => prev + 1);
				}}
			>
				<i className='bi bi-plus-lg'></i>
			</button>
		</div>
	);
};

export const CartQuantityButton = ({
	handleQtyMinus,
	handleQtyPlus,
    handleQty,
	quantity,
	style,
	className,
	btnClassName,
}) => {
	return (
		<div
			className={`input-group ${className}`}
			style={{ ...style }}
		>
			<button
				className={`input-group-text bg-primary text-light rounded-start-3 ${btnClassName}`}
				onClick={handleQtyMinus}
			>
				<i className='bi bi-dash-lg'></i>
			</button>
			<input
				className='form-control text-center p-0'
				value={quantity < 1 ? 1 : quantity}
				onChange={handleQty}
			/>
			<button
				className={`input-group-text bg-primary text-light rounded-end-3 ${btnClassName}`}
				onClick={handleQtyPlus}
			>
				<i className='bi bi-plus-lg'></i>
			</button>
		</div>
	);
};