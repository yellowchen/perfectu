import { useState, useEffect} from 'react';
import { useDispatch } from "react-redux";

import { ProductModalFirstInputRules, ProductModalSecondInputRules } from "./ProductInputRules";
import { postProduct, editProduct } from "../../common/api/admin";
import { createAsyncMessage } from "../../../Common/slice/messageSlice";
import { Input, ModalInput, EnableCheck, TextArea, ImagePreview, ModalFooterBtn } from "../../../Common/FormElements";
import useImagePreviews from '../../../Common/utils/hooks/useImagePreviews';


const ProductModal = ({closeModal, type, tempItem, getProducts}) => {
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

	//dMessage推播處理
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
			setTempData(tempItem);
		}
	}, [type, tempItem]);

	//02 <input>輸入值轉型與否
	const handleChange = (e) => {
		const { value, name } = e.target;
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
		}  else {
			setTempData((prevState) => ({
				...prevState,
				[name]: value,
			}));
		}
	};

    //03 圖片處理
    const {handleUpload, handleRemove} = useImagePreviews({setTempData, tempData});

	//04 遞交輸入內容(新增產品內容、修產品改內容)
	const handleSubmit = async () => {
		try {
            if(type === "create") {
                const res = await postProduct(tempData)
                dispatch(createAsyncMessage(res.data));
            }else if(type === "edit") {
                const res = await editProduct(tempItem.id, tempData);
                dispatch(createAsyncMessage(res.data));
            }

			// //create
			// let api = `/v2/api/${process.env.REACT_APP_API_PATH}/admin/product`;
			// let method = "post";

			// //edit
			// if (type === "edit") {
			// 	//全域變數
			// 	api = `/v2/api/${process.env.REACT_APP_API_PATH}/admin/product/${tempItem.id}`;
			// 	method = "put";
			// }

			// const res = await axios[method](api, {
			// 	data: tempData, //資料沒寫全，就會failed axios
			// });

            // dispatch(createAsyncMessage(res.data));
			closeModal();
			getProducts();
		} catch (err) {
			console.log(err);
            dispatch(createAsyncMessage(err.data));
		}
	};
	//有更改資料，卻直接關閉檔案，資料保持原樣
	const handleCancel = (tempItem) => {
		setTempData(tempItem);
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
								<h5>{type === "create" ? "建立新商品" : `編輯：${tempItem.title}`}</h5>
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
										onChange={handleUpload}
									/>
									<ImagePreview
										title={tempData.title}
										img={tempData.imageUrl}
										handleRemove={handleRemove}
									/>
								</div>
								{/* RIGHT */}
								<div className='col-sm-8 d-flex flex-column gap-2'>
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
										{ProductModalFirstInputRules.map((item) => (
											<div className='col-md-6' key={item.id}>
												<ModalInput item={item} data={tempData} onChange={handleChange} />
											</div>
										))}
									</div>
									<hr />
									{ProductModalSecondInputRules.map((item) => (
										<div key={item.id}>
											<TextArea
												id={item.id}
												labelText={item.labelText}
												data={tempData}
												name={item.name}
												placeholder={item.placeholder}
												value={tempData}
												onChange={handleChange}
											/>
										</div>
									))}
									<EnableCheck
										id='is_enabled'
										name='is_enabled'
										data={tempData}
										handleChange={handleChange}
										labelText='是否啟用'
									/>
								</div>
							</div>
						</div>
						{/* Footer */}
						<ModalFooterBtn
                            handleCancel={handleCancel}
                            handleSubmit={handleSubmit}
                            data={tempItem}
                        />
					</div>
				</div>
			</div>
		</>
	);
}

export default ProductModal