import {useState, useEffect, useRef} from "react";
import { useOutletContext } from "react-router-dom";
import axios from "axios";

//Slider
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselCard from "../../components/front/Card/CarouselCard";

import Banner from "./../../components/front/Banner";
import { CouponTicket } from "../../components/front/CouponTicket";
import { RecommendCard } from "../../components/front/Card/RecommendCard";
import Game from "./../../components/front/Game";

import { sliderSetting } from "../../utils/data-utils";
import { debounce } from "../../utils/ui-utils";


const Home = () => {
    const [articles, setArticles] = useState();
    const [article, setArticle] = useState();
    const [tag, setTag] = useState([]);
    // const [products, setProducts] = useState([]);
    const [copyText, setCopyText] = useState("Copy Code");
    const {products, getProducts} = useOutletContext();

    //slide
    const slideRef = useRef();
    const checkSlide = () => {
        const slideTxt = slideRef.current?.children[0].children[1];
        const slideImg = slideRef.current?.children[1].children[0];
        if (window.scrollY + window.innerHeight > slideRef?.current?.offsetTop) {
			slideTxt.classList.add("active");
            slideImg.classList.add("active");
		}
    }
    window.addEventListener("scroll", debounce(checkSlide));
    
    //products
    useEffect(() => {
        getProducts(1);
    }, []);

    
    //article
    const getArticle = async() => {
        const id = articles[Math.floor(Math.random() * (articles?.length - 1 - 0 + 1) + 0)].id;
        const res = await axios.get(`/v2/api/${process.env.REACT_APP_API_PATH}/article/${id}`);
        setArticle(res.data.article);
        setTag(res.data.article.tag);
    }
    
    useEffect(() => {
        const getArticles = async () => {
			const res = await axios.get(`/v2/api/${process.env.REACT_APP_API_PATH}/articles`);
			await setArticles(res.data.articles);
		};
        getArticles();
    }, []);
    
    //tag
    const tagId = products.filter(item => item.title === tag[0])[0]?.id;

    //CopyToClipBoard
    const CopyToClipBoard = () => {
        navigator.clipboard.writeText("HelloAutumn")
            .then(() => {
                setCopyText("Copy Success");
            })
            .catch((err) => {console.log(err)})
    }

    return (
		<>
			<Banner
				imgUrl='url(https://res.cloudinary.com/da85u8p5e/image/upload/v1754556524/sergey-shmidt-koy6FlCCy5s-unsplash_pyw5fq.jpg)'
				position='center 45%'
			/>
			<div
				className='edu_tas text-center px-5 fs-1'
				style={{
					margin: "10vw auto",
				}}
			>
				<p>”Smell is a word, perfume is literature.”</p>
				<p>——Jean-Claude Ellena</p>
			</div>
			<Slider {...sliderSetting}>
				{products.map((item) => (
					<CarouselCard
						key={item.id}
						id={item.id}
						img={item.imageUrl}
						title={item.title}
						price={item.price}
					/>
				))}
			</Slider>
			<RecommendCard recommend={products} slideRef={slideRef} />
			<div
				className='py-0 position-relative'
				style={{
					backgroundImage:
						"url(https://images.unsplash.com/photo-1496661415325-ef852f9e8e7c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2127)",
					backgroundSize: "cover",
					backgroundPosition: "top center",
					backgroundAttachment: "fixed",
					opacity: "0.9",
					margin: "10vw auto",
				}}
			>
				<div
					className='py-1 py-lg-4'
					style={{
						backdropFilter: "blur(2px)",
					}}
				>
					<div
						className='container edu_tas'
						style={
							{
								// clipPath: "polygon(68% 0, 0 50%, 92% 100%)",
								// backdropFilter: "contrast(",
							}
						}
					>
						<div
							className='p-lg-4 text-light text-center text-lg-start fs-1 fw-medium d-flex flex-column'
							style={{ textShadow: "2px 1px #aaa" }}
						>
							<p className=''>“No elegance is possible without perfume.</p>
							<p className='ps-0 ps-lg-5'>It is the unseen, unforgettable, ultimate accessory.”</p>
							<p className='align-self-end mb-0'>–– Coco Chanel</p>
						</div>
					</div>
				</div>
				<div
					className='position-absolute'
					style={{
						clipPath: "polygon(50% 0, 0 50%, 100% 100%)",
						backdropFilter: "hue-rotate(45deg)",
						top: "0",
						left: "0",
						width: "100%",
						height: "100%",
					}}
				></div>
			</div>
			<CouponTicket copy={CopyToClipBoard} text={copyText} />
			<Game article={article} getArticle={getArticle} tag={tag} tagId={tagId} />
		</>
	);
}

export default Home
