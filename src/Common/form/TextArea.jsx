export const ModalTextArea = ({ id, labelText, name, placeholder, value, onChange }) => {
	return (
		<>
			<label htmlFor='content'>{labelText}</label>
			<textarea
				className='form-control'
				placeholder={placeholder}
				id={id}
				name={name}
				style={{ height: "100px" }}
				value={value[id] || ""}
				onChange={onChange}
			></textarea>
		</>
	);
};

export const FormTextArea = ({ item, register, className }) => {
	const { id, name, placeholder, labelText } = item;
	return (
		<div className='mb-3'>
			<label
				className='w-100 form-label mb-0'
				htmlFor={id}
			>
				{labelText}
			</label>
			<textarea
				className='form-control mt-2'
				placeholder={placeholder}
				id={id}
				name={name}
				style={{ height: "100px" }}
				{...register(id)}
			></textarea>
		</div>
	);
};