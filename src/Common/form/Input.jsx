import {FormatDate} from "../utils/dateUtils/date-utils";

export const Input = ({ id, labelText, type, name, placeholder, value, onChange }) => {
	return (
		<>
			<label
				className='w-100 form-label'
				htmlFor={id}
			>
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

export const ModalInput = ({ item, onChange, data }) => {
	const { id, labelText, type, name, placeholder } = item;
	return (
		<>
			<label
				className='w-100 form-label'
				htmlFor={id}
			>
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
                    onChange={onChange}
                />
            </label>
        </>
    );
};

export const DefaultValueInput = ({ title, value }) => {
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
};

export const TagInput = ({ data, handleTag, removeTag, setTyping, typing, tagInputRef }) => {
	return (
		<div className='w-100 form-label'>
			標籤
			<div className='d-flex flex-wrap gap-2 align-items-center'>
				{data?.tag?.map((item, index) => (
					<div
						key={index}
						className='d-inline-block tag'
					>
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