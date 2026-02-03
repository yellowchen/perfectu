import {useSelector} from "react-redux";

const MessageToast = () => {
    const messages = useSelector(state => state.message);
    return (
		<>
			<div
				className='toast-container position-fixed'
				style={{ top: "4rem", right: "10px", width: "300px" }}
			>
				{messages?.map((item) => (
					<div
						className='toast show position-relative'
						role='alert'
						aria-live='assertive'
						aria-atomic='true'
						key={item.id}
					>
						<div className={`toast-header text-white bg-${item.type}`}>
							<strong className='me-auto d-flex align-items-center'>
								{item.type === "success" ? (
									<i
										className='bi bi-check-lg fs-4 border border-3 border-light rounded-circle d-inline-block px-1 me-3'
										style={{ width: "40px", height: "40px" }}
									></i>
								) : (
									<i
										className='bi bi-exclamation-lg fs-4 border border-3 border-light rounded-circle d-inline-block px-1  me-3'
										style={{ width: "40px", height: "40px" }}
									></i>
								)}
								<span className='fs-6'>{item.text}</span>
							</strong>
							<button
								type='button'
								className='btn-close btn-close-white d-inline-block fs-6 pe-2'
								data-bs-dismiss='toast'
								aria-label='Close'
							></button>
						</div>
						{/* <div
							className='toast-body'
							style={{ whiteSpace: "pre-line" }}
						>
							{item.text}
						</div> */}
						<div className={`toast-progress text-${item.type}`}></div>
					</div>
				))}
			</div>
		</>
	);
}

export default MessageToast;