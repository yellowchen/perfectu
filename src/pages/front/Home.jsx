import {useState, useEffect, useRef} from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";


//Slider
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselCard from "../../components/Card/CarouselCard";

import Banner from './../../components/Banner';
import { CouponTicket } from "../../components/CouponTicket";
import { sliderSetting } from "../../utils/data-utils";
import { debounce } from "../../utils/ui-utils";



const Home = () => {
    const [articles, setArticles] = useState();
    const [article, setArticle] = useState();
    const [tag, setTag] = useState([]);
    const [products, setProducts] = useState([]);
    const [copyText, setCopyText] = useState("Copy Code");

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
    const getProducts = async(page = 1) => {
        try {
            const res = await axios.get(`/v2/api/${process.env.REACT_APP_API_PATH}/products?page=${page}`);
            setProducts(res.data.products);
        }catch(err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getProducts(1);
    }, [])

    
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
    // const tagId = products.filter((item) => item.title.include(tag))[0]?.id;

    const CopyToClipBoard = () => {
        navigator.clipboard.writeText("HelloAutumn")
            .then(() => {
                console.log("copy success");
                setCopyText("複製成功");
            })
            .catch((err) => {console.log(err)})
    }

    console.log(products);
    console.log(tagId);

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
			<div className='my-5 pb-5 container'>
				{products
					.filter((item) => item.title === "秋鴛")
					.map((item) => (
						<div key={item.id} className='recommend' ref={slideRef}>
							<div className='txt'>
								<h1>
									<small>秋季推薦 - </small>
									{item.title}
								</h1>
								<div className='p-4'>
									<h5 className=''>{item.content}</h5>
									<NavLink
										to={`/product/${item.id}`}
										className='px-1 py-2 rounded-2 btn-secondary btn w-25 align-self-end text-light'
									>
										More
									</NavLink>
								</div>
							</div>
							<div className='img'>
								<img className='img-fluid' src={item.imageUrl} alt={item.title} />
							</div>
						</div>
					))}
			</div>
            <CouponTicket 
                copy={CopyToClipBoard}
                text={copyText}
            />
			{/* <div
				className='container coupon-ticket my-5 mx-auto py-5 px-2 px-lg-0 text-center'
				style={{
					// width: "100%",
					minWidth: "300px",
					height: "auto",
					aspectRatio: "3/1",
				}}
			>
				<div
					className='p-0 rounded-2'
					style={{
						backgroundImage:
							"url(https://res.cloudinary.com/da85u8p5e/image/upload/v1762313546/autumn_birrao.jpg)",
						backgroundSize: "cover",
						backgroundPosition: "center center",
					}}
				>
					<div
						className='row m-0'
						style={{
							height: "100%",
						}}
					>
						<div className='coupon-content col-8 py-3 rounded-3' style={{}}>
							<div
								className='py-5 my-2 ms-3 rounded-3'
								style={{
									border: "2px solid #fff",
									backdropFilter: "blur(2px)",
								}}
							>
								<h1>COUPON</h1>
								<h3 className='uoq_mun'>
									輸入<i className='bi bi-leaf-fill pe-1'></i>秋冬優惠碼，結帳即享85折扣
								</h3>
							</div>
						</div>
						<div
							className='coupon-btn col-4 align-content-center px-0'
							style={{
								borderLeft: "2px dashed #fff",
								backdropFilter: "blur(2px)",
							}}
						>
							<div className='noto_serif uoq_mun'>
								<h5 className='fw-bolder'>HelloAutumn</h5>
								<button
									type='button'
									className='btn border border-light btn-primary py-2 px-2 my-2'
									onClick={CopyToClipBoard}
								>
									{copyText}
								</button>
								<p>Expire 2025/12/31</p>
							</div>
						</div>
					</div>
				</div>
			</div> */}
			<div className='game p-3 my-0'>
				<div className='neumorphism limelight'>
					<h3 className=''>Which flower are you today?</h3>
					<button
						type='button'
						className='circle btn'
						onClick={() => {
							getArticle();
						}}
					>
						Click
					</button>
				</div>
				{article && (
					<div>
						<div className='cloud'>
							<div
								className='rounded-circle'
								style={{
									position: "absolute",
									bottom: "38%",
									right: "14%",
									border: ".5rem solid transparent",
									width: "43%",
								}}
							>
								<img
									src={article?.image}
									alt={article?.title}
									className='rounded-circle'
									style={{
										height: "auto",
										maxWidth: "96%",
										aspectRatio: "1 / 1",
									}}
								/>
							</div>

							<div className='text'>
								<p className='limelight'>{article?.title}</p>
								<p>
									<i className='bi bi-flower1 me-1'></i>
									{article?.description}
								</p>
								<div className='m-0 d-flex'>
									<div>
										<i className='bi bi-flower1 me-1'></i>推薦：
									</div>
									{tag.map((item, index) => (
										<div key={index} className='d-flex'>
											<NavLink to={`/product/${tagId}`} className='mx-1'>
												#{item}
											</NavLink>
										</div>
									))}
								</div>
							</div>
						</div>
						<div className='cloud'></div>
						<div className='cloud'></div>
						<div className='cloud'></div>
					</div>
				)}
			</div>
		</>
	);
}

export default Home
