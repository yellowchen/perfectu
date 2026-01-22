import { useEffect, useState } from "react";
import { useParams, useOutletContext, NavLink } from "react-router-dom";

import data from "../../common/data/DetailData.json"
import { getProduct } from "../../common/api/front";
import { WishButton, PrevButton, NextButton } from "../../../Common/form/Button";
import { Tabs } from "../../common/Tabs";
import { thousandFormat } from '../../../Common/utils/stringUtils/string-utils';
import selection from "../../../Common/data/ProductSelect.json"


const ProductDetail = () => {
	const [product, setProduct] = useState([]);
    const [activeTab, setActiveTab] = useState(0);
    const [dataDetail, setDataDetail] = useState([]);
	const { id } = useParams();
	const { setCartQuantity, cartQuantity, addToCart, setIsLoading, toggleWishlist, wish } = useOutletContext();
	const { imageUrl, price, title, unit, content, origin_price, description, category } = product;

	useEffect(() => {
        const getProductDetail = async (id) => {
			setIsLoading(true);
			try {
                const res = await getProduct(id);
				setProduct(res.data.product);
				setIsLoading(false);
			} catch (err) {
				console.log(err);
			}
            finally {
                setIsLoading(false);
            }
		};
        setCartQuantity(1);
		getProductDetail(id);
	}, [id, setIsLoading, setCartQuantity]);

    useEffect(() => {
        (() => {
            if (product?.category === "perfume") {
				setDataDetail(data.perfumeDetail);
			} else if (product?.category === "diffuser") {
				setDataDetail(data.diffuserDetail);
			} else if (product?.category === "candle") {
				setDataDetail(data.candleDetail);
			} else if (product?.category === "soap") {
				setDataDetail(data.soapDetail);
			}
        })()
    }, [product]);

		return (
			<div className='container my-5 clearfix'>
				<h4 className='mx-2 mb-3'>
					<NavLink
						className='hover-text-btn'
						to='/'
					>
						回到首頁
					</NavLink>
					<span> / </span>
					<NavLink
						className='hover-text-btn'
						to='/product/perfume'
					>
						全部商品
					</NavLink>
					<span> / </span>
					<NavLink
						className='hover-text-btn text-primary'
						to={`/product/${category}`}
					>
						{selection.productCategory
							.filter((item) => item.sort === product.category)
							.map((item) => (
								<span>{item.title}</span>
							))}
					</NavLink>
				</h4>
				<div>
					<div className='mx-0 mb-5'>
						<div className='row g-0'>
							<div className='col-lg-5'>
								<img
									src={imageUrl}
									className='card-img-top'
									alt={title}
									style={{ height: "470px" }}
								/>
							</div>
							<div className='col-lg-7 px-3 px-sm-4 py-3 bg-light'>
								<div className='card-body d-flex flex-column'>
									<div className='card-txt'>
										<div className='card-title d-flex justify-content-between align-items-end'>
											<div>
												<h3 className=''>{title}</h3>/ <small>{unit}</small>
											</div>
											<div>
												<p className='m-0'>NT$ {thousandFormat(price)}</p>
												<small
													className='text-decoration-line-through'
													style={{ color: "#aaa" }}
												>
													NT$ {thousandFormat(origin_price)}
												</small>
											</div>
										</div>

										<p
											className='mt-3 lh-lg text-justify fs-5'
											style={{ whiteSpace: "pre-line" }}
										>
											{content}
										</p>
									</div>
									<div className='card-btn row row-col-sm-2 g-0'>
										<div className='col-7 col-md-6 row g-0 gap-3 justify-content-end ms-auto pe-1'>
											<WishButton
												toggleWishlist={toggleWishlist}
												item={product}
												wish={wish}
												className=''
												wishStyle={{ width: "13%" }}
											/>
											<div
												className='input-group my-1'
												style={{ width: "70%" }}
											>
												<button
													className='input-group-text bg-secondary'
													onClick={() => {
														setCartQuantity((prev) => (prev === 1 ? 1 : prev - 1));
													}}
												>
													<i className='bi bi-dash-lg'></i>
												</button>
												<input
													className='form-control text-center'
													readOnly
													value={cartQuantity}
												/>
												<button
													className='input-group-text bg-secondary'
													onClick={() => {
														setCartQuantity((prev) => prev + 1);
													}}
												>
													<i className='bi bi-plus-lg'></i>
												</button>
											</div>
										</div>
										<div className='d-flex gap-3'>
											<PrevButton
												className={`w-50 mt-2 rounded-4 fw-bolder`}
												action={() => {
													addToCart(id);
												}}
												text={`加入購物車`}
											/>
											<NavLink className="w-50"
                                            to="/cart">
												<NextButton
                                                    type="button"
													className={`w-100 mt-2 rounded-4 fw-bolder`}
													action={() => {
														addToCart(id);
													}}
													text={`直接購買`}
												/>
											</NavLink>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='mx-0'>
						<h4
							className='text-center text-capitalize noto_serif'
							style={{ wordSpacing: "10px", margin: "6rem 0 2rem" }}
						>
							產品資訊
						</h4>
						<hr className='my-4' />
						<div className=''>
							<h5
								className='text-start mx-lg-5 ps-3'
								style={{
									color: "#309dc1",
									border: "transparent",
								}}
							>
								產品香味
							</h5>
							<p className='mx-lg-5 mt-4 mb-5 bg-light p-3 lh-lg'>{description}</p>
						</div>
						<Tabs
							tabData={dataDetail}
							activeTab={activeTab}
							setActiveTab={setActiveTab}
							tabHeaderClass={`text-start`}
							tabContentClass={`m-auto bg-light p-3 text-justify`}
							tabContentStyle={{ lineHeight: 2.7, whiteSpace: "pre-line" }}
						>
							{dataDetail[activeTab]?.content}
						</Tabs>
					</div>
				</div>
			</div>
		);
};

export default ProductDetail;
