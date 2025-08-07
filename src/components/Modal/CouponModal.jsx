import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import axios from "axios";

import { Input, ModalInput, ModalSelect } from "../FormElements";
import { CouponModalInputRules } from "../FormRules";
import { createAsyncMessage } from "../../slice/messageSlice";
import { addZero } from '../../utils/AddZero';




const CouponModal = ({closeModal, type, tempCoupon, getCoupons}) => {
	const [tempData, setTempData] = useState({
		title: "",
		is_enabled: 1, //0與1的切換
		percent: 80,
		due_date: "",
		code: "",
	});

	const [date, setDate] = useState(new Date());
	//console.log("date: ", date); //Thu Jun 26 2025 12:46:16 GMT+0800 (台北標準時間)

	//01 判斷是格式是新增還是修改
	useEffect(() => {
		if (type === "create") {
			setTempData({
				title: "",
				is_enabled: 1, //0與1的切換
				percent: 80,
				due_date: "",
				code: "",
			});
			setDate(new Date(new Date().setDate(new Date().getDate() + 1))); 
            //當是新增coupon，日期的顯示會以當天+1為主
		} else if (type === "edit") {
			setTempData(tempCoupon);
			setDate(new Date(tempCoupon.due_date));
		}
	}, [type, tempCoupon]);
	const { title } = tempData;

	//02 <input>輸入值轉型與否
	console.log(tempData);
	const handleChange = (e) => {
		const { value, name } = e.target;
		console.log(e.target);
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

	//03 Message處理
	// const [, dispatch] = useContext(MessageContext);
    const dispatch = useDispatch();

	//04 遞交輸入內容(新增產品內容、修產品改內容)
	const submit = async () => {
		try {
			//create
			let api = `/v2/api/${process.env.REACT_APP_API_PATH}/admin/coupon`;
			let method = "post";

			//edit
			if (type === "edit") {
				//全域變數
				api = `/v2/api/${process.env.REACT_APP_API_PATH}/admin/coupon/${tempCoupon.id}`;
				method = "put";
			}

			const res = await axios[method](api, {
				data: {
					...tempData,
					due_date: date.getTime(),
				}, //資料沒寫全，就會failed axios
			});

			// console.log(res);
            dispatch(createAsyncMessage(res.data));
			closeModal();
			getCoupons();
		} catch (err) {
			console.log(err);
            dispatch(createAsyncMessage(err.data));
		}
	};
	//有更改資料，卻直接關閉檔案，資料保持原樣
	const handleCancel = (tempCoupon) => {
		setTempData(tempCoupon);
		closeModal();
	};

    //設定選擇的時間範圍(起碼不能小於當前日期)
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
								<h5>{type === "create" ? "建立新優惠券" : `編輯${tempCoupon.title}`}</h5>
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
								value={title}
								onChange={handleChange}
							/>
							<div className='row'>
								{CouponModalInputRules.map((item) => (
									<div className='col-md-6 mb-2' key={item.id}>
                                        <ModalInput 
                                            item={item}
                                            data={tempData}
                                            handleChange={handleChange}
                                        />
                                    </div>
								))}
								<div className='col-md-6 mb-2'>
									<Input
										id='due_date'
										labelText='到期日'
										type='date'
										name='due_date'
										placeholder='請輸入到期日'
										value={`${date.getFullYear().toString()}-${addZero(
											date.getMonth() + 1
										)}-${addZero(date.getDate())}`}
										onChange={handleDateRange}
									/>
								</div>
							</div>
                            <ModalSelect
                                id='is_enabled'
                                name='is_enabled'
                                data={tempData}
                                handleChange={handleChange}
                            />
						</div>
						{/* Footer */}
						<div className='modal-footer'>
							<button
								type='button'
								className='btn btn-secondary'
								data-bs-dismiss='modal'
								onClick={() => handleCancel(tempCoupon)}
							>
								Close
							</button>
							<button type='button' className='btn btn-primary' onClick={submit}>
								Save changes
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default CouponModal