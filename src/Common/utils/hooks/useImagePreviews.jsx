
import { uploadImage } from "../../../Server/common/api/admin";

const useImagePreviews = ({setTempData, tempData}) => {

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


	const uploadFile = async (formData) => {
        const imgRes = await uploadImage(formData);
		return imgRes.data.imageUrl;
	};


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