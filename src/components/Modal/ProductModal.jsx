import { useState, useEffect} from 'react';
import { useDispatch } from "react-redux";
import axios from "axios";

import { Input, ModalInput, ModalSelect } from '../FormElements';
import { createAsyncMessage } from "../../slice/messageSlice";
import { ProductModalFirstInputRules, ProductModalSecondInputRules } from '../FormRules';





const ProductModal = ({closeModal, type, tempProduct, getProducts}) => {
	const [tempData, setTempData] = useState({
		title: "",
		category: "",
		origin_price: 100,
		price: 300,
		unit: "",
		description: "",
		content: "",
		is_enabled: 1, //0與1的切換
		imageUrl: "",
        num: 0,
	});

	//04 Message推播處理
    const dispatch = useDispatch();

	//01 判斷是格式是新增還是修改
	useEffect(() => {
		if (type === "create") {
			setTempData({
				title: "",
				category: "",
				origin_price: 100,
				price: 300,
				unit: "",
				description: "",
				content: "",
				is_enabled: 1, //0與1的切換
				imageUrl: "",
                num: 0,
			});
		} else if (type === "edit") {
			setTempData(tempProduct);
		}
	}, [type, tempProduct]);
	const { title, imageUrl } = tempData;

	//02 <input>輸入值轉型與否
	const handleChange = (e) => {
		const { value, name } = e.target;
		console.log(e.target);
		if (["origin_price", "price", "num"].includes(name)) {
			setTempData((prevState) => ({
				...prevState,
				[name]: Number(value),
			}));
		} else if (name === "is_enabled") {
			setTempData((prevState) => ({
				...prevState,
				[name]: +e.target.checked,
			}));
		} else {
			setTempData((prevState) => ({
				...prevState,
				[name]: value,
			}));
		}
	};
    console.log(tempData);

	//上傳圖片
	const uploadFile = async (e) => {
		const file = e.target.files[0];
		if (!file) return;
		const formData = new FormData();
		formData.append("file-to-upload", file);
		try {
			const imgUrl = await uploadImg(formData);
			setTempData({
				...tempData,
				imageUrl: imgUrl,
			});
		} catch (err) {
			console.log(err);
		}
	};
	const uploadImg = async (formData) => {
		const imgRes = await axios.post(`/v2/api/${process.env.REACT_APP_API_PATH}/admin/upload`, formData);
		return imgRes.data.imageUrl;
	};
	//刪除圖片
	const delImage = (image) => {
		setTempData({
			...tempData,
			imageUrl: "",
		});
	};

	//03 遞交輸入內容(新增產品內容、修產品改內容)
	const submit = async () => {
		try {
			//create
			let api = `/v2/api/${process.env.REACT_APP_API_PATH}/admin/product`;
			let method = "post";

			//edit
			if (type === "edit") {
				//全域變數
				api = `/v2/api/${process.env.REACT_APP_API_PATH}/admin/product/${tempProduct.id}`;
				method = "put";
			}

			const res = await axios[method](api, {
				data: tempData, //資料沒寫全，就會failed axios
			});

			console.log(res);
            dispatch(createAsyncMessage(res.data));
			closeModal();
			getProducts();
		} catch (err) {
			console.log(err);
            dispatch(createAsyncMessage(err.data));
		}
	};
	//有更改資料，卻直接關閉檔案，資料保持原樣
	const handleCancel = (tempProduct) => {
		setTempData(tempProduct);
		closeModal();
	};

	return (
		<>
			<div
				className='modal fade'
				id='productModal'
				tabIndex='-1'
				aria-labelledby='productModalLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog modal-lg'>
					<div className='modal-content'>
						{/* Header */}
						<div className='modal-header'>
							<div className='modal-title' id='productModalLabel'>
								<h5>{type === "create" ? "建立新商品" : `編輯${tempProduct.title}`}</h5>
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
							<div className='row'>
								{/* LEFT */}
								<div className='col-sm-4 d-flex flex-column gap-2'>
									<Input
										id='customFile'
										labelText='上傳圖片'
										type='file'
										name='file-to-upload'
										placeholder=''
										value={""}
										onChange={uploadFile}
									/>
									{imageUrl && (
										<div className='text-center position-relative'>
											<img
												className='img-fluid rounded-2 mb-3'
												style={{ width: "200px", aspectRatio: "1/1" }}
												src={imageUrl || null}
												alt={title}
											/>
                                            <button
													type='button'
													onClick={delImage}
													className='btn btn-sm btn-close position-absolute'
													style={{ top: ".5rem", right: "1.8rem" }}
												></button>
											<p className='text-secondary'>《圖片預覽》</p>
										</div>
									)}
								</div>
								{/* RIGHT */}
								<div className='col-sm-8 d-flex flex-column gap-2'>
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
										{ProductModalFirstInputRules.map((item) => (
											<div className='col-md-6' key={item.id}>
												<ModalInput item={item} data={tempData} handleChange={handleChange} />
											</div>
										))}
									</div>
									<hr />
									{ProductModalSecondInputRules.map((item) => (
										<div key={item.id}>
											<ModalInput item={item} data={tempData} handleChange={handleChange} />
										</div>
									))}
									<ModalSelect
										id='is_enabled'
										name='is_enabled'
										data={tempData}
										handleChange={handleChange}
									/>
								</div>
							</div>
						</div>
						{/* Footer */}
						<div className='modal-footer'>
							<button
								type='button'
								className='btn btn-secondary'
								data-bs-dismiss='modal'
								onClick={() => handleCancel(tempProduct)}
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

export default ProductModal