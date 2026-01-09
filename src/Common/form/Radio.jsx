export const FormRadio = ({ item, register, errors, setPayment }) => {
	const { id, name, value, labelText, rules } = item;
	return (
		<div className='form-check mb-4'>
			{/* Radio 使用 Name 欄位 */}
			<label
				className='form-check-label fs-5 fw-bold'
				htmlFor={id}
			>
				{labelText}
				<input
					className={`form-check-input mt-2 ${errors[name] && "is-invalid"}`}
					type='radio'
					name={name}
					id={id}
					value={value}
					style={{ border: "1px solid #bbb" }}
					{...register(name, rules)}
					onClick={(e) => {
						setPayment(e.target.value);
					}}
				/>
			</label>
			{errors[name] && <div className='invalid-feedback'>{errors[name]?.message}</div>}
		</div>
	);
};
