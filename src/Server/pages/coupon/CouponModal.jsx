import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";

import { postCoupon, editCoupon } from "../../common/api/admin";
import data from "../../common/data/CouponData.json";

import { createAsyncMessage } from "../../../Common/slice/messageSlice";
import { Input, DateInput, ModalInput } from "./../../../Common/form/Input";
import { ModalCheck } from './../../../Common/form/CheckBox';
import { ModalFooterBtn } from './../../../Common/form/Button';


const CouponModal = ({closeModal, type, tempCoupon, getCoupons}) => {
	const [tempData, setTempData] = useState({
		title: "",
		is_enabled: 1,
		percent: 80,
		due_date: "",
		code: "",
	});
	const [date, setDate] = useState(new Date());
    const dispatch = useDispatch();

	useEffect(() => {
		if (type === "create") {
			setTempData({
				title: "",
				is_enabled: 1,
				percent: 80,
				due_date: "",
				code: "",
			});
			setDate(new Date(new Date().setDate(new Date().getDate() + 1)));
		} else if (type === "edit") {
			setTempData(tempCoupon);
			setDate(new Date(tempCoupon.due_date));
		}
	}, [type, tempCoupon]);

	const handleChange = (e) => {
		const { value, name } = e.target;
		if (["num", "percent"].includes(name)) {
			setTempData({
				...tempData,
				[name]: Number(value),
			});
		} else if (name === "is_enabled") {
			setTempData({
				...tempData,
				[name]: +e.target.checked,
			});
		} else {
			setTempData({
				...tempData,
				[name]: value,
			});
		}
	};

	const handleSubmit = async () => {
		try {
            if(type === "create") {
                const res = await postCoupon({
                    ...tempData,
                    due_date: date.getTime()
                });
                dispatch(createAsyncMessage(res.data));
            }else if (type === "edit") {
                const res = await editCoupon(tempCoupon.id, {
                    ...tempData,
                    due_date: date.getTime()
                });
                dispatch(createAsyncMessage(res.data));
            }
			closeModal();
			getCoupons();
		} catch (err) {
			console.log(err);
            dispatch(createAsyncMessage(err.data));
		}
	};

	const handleCancel = (tempCoupon) => {
		setTempData(tempCoupon);
		closeModal();
	};

    const handleDateRange = (e) => {
        if(new Date(e.target.value).getTime() < new Date().getTime()) {
            alert("到期日不能小於當前日期")
        }else {
            setDate(new Date(e.target.value));
        }
    }

	return (
		<>
			<div
				className='modal fade'
				id='couponModal'
				tabIndex='-1'
				aria-labelledby='couponModalLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog modal-lg'>
					<div className='modal-content'>
						{/* Header */}
						<div className='modal-header'>
							<div className='modal-title' id='couponModalLabel'>
								<h5>{type === "create" ? "建立新優惠券" : `編輯：${tempCoupon.title}`}</h5>
							</div>
							<button
								type='button'
								className='btn btn-close'
								data-bs-dismiss='modal'
								aria-label='Close'
							></button>
						</div>
						{/* Body */}
						<div className='modal-body'>
							<Input
								id='title'
								labelText='標題'
								type='text'
								name='title'
								placeholder='請輸入標題'
								value={tempData.title}
								onChange={handleChange}
							/>
							<div className='row'>
								{data.couponModalInputRules.map((item) => (
									<div className='col-md-6 mb-2' key={item.id}>
										<ModalInput
                                            item={item}
                                            data={tempData}
                                            onChange={handleChange}
                                        />
									</div>
								))}
								<div className='col-md-6 mb-2'>
									<DateInput
										id='due_date'
										labelText='到期日'
										type='date'
										name='due_date'
										placeholder='請輸入到期日'
										onChange={handleDateRange}
										date={date}
									/>
								</div>
							</div>
							<ModalCheck
								id='is_enabled'
								name='is_enabled'
								data={tempData}
								handleChange={handleChange}
								labelText='是否啟用'
							/>
						</div>
						{/* Footer */}
                        <ModalFooterBtn
                            handleCancel={handleCancel}
                            handleSubmit={handleSubmit}
                            data={tempCoupon}
                        />
					</div>
				</div>
			</div>
		</>
	);
}

export default CouponModal