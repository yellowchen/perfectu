

export const AccordionItem = ({id, title, content}) => {
    return (
		<div className='accordion-item'>
			<h2 className='accordion-header'>
				<button
					className='accordion-button collapsed btn'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target={`#${id}`}
					aria-expanded='false'
					aria-controls={id}
					style={{ background: "#eee"}}
				>
					<span>
						<i className='bi bi-bluesky pe-2' style={{ fontSize: "16px" }}></i>
						{title}
					</span>
				</button>
			</h2>
			<div id={id} className='accordion-collapse collapse' data-bs-parent='#accordionPanel'>
				<div className='accordion-body px-3 text-justify' style={{ lineHeight: "2.5", whiteSpace: "pre-line" }}>
					{content}
				</div>
			</div>
		</div>
	);
}