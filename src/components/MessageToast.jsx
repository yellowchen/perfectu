import {useSelector} from "react-redux";

const MessageToast = () => {
    
    //寫入訊息內容
    const messages = useSelector(state => state.message);

    //Message版型
    return (
		<>
			<div className='toast-container position-fixed' style={{ top: "4rem", right: "10px", width: "220px" }}>
				{
					messages?.map((item) => (
						<div className='toast show' role='alert' aria-live='assertive' aria-atomic='true' key={item.id}>
							<div className={`toast-header text-white bg-${item.type}`}>
								<strong className='me-auto'>{item.title}</strong>
								<button
									type='button'
									className='btn-close'
									data-bs-dismiss='toast'
									aria-label='Close'
								></button>
							</div>
							<div className='toast-body' style={{ whiteSpace: "pre-line" }}>
								{item.text}
							</div>
						</div>
					))}
			</div>
		</>
	);
}

export default MessageToast;