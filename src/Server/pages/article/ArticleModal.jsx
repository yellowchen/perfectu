import { useState, useEffect, useRef} from 'react';
import { useDispatch } from "react-redux";

import { ArticleModalRules } from './ArticleInputRules';
import { editArticle, postArticle } from "../../common/api/admin";

import {
	Input,
	DateInput,
	TagInput,
	ModalInput,
	EnableCheck,
	TextArea,
	ImagePreview,
	ModalFooterBtn,
} from "../../../Common/FormElements";
import useImagePreviews from "../../../Common/utils/hooks/useImagePreviews";
import { createAsyncMessage } from "../../../Common/slice/messageSlice";
import { setTextIndicator } from '../../../Common/utils/uiUtils/SetTextIndicator';
import { removeAllSpace } from '../../../Common/utils/stringUtils/string-utils';


const ArticleModal = ({ closeModal, type, tempArticle, getArticles }) => {
	const [date, setDate] = useState(new Date());
	const [typing, setTyping] = useState(false);
	const [editLast, setEditLast] = useState(false);
    const dispatch = useDispatch();
	const [tempData, setTempData] = useState({
		title: "",
		image: "",
		create_at: "",
		author: "",
		isPublic: true,
		is_enabled: 1,
		content: "",
		description: "",
		tag: [],
	});
    const tagInputRef = useRef(null);


	useEffect(() => {
		if (type === "create") {
			setTempData({
				title: "",
				image: "",
				create_at: "",
				author: "",
				isPublic: true,
				is_enabled: 1,
				content: "",
				description: "",
				tag: [],
			});
			setDate(new Date(new Date().setDate(new Date().getDate())));
		} else if (type === "edit") {
			if (tempArticle.tag) {
				setTempData(tempArticle);
			} else {
				setTempData({
					...tempArticle,
					tag: [],
				});
			}
			setDate(new Date(tempArticle.create_at));
		}
	}, [type, tempArticle]);

	const handleChange = (e) => {
		const { value, name } = e.target;
		if (name === "isPublic") {
			setTempData((prevState) => ({
				...prevState,
				[name]: e.target.checked,
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

	const handleDateRange = (e) => {
		if (new Date(e.target.value).getTime() < new Date().getTime()) {
			alert("創建日期不能小於當前日期");
		} else {
			setDate(new Date(e.target.value));
		}
	};

	const { handleUpload, handleRemove } = useImagePreviews({ setTempData, tempData });

	const handleTag = (e) => {
		if (e.key === "Enter") {
			e.preventDefault();
			let tagText = tagInputRef.current.textContent;
			if (tagText.trim() && tagText !== "" && !tempData?.tag.includes(tagText)) {
				setTempData((prevState) => ({
					...prevState,
					tag: tempData.tag.concat(removeAllSpace(tagText)),
				}));
				tagInputRef.current.textContent = "";
			} else {
				alert("Your tag is empty or already existed.");
			}
		} else if (e.key === "Backspace") {
			if (tagInputRef.current.textContent === "" && tempData.tag.length > 0) {
				if (editLast) {
					let lastTag = tempData.tag[tempData.tag.length - 1];
					setTempData((prevState) => ({
						...prevState,
						tag: tempData.tag.filter((item) => lastTag !== item),
					}));
					tagInputRef.current.textContent = lastTag;
					setTextIndicator(tagInputRef);
					setEditLast(false);
				} else {
					setEditLast(true);
				}
			}
		}
	};
	const removeTag = (index) => {
		setTempData((prevState) => ({
			...prevState,
			tag: tempData.tag.filter((_, i) => i !== index),
		}));
	};

	const handleSubmit = async () => {
		try {
            if(type === "create") {
                const res = await postArticle({
					...tempData,
					create_at: date.getTime(),
				});
                console.log(res);
                dispatch(createAsyncMessage(res.data));
            }else if(type === "edit") {
                const res = await editArticle(tempArticle.id, {
					...tempData,
					create_at: date.getTime(),
				});
                dispatch(createAsyncMessage(res.data));
            }
			closeModal();
			getArticles();
		} catch (err) {
            console.log(err);
			dispatch(createAsyncMessage(err.response.data));
		}
	};

	const handleCancel = (tempArticle) => {
		setTempData(tempArticle);
		closeModal();
	};

	return (
		<>
			<div
				className='modal fade'
				id='articleModal'
				tabIndex='-1'
				aria-labelledby='articleModalLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog modal-lg'>
					<div className='modal-content'>
						{/* Header */}
						<div className='modal-header'>
							<div className='modal-title' id='articleModalLabel'>
								<h5>{type === "create" ? "建立新文章" : `編輯：${tempArticle.title}`}</h5>
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
										img={tempData.image}
										handleRemove={handleRemove}
									/>
								</div>
								{/* RIGHT */}
								<div className='col-sm-8 d-flex flex-column gap-2'>
									<div className='row mb-2'>
										<div className='col-md-6'>
											<DateInput
												id='create_at'
												labelText='創建日期'
												type='date'
												name='create_at'
												placeholder='請輸入創建日期'
												onChange={handleDateRange}
												date={date}
											/>
										</div>
										<div className='row mb-2'>
											{ArticleModalRules.map((item) => (
												<div className='col-md-6' key={item.id}>
													<ModalInput
                                                        item={item}
                                                        data={tempData}
                                                        onChange={handleChange}
                                                    />
												</div>
											))}
											<Input
												id='description'
												labelText='描述'
												type='text'
												name='description'
												placeholder='請輸入描述'
												value={tempData.description}
												onChange={handleChange}
											/>
											<TagInput
												data={tempData}
												handleTag={handleTag}
												removeTag={removeTag}
												setTyping={setTyping}
												typing={typing}
												tagInputRef={tagInputRef}
											/>
											<div>
												<TextArea
													id='content'
													labelText='文章內容'
													data={tempData}
													name='content'
													placeholder='請輸入內容'
													value={tempData}
													onChange={handleChange}
												/>
											</div>
										</div>
									</div>
									<hr />
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
                            data={tempArticle}
                        />
					</div>
				</div>
			</div>
		</>
	);
};

export default ArticleModal


