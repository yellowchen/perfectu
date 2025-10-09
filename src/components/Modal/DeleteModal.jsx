const DeleteModal = ({ closeModal, tempItem, deleteItem }) => {
    const {title, id} = tempItem;
	return (
		<div
			className='modal fade'
			id='deleteModal'
			tabIndex='-1'
			aria-labelledby='deleteModalLabel'
			aria-hidden='true'
		>
			<div className='modal-dialog'>
				<div className='modal-content'>
					<div className='modal-header'>
						<div className='modal-title' id='deleteModalLabel'>
							<h5>刪除確認</h5>
						</div>
						<button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
					</div>
					<div className='modal-body'>刪除 {title}</div>
                    {/* Footer */}
					<div className='modal-footer'>
						<button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
							Close
						</button>
						<button type='button' className='btn btn-primary' onClick={() => {deleteItem(id)}}>
							Delete
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DeleteModal;
