import {useState, useEffect, useRef} from "react";
import { useOutletContext, NavLink } from "react-router-dom";


import CarouselCard from "./../../common/CarouselCard";

import Banner from './component/Banner';
import { CouponBanner } from './component/CouponBanner';
import { ProductBanner } from './component/ProductBanner';
import Game from './component/Game';
import { RecommendCard } from "./component/RecommendCard";
import { CouponTicket } from "./component/CouponTicket";

import { getArticles, getArticle } from "./../../common/api/front";
import { debounce } from './../../../Common/utils/uiUtils/Debounce';

import Carousel from "../../common/Carousel";




const Home = () => {
	const [articles, setArticles] = useState();
	const [article, setArticle] = useState();
	const [tag, setTag] = useState([]);
	const [copyText, setCopyText] = useState("複製優惠碼");
	const { allProducts, getAllProductsList, setIsLoading } = useOutletContext();
    const slideRef = useRef();

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

	const tagId = allProducts.filter((item) => item.title === tag[0])[0]?.id;

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
				<div className='px-0 w-100'>
					<Carousel
					>
						{allProducts?.map((item) => (
							<CarouselCard
								item={item}
								key={item.id}
							/>
						))}
					</Carousel>
				</div>
				{/* <Slider {...sliderBannerSetting}>
					<ProductBanner
						imgUrl='url(https://res.cloudinary.com/da85u8p5e/image/upload/v1764232234/lavender_jjblw0.jpg)'
						position='left 65%'
					/>
					<CouponBanner
						imgUrl='url(https://res.cloudinary.com/da85u8p5e/image/upload/v1762313546/autumn_birrao.jpg)'
						position='center 45%'
						copy={CopyToClipBoard}
						text={copyText}
					/>
				</Slider> */}
			</div>
			<div
				className='edu_tas text-center px-5 fs-1'
				style={{
					margin: "10vw auto",
				}}
			>
				{/* <p>”Smell is a word, perfume is literature.”</p>
				<p>——Jean-Claude Ellena</p> */}
				<div className='noto_serif my-5'>
					嗅覺是文字，香水是文學
					<br />
					讓不言而喻遊走在你我之間
					<br />
					你，會知道我是誰
					<br />
				</div>
			</div>
			{/* 排行榜 */}
			{/* 所有產品種類carousel */}
			<RecommendCard
				recommend={allProducts}
				slideRef={slideRef}
			/>
			{/* Coupon */}
			<CouponTicket
				copy={CopyToClipBoard}
				text={copyText}
			/>
			<Game
				article={article}
				getArticle={getOneArticle}
				tag={tag}
				tagId={tagId}
			/>
		</>
	);
}

export default Home
