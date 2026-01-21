import { NavLink } from 'react-router-dom';
import selection from "../../../../Common/data/ProductSelect.json"

const SideBar = ({sort}) => {
    return (
		<>
			<h4
				className='fw-bolder py-3'
				style={{ borderBottom: "1px solid #ccc", letterSpacing: "2px" }}
			>
				產品列表
			</h4>
			<div className="mb-3 d-flex flex-row flex-md-column">
				{selection.productCategory.map((item) => (
					<NavLink
						key={item.id}
						to={`/product/${item.sort}`}
						className={`product-tab hover-text-btn fw-bolder mb-0 mb-md-3 mx-2 mx-md-0 fs-4 ${
							item.sort === sort && "underline"
						}`}
					>
						{item.title}
					</NavLink>
				))}
			</div>
		</>
	);
}

export default SideBar