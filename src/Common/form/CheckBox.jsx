export const ModalCheck = ({ id, name, handleChange, data, labelText }) => {
	return (
		<div className='form-check'>
			<label
				htmlFor={id}
				className='w-100 form-check-label'
			>
				<input
					className='form-check-input'
					type='checkbox'
					id={id}
					name={name}
					checked={!!data[id]}
					onChange={handleChange}
				/>
				{labelText}
			</label>
		</div>
	);
};
