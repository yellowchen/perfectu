

export const Tabs = ({tabData, activeTab, setActiveTab, tabHeaderClass, tabContentClass, tabContentStyle, children}) => {

    return (
		<div className='tabs-container px-2 mx-0 mx-lg-5'>
			<div className={`tabs-header my-3 ${tabHeaderClass}`}>
				{tabData.map((item, index) => (
					<button
						key={index}
						type='button'
						className={`btn-tab fs-5 fw-medium ${index === activeTab && "underline"}`}
						onClick={() => setActiveTab(index)}
					>
						{item.title}
					</button>
				))}
			</div>
			<div
				className={`tabs-content ${tabContentClass}`}
				style={{ ...tabContentStyle }}
			>
				{children}
			</div>
		</div>
	);
}
