import { useState, useEffect} from 'react';
import { useDispatch } from "react-redux";

import { postProduct, editProduct } from "../../common/api/admin";
import data from "../../common/data/ProductData.json";

import useImagePreviews from './../../../Common/utils/hooks/useImagePreviews';
import { createAsyncMessage } from "../../../Common/slice/messageSlice";
import selection from "../../../Common/data/ProductSelect.json";
import { Input, ModalInput } from './../../../Common/form/Input';
import { ModalCheck } from './../../../Common/form/CheckBox';
import { ModalFooterBtn } from './../../../Common/form/Button';
import { ModalTextArea } from './../../../Common/form/TextArea';
import {ModalSelect} from "./../../../Common/form/Select";
import { ImagePreview } from './../../../Common/form/ImagePreview';


const ProductModal = ({closeModal, type, tempItem, getProducts}) => {
	const [tempData, setTempData] = useState({
		title: "",
		category: "",
		origin_price: 100,
		price: 300,
		unit: "",
		description: "",
		content: "",
		is_enabled: 1,
		imageUrl: "",
        num: 0,
	});
    const dispatch = useDispatch();

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

    const {handleUpload, handleRemove} = useImagePreviews({setTempData, tempData});

	const handleSubmit = async () => {
		try {
            if(type === "create") {
                const res = await postProduct(tempData)
                dispatch(createAsyncMessage(res.data));
            }else if(type === "edit") {
                const res = await editProduct(tempItem.id, tempData);
                dispatch(createAsyncMessage(res.data));
            }

			closeModal();
			getProducts();
		} catch (err) {
			console.log(err);
            dispatch(createAsyncMessage(err.data));
		}
	};

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
						<div className='modal-header'>
							<div
								className='modal-title'
								id='productModalLabel'
							>
								<h5>{type === "create" ? "建立新商品" : `編輯：${tempItem.title}`}</h5>
							</div>
							<button
								type='button'
								className='btn btn-close'
								data-bs-dismiss='modal'
								aria-label='Close'
							></button>
						</div>

						<div className='modal-body'>
							<div className='row'>
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
										{data.productModalSelectRules.map((item) => (
											<div
												className='col-md-6'
												key={item.id}
											>
												<ModalSelect
													item={item}
													data={tempData}
													onChange={handleChange}
												>
													{item.name === "category"
														? selection.productCategory.map((item) => (
																<option
																	key={item.id}
																	value={item.sort}
																>
																	{item.title}
																</option>
														))
														: selection.productUnit.map((item) => (
																<option
																	key={item.id}
																	value={item.title}
																>
																	{item.title}
																</option>
														))
                                                    }
												</ModalSelect>
											</div>
										))}
										{data.productModalInputRules.map((item) => (
											<div
												className='col-md-6'
												key={item.id}
											>
												<ModalInput
													item={item}
													data={tempData}
													onChange={handleChange}
												/>
											</div>
										))}
									</div>
									<hr />
									{data.productModalTextAreaRules.map((item) => (
										<div key={item.id}>
											<ModalTextArea
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
									<ModalCheck
										id='is_enabled'
										name='is_enabled'
										data={tempData}
										handleChange={handleChange}
										labelText='是否啟用'
									/>
								</div>
							</div>
						</div>

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