import {useState, useEffect, useRef} from "react";
import { useOutletContext } from "react-router-dom";

import Banner from './component/Banner';
import { RecommendCard } from "./component/RecommendCard";
import { CouponTicket } from "./component/CouponTicket";
import CategoryBanner from "./component/CategoryBanner";
import RankCard from "./component/RankCard";
import data from "../../common/data/RankData";
import { categoryRules } from "../../common/data/CategoryData";
import { slideIn } from './../../../Common/utils/uiUtils/SlideIn';
import { debounce } from './../../../Common/utils/uiUtils/Debounce';


const Home = () => {
	const [copyText, setCopyText] = useState("複製優惠碼");
	const { allProducts, getAllProductsList } = useOutletContext();

    const slideRef = useRef();
    const slideText = slideRef?.current?.children[0]?.children[1];
	const slideImage = slideRef?.current?.children[1]?.children[0];
    // slideIn(slideRef, slideText, slideImage);

    const checkSlideIn = () => {
        const slideInAt = window.scrollY + window.innerHeight - slideRef?.current?.offsetHeight / 5;
        const slideBottom = slideRef?.current?.offsetTop + slideRef?.current?.offsetHeight;

        const isScrolledTop = slideInAt > slideRef?.current?.offsetTop;
        const isNotScrolledPast = window.scrollY < slideBottom;

        if (isScrolledTop && isNotScrolledPast) {
            slideText?.classList.add("active");
            slideImage?.classList.add("active");
        }
    };
    window.addEventListener("touchmove", debounce(checkSlideIn));
    window.addEventListener("scroll", debounce(checkSlideIn));


	useEffect(() => {
		getAllProductsList();
        // slideIn();
	}, []);


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
			<div className='slider-container mb-5'>
				<Banner
					imgUrl='url(https://res.cloudinary.com/da85u8p5e/image/upload/v1754556524/sergey-shmidt-koy6FlCCy5s-unsplash_pyw5fq.jpg)'
					position='center 45%'
				/>
			</div>
			<div className='container'>
				<div className=''>
					<h1 className='subTitle'>熱銷排行</h1>
					<div className='d-flex flex-column flex-md-row align-items-stretch gap-1 gap-md-2 gap-xl-3 mx-0 mx-md-1 mx-lg-2 my-5'>
						{allProducts
							.filter((item) => data.allRankList.map((item) => item.title).includes(item.title))
							.map((item, index) => (
								<RankCard
									key={index}
									item={item}
									index={index}
								/>
							))}
					</div>
				</div>
				<div className=''>
					<h1 className='subTitle'>商品種類</h1>
					<div
						className='category-banner mx-0 my-5 rounded-4 d-flex position-relative'
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
				<div className=''>
					<h1 className='subTitle'>本季推薦</h1>
					<RecommendCard
						recommend={allProducts}
						slideRef={slideRef}
					/>
				</div>
				<div
					className='my-5'
					style={{ border: "1px solid #eee" }}
				>
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
				<div className='my-5 row g-0 bg-light'>
					<div className='outfit-person col-3'>
						<div className='w-100'>
							<img
								className='w-100'
								src='https://res.cloudinary.com/da85u8p5e/image/upload/v1769164347/jonathan-borba-n1B6ftPB5Eg-unsplash_mp5sxn.jpg'
								alt=''
								style={{}}
							/>
						</div>
						<div className='text'></div>
					</div>
					<div className='outfit-perfume col-9'>
						<div
							className='bg-danger'
							style={{
								clipPath: "polygon(50% 0%, 80% 51%, 50% 100%, 20% 52%)",
								width: "40%",
								height: "90%",
								transform: "translateY(-50px)",
							}}
						></div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;



