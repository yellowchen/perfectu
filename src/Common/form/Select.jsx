export const Select = ({ id, name, labelText, value, onChange, children }) => {
	return (
		<>
			<label
				className='form-label'
				id={id}
			>
				{labelText}
			</label>
			<select
				id={id}
				name={name}
				className='form-select'
				value={value}
				onChange={onChange}
			>
				<option value='0'>《請選擇分類》</option>
				{children}
			</select>
		</>
	);
};

export const ModalSelect = ({ item, onChange, data, children }) => {
	const { id, labelText, name } = item;
	return (
		<>
			<label
				className='form-label'
				id={id}
			>
				{labelText}
			</label>
			<select
				id={id}
				name={name}
				className='form-select'
				value={data[id]}
				onChange={onChange}
			>
				<option value='0'>《請選擇分類》</option>
				{children}
			</select>
		</>
	);
};

export const FormSelect = ({ register, errors, className, id, name, labelText, rules, children }) => {
	return (
		<div className='mb-4'>
			<label
				htmlFor={id}
				className={`form-label mb-0 ${className}`}
			>
				{rules && <span className='text-danger'>* </span>}
				{labelText}

				<select
					id={id}
					className={`form-select mt-2 ${errors[name] && "is-invalid"}`}
					{...register(name, rules)}
				>
					{children}
				</select>
				{errors[name] && <div className='invalid-feedback'>{errors[name]?.message}</div>}
			</label>
		</div>
	);
};
