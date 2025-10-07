import {useState, useEffect, useRef} from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";


//Slider
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselCard from "../../components/Card/CarouselCard";

import Banner from './../../components/Banner';
import { sliderSetting } from "../../utils/data-utils";
import { debounce } from "../../utils/ui-utils";



const Home = () => {
    const [articles, setArticles] = useState();
    const [article, setArticle] = useState();
    // const [id, setId] = useState();
    const [tag, setTag] = useState([])
    const [products, setProducts] = useState([]);

    const slideRef = useRef();
    // console.log(slideRef.current.offsetTop);
    const checkSlide = () => {
        const slideTxt = slideRef.current?.children[0].children[1];
        const slideImg = slideRef.current?.children[1].children[0];

        if (window.scrollY + window.innerHeight > slideRef?.current?.offsetTop) {
			slideTxt.classList.add("active");
            slideImg.classList.add("active");
		}
    }
    window.addEventListener("scroll", debounce(checkSlide));
    

    const getProducts = async(page = 1) => {
        try {
            const res = await axios.get(`/v2/api/${process.env.REACT_APP_API_PATH}/products?page=${page}`);
            console.log(res.data);
            setProducts(res.data.products);
        }catch(err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getProducts(1);
    }, [])

    
    const getArticle = async() => {
        const id = articles[Math.floor(Math.random() * (articles?.length - 1 - 0 + 1) + 0)].id;
        console.log(id);
        const res = await axios.get(`/v2/api/${process.env.REACT_APP_API_PATH}/article/${id}`);
        // console.log(res.data.article);
        setArticle(res.data.article);
        setTag(res.data.article.tag);
    }
    
    useEffect(() => {
        const getArticles = async () => {
			const res = await axios.get(`/v2/api/${process.env.REACT_APP_API_PATH}/articles`);
			console.log(res.data);
			await setArticles(res.data.articles);
		};
        getArticles();
    }, []);


    // const id = articles[Math.floor(Math.random() * (articles?.length - 1 - 0 + 1) + 0)].id;
	// console.log(id);



    const tagId = products.filter(item => item.title === tag[0])[0]?.id;
    // console.log(tagId);

    return (
		<>
			<Banner
				imgUrl={`https://res.cloudinary.com/da85u8p5e/image/upload/v1754556524/sergey-shmidt-koy6FlCCy5s-unsplash_pyw5fq.jpg`}
			/>
			<p
				className='eduTas text-center'
				style={{
					fontSize: "2rem",
					margin: "10vw auto",
				}}
			>
				”Smell is a word, perfume is literature.”——Jean-Claude Ellena
			</p>
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
					.filter((item) => item.category === "season-autumn")
					.map((item) => (
						<div key={item.id} className='recommend' ref={slideRef}>
							<div className='txt'>
								<h1>
									<small>秋季推薦 - </small>
									{item.title}
								</h1>
								<div className='p-4'>
									<h5 className=''>{item.content}</h5>
									<NavLink to={`/product/${item.id}`} className='px-3 py-2 rounded-2'>
										Know More
									</NavLink>
								</div>
							</div>
							<div className='img'>
								<img className='img-fluid' src={item.imageUrl} alt={item.title} />
							</div>
						</div>
					))}
			</div>
			<div className='game p-3 my-0'>
				{/* <h4 className='title'>心情抽籤</h4> */}
				<div className='neumorphism limelight'>
					<h3 className=''>Choose Your Today Flower</h3>
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
					<div className=''>
						<div className='cloud'>
							<div className=''>
								<div
									className='rounded-circle'
									style={{
										position: "absolute",
										bottom: "36%",
										right: "15%",
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
											maxWidth: "100%",
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
									<div className='m-0'>
										{tag.map((item, index) => (
											<div key={index}>
												<span>
													<i className='bi bi-flower1 me-1'></i>推薦：
												</span>
												<NavLink to={`/product/${tagId}`}>#{item}</NavLink>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
						<div className='cloud'></div>
						<div className='cloud'></div>
					</div>
				)}
			</div>
		</>
	);
}

export default Home
