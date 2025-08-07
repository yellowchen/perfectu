import {useSelector} from "react-redux";

const MessageToast = () => {
    
    //寫入訊息內容
    const messages = useSelector(state => state.message);
    // console.log(messages);

    //Message版型
    return (
		<>
			<div className='toast-container position-fixed' style={{ top: "2rem", right: "10px" }}>
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

				{/* {message.title && (
					<div 
                        className='toast show' 
                        role='alert' 
                        aria-live='assertive' aria-atomic='true'
                    >
						<div className={`toast-header text-white bg-${message.type}`}>
							<strong className='me-auto'>{message.title}</strong>
							<button
								type='button'
								className='btn-close'
								data-bs-dismiss='toast'
								aria-label='Close'
							></button>
						</div>
						<div className='toast-body' style={{whiteSpace: "pre-line"}}>{message.text}</div>
					</div>
				)} */}
			</div>
		</>
	);
}

export default MessageToast;