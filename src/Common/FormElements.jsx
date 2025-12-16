import { FormatDate } from "./utils/dateUtils/date-utils";

export const Input = ({ id, labelText, type, name, placeholder, value, onChange }) => {
	return (
		<>
			<label className='w-100 form-label' htmlFor={id}>
				{labelText}
				<input
					className='form-control'
					type={type}
					id={id}
					name={name}
					placeholder={placeholder}
					value={value || ""}
					onChange={onChange}
				/>
			</label>
		</>
	);
};

export const DateInput = ({ id, labelText, type, name, placeholder, value, onChange, date }) => {
	return (
		<>
			<label className='w-100 form-label' htmlFor={id}>
				{labelText}
				<input
					className='form-control'
					type={type}
					id={id}
					name={name}
					placeholder={placeholder}
					value={FormatDate(date)}
                    // value={`${date.getFullYear().toString()}-${dateAddZero(
                    //         date.getMonth() + 1
                    //     )}-${dateAddZero(date.getDate())}`}
					onChange={onChange}
				/>
			</label>
		</>
	);
};

export const DefaultValueInput = ({title, value}) => {
    return (
		<div className='row'>
			<span className='col-sm-2 col-form-label'>{title}</span>
			<div className='col-sm-10'>
				<input
					readOnly
					type='email'
					id='email'
					className='form-control-plaintext'
					defaultValue={value}
				/>
			</div>
		</div>
	);
}


export const ModalInput = ({ item, onChange, data }) => {
	const { id, labelText, type, name, placeholder } = item;
	return (
		<>
			<label className='w-100 form-label' htmlFor={id}>
				{labelText}
				<input
					className='form-control'
					type={type}
					id={id}
					name={name}
					placeholder={placeholder}
					value={data[id] || ""}
					onChange={onChange}
				/>
			</label>
		</>
	);
};

//Check
export const EnableCheck = ({ id, name, handleChange, data, labelText }) => {
	return (
		<div className='form-check'>
			<label htmlFor={id} className='w-100 form-check-label'>
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


export const TagInput = ({ data, handleTag, removeTag, setTyping, typing, tagInputRef }) => {
	return (
		<div className='w-100 form-label'>
			標籤
			<div className='d-flex flex-wrap gap-2 align-items-center'>
				{data?.tag?.map((item, index) => (
					<div key={index} className='d-inline-block tag'>
						<span className=''>{item}</span>
						<span
							className='d-inline-block '
							onClick={() => removeTag(index)}
							style={{
								borderRadius: "50%",
								color: "red",
								marginLeft: "10px",
								textAlign: "center",
								cursor: "pointer",
							}}
						>
							&times;
						</span>
					</div>
				))}
				{typing ? (
					<span
						className='tag-edit'
						ref={tagInputRef}
						onKeyDown={handleTag}
						onBlur={() => {
							setTyping(false);
						}}
						contentEditable
					></span>
				) : (
					<button
						className='btn tag-btn'
						type='button'
						onClick={() => {
							setTyping(true);
							setTimeout(() => {
								tagInputRef.current.focus();
							}, 200);
						}}
					>
						+
					</button>
				)}
			</div>
		</div>
	);
};

export const TextArea = ({ id, labelText, name, placeholder, value, onChange }) => {
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

//React Hook Form
export const FormInput = ({ item, register, errors }) => {
	const { id, labelText, type, rules, placeholder } = item;
	return (
		<div className='mb-3'>
			<label
				className='w-100 form-label mb-0'
				htmlFor={id}
			>
				{rules && <span className='text-danger'>* </span>}
				{labelText}
				<input
					type={type}
					id={id}
					className={`form-control mt-2 ${errors[id] && "is-invalid"}`}
					placeholder={placeholder}
					{...register(id, rules)}
				/>
				{errors[id] && <div className='invalid-feedback'>{errors[id]?.message}</div>}
			</label>
		</div>
	);
};

//FormRadio
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

//FormSelect
export const FormSelect = ({ register, errors, className, id, name, labelText, rules, children}) => {
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

//FormTextArea
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

export const ImagePreview = ({title, img, handleRemove}) => {
    return (
		<>
			{img && (
				<div className='text-center position-relative'>
					<img
						className='img-fluid rounded-2 mb-3'
						style={{ width: "170px", aspectRatio: "1/1" }}
						src={img || null}
						alt={title}
					/>
					<button
						type='button'
						onClick={handleRemove}
						className='btn btn-sm btn-close position-absolute'
						style={{ top: ".5rem", right: ".5rem" }}
					></button>
					<p className='text-dark'>《圖片預覽》</p>
				</div>
			)}
		</>
	);
}

export const ModalFooterBtn = ({handleCancel, data, handleSubmit}) => {
    return (
		<div className='modal-footer'>
			<button
				type='button'
				className='btn btn-secondary'
				data-bs-dismiss='modal'
				onClick={() => handleCancel(data)}
			>
				Close
			</button>
			<button type='button' className='btn btn-primary' onClick={handleSubmit}>
				Save changes
			</button>
		</div>
	);
}
