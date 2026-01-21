import {useState, useEffect, useRef} from "react";
import { useOutletContext, NavLink } from "react-router-dom";


import Banner from './component/Banner';
import { CouponBanner } from './component/CouponBanner';
// import { ProductBanner } from './component/ProductBanner';
import Game from './component/Game';
import { RecommendCard } from "./component/RecommendCard";
import { CouponTicket } from "./component/CouponTicket";

import { getArticles, getArticle } from "./../../common/api/front";
import { slideIn } from './../../../Common/utils/uiUtils/SlideIn';
import CategoryBanner from './component/CategoryBanner';
import { categoryRules } from "../../common/data/CategoryData";
import RankCard from './component/RankCard';

import data from "../../common/data/RankData";


const Home = () => {
	const [articles, setArticles] = useState();
	const [article, setArticle] = useState();
	const [tag, setTag] = useState([]);
	const [copyText, setCopyText] = useState("複製優惠碼");
	const { allProducts, getAllProductsList, setIsLoading } = useOutletContext();
    console.log(allProducts);

    const slideRef = useRef();
    const slideText = slideRef?.current?.children[0]?.children[1];
	const slideImage = slideRef?.current?.children[1]?.children[0];
    slideIn(slideRef, slideText, slideImage);


	useEffect(() => {
		getAllProductsList();
	}, []);

	const getOneArticle = async () => {
		setIsLoading(true);
		const id = articles[Math.floor(Math.random() * (articles?.length - 1 - 0 + 1) + 0)].id;
		try {
			const res = await getArticle(id);
			setArticle(res.data.article);
			setTag(res.data.article.tag);
		} catch (err) {
			console.log(err);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		const getAllArticles = async () => {
			const res = await getArticles();
			await setArticles(res.data.articles);
		};
		getAllArticles();
	}, []);

	// const tagId = allProducts.filter((item) => item.title === tag[0])[0]?.id;

	const CopyToClipBoard = () => {
		navigator.clipboard
			.writeText("HelloAutumn")
			.then(() => {
				setCopyText("複製成功");
			})
			.catch((err) => {
				console.log(err);
			});
	};


	return (
		<>
			<div className='slider-container'>
				<Banner
					imgUrl='url(https://res.cloudinary.com/da85u8p5e/image/upload/v1754556524/sergey-shmidt-koy6FlCCy5s-unsplash_pyw5fq.jpg)'
					position='center 45%'
				/>
			</div>
			<div className='container'>
				{/* 優點 */}
				<div className='my-5'></div>
				{/* 排行榜 */}

				<div className=''>
					<h1 className='subTitle'>熱銷排行</h1>
					<div className='d-flex flex-column flex-md-row align-items-stretch gap-1 gap-md-2 gap-xl-3 mx-1 mx-md-3 my-5'>
						{allProducts
							.filter((item) => data.allRankList.map((item) => item.title).includes(item.title))
							.map((item, index) => (
								<RankCard
									item={item}
									index={index}
								/>
							))}
					</div>
				</div>
				{/* 所有產品種類carousel */}
				<div className=''>
					<h1 className='subTitle'>商品種類</h1>
					<div
						className='category-banner mx-2 mx-lg-5 my-5 rounded-4 d-flex position-relative'
						style={{ height: "200px" }}
					>
						{categoryRules.map((item) => (
							<CategoryBanner
								key={item.title}
								item={item}
							/>
						))}
					</div>
				</div>
				{/* 推薦 */}
				<div className=''>
					<h1 className='subTitle'>本季推薦</h1>
					<RecommendCard
						recommend={allProducts}
						slideRef={slideRef}
					/>
				</div>
				{/* Coupon */}
				<div className='my-5'
                style={{border: "1px solid #eee"}}>
					<h1 className='subTitle'>優惠使用</h1>
					<CouponTicket
						copy={CopyToClipBoard}
						text={copyText}
					/>
				</div>
				<div
					className='edu_tas text-center px-5 fs-1'
					style={{}}
				>
					<p className=''>”Smell is a word, perfume is literature.”</p>
					<p>——Jean-Claude Ellena</p>
				</div>
			</div>
		</>
	);
}

export default Home;



