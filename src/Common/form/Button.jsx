
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