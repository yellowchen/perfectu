import { FormSelect } from "../../../../Common/form/Select";
import { FormInput } from "../../../../Common/form/Input";

export const Address = ({register, errors, addressData, watchCity, watchDistrict}) => {
    return (
		<>
			<div className='row g-0'>
				<FormSelect
					register={register}
					errors={errors}
					className='col-7'
					id='city'
					name='city'
					labelText='縣/市'
					rules={{ required: "請選擇縣/市" }}
				>
					<option value=''>*請選擇縣/市*</option>
					{Object.keys(addressData).map((city) => (
						<option
							value={city}
							key={city}
						>
							{city}
						</option>
					))}
				</FormSelect>
				<FormSelect
					register={register}
					errors={errors}
					className='col-7'
					id='district'
					name='district'
					labelText='鄉鎮區'
					rules={{ required: "請選擇鄉鎮市區" }}
				>
					<option value=''>*請選擇鄉鎮市區*</option>
					{watchCity &&
						Object.entries(addressData[watchCity])?.map((state) => (
							<option
								value={state[0]}
								key={state[0]}
							>
								{state[0]}
							</option>
						))}
				</FormSelect>
			</div>
			<FormInput
				item={{
					id: "road",
					labelText: "地址",
					type: "text",
					placeholder: "",
					rules: {
						required: "地址為必填",
						minLength: {
							value: 5,
							message: "地址需超過5字以上",
						},
					},
				}}
				register={register}
				errors={errors}
			/>
		</>
	);
}

export default Address