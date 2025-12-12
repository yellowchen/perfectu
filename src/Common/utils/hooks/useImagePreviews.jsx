import axios from "axios";

const useImagePreviews = ({setTempData, tempData}) => {

	// 新增圖片
	const handleUpload = async (e) => {
		const file = e.target.files[0];
		if (!file) return;
		const formData = new FormData();
		formData.append("file-to-upload", file);
		try {
			const imgUrl = await uploadFile(formData);
			setTempData({
				...tempData,
				imageUrl: imgUrl,
                image: imgUrl
			});
		} catch (err) {
			console.log(err);
		}
	};

	//串聯API
	const uploadFile = async (formData) => {
		const imgRes = await axios.post(`/v2/api/${process.env.REACT_APP_API_PATH}/admin/upload`, formData);
		return imgRes.data.imageUrl;
	};

	//刪除圖片
	const handleRemove = (image) => {
		setTempData({
			...tempData,
			imageUrl: "",
            image: ""
		});
	};

	return {
		handleUpload,
		handleRemove,
	};
}

export default useImagePreviews