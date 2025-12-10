

export const Tab = ({TabData, activeTab, setActiveTab}) => {
    return (
        <div className='tabs-container px-2 mx-0 mx-lg-5'>
            <div className='tabs-header text-center my-3'>
                {TabData.map((item, index) => (
                    <button
                        type='button'
                        id={item.id}
                        className={`btn-tab ${index === activeTab && "underline"}`}
                        onClick={() => setActiveTab(index)}
                    >
                        {item.title}
                    </button>
                ))}
            </div>
            <div
                className='tabs-content m-auto bg-light p-3 text-justify'
                style={{ lineHeight: "2.5", whiteSpace: "pre-line" }}
            >
                {TabData[activeTab].content}
            </div>
        </div>
    )
}

export default Tab