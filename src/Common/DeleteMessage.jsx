export const DeleteMessage = ({ closeModal, deleteItem, id, title }) => {
	return (
		<div
			className='modal fade'
			id='deleteMessage'
			tabIndex='-1'
			aria-labelledby='deleteMessageLabel'
			aria-hidden='true'
		>
			<div className='modal-dialog modal-dialog-centered'>
				<div className='modal-content'>
					<div className='modal-header bg-danger'>
						<div
							className='modal-title'
							id='deleteMessageLabel'
						>
							<h5 className='fs-3 text-light m-auto'>刪除確認</h5>
						</div>
						<button
							type='button'
							className='btn-close btn-close-white'
							data-bs-dismiss='modal'
							aria-label='Close'
							onClick={closeModal}
							// style={{color: "#fff"}}
						></button>
					</div>
					<div className='modal-body text-center fs-5 my-4'>確定刪除「{title}」?</div>
					{/* Footer */}
					<div className='modal-footer'>
						<button
							type='button'
							className='btn btn-light'
							data-bs-dismiss='modal'
							onClick={closeModal}
						>
							否，取消
						</button>
						<button
							type='button'
							className='btn btn-danger'
							onClick={() => {
								deleteItem(id);
							}}
						>
							是，刪除
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
