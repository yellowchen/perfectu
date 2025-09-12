import { dateAddZero } from './../utils/date-utils';

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
					value={`${date.getFullYear().toString()}-${dateAddZero(date.getMonth() + 1)}-${dateAddZero(date.getDate())}`}
					onChange={onChange}
				/>
			</label>
		</>
	);
};

//另外又有資料引進(item)
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
	const { id, labelText, type, rules } = item;
	return (
		<div className='mb-3'>
			<label className='form-label mb-0' htmlFor={id}>
				{labelText}
				<input
					type={type}
					id={id}
					className={`form-control ${errors[id] && "is-invalid"}`}
					{...register(id, rules)}
				/>
				{errors[id] && <div className='invalid-feedback'>{errors[id]?.message}</div>}
			</label>
		</div>
	);
};

export const FormSelect = ({ item, register, errors, setPayment }) => {
	const { id, name, value, labelText, rules } = item;
	return (
		<div className='form-check mb-2'>
			{/* Radio 使用 Name 欄位 */}
			<label className='form-check-label' htmlFor={id}>
				<input
					className={`form-check-input ${errors[name] && "is-invalid"}`}
					type='radio'
					name={name}
					id={id}
					value={value}
					{...register(name, rules)}
					onClick={(e) => {
						setPayment(e.target.value);
					}}
				/>
				{labelText}
			</label>
			{errors[name] && <div className='invalid-feedback'>{errors[name]?.message}</div>}
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
						style={{ width: "200px", aspectRatio: "1/1" }}
						src={img || null}
						alt={title}
					/>
					<button
						type='button'
						onClick={handleRemove}
						className='btn btn-sm btn-close position-absolute'
						style={{ top: ".5rem", right: ".5rem" }}
					></button>
					<p className='text-secondary'>《圖片預覽》</p>
				</div>
			)}
		</>
	);
}
