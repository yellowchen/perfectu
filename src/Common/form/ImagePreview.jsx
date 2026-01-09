export const ImagePreview = ({ title, img, handleRemove }) => {
	return (
		<>
			{img && (
				<div className='text-center position-relative'>
					<img
						className='img-fluid rounded-2 mb-3'
						style={{ width: "170px", aspectRatio: "1/1" }}
						src={img || null}
						alt={title}
					/>
					<button
						type='button'
						onClick={handleRemove}
						className='btn btn-sm btn-close position-absolute'
						style={{ top: ".5rem", right: ".5rem" }}
					></button>
					<p className='text-dark'>《圖片預覽》</p>
				</div>
			)}
		</>
	);
};
