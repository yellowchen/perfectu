import {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

import Banner from './../../components/Banner';





const Home = () => {
    const [articles, setArticles] = useState();
    const [article, setArticle] = useState();
    const [tag, setTag] = useState([])
    const [products, setProducts] = useState([]);

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
    console.log(products);

    const getArticles = async() => {
        const res = await axios.get(`/v2/api/${process.env.REACT_APP_API_PATH}/articles`);
        console.log("orderA: ", res.data);
        await setArticles(res.data.articles);
    }
    const getArticle = async() => {
        const id = articles[Math.floor(Math.random() * (articles?.length - 1 - 0 + 1) + 0)].id;
        // console.log(id);
        const res = await axios.get(`/v2/api/${process.env.REACT_APP_API_PATH}/article/${id}`);
        // console.log(res.data.article);
        setArticle(res.data.article);
        setTag(res.data.article.tag);
    }
    
    useEffect(() => {
        getArticles();
    }, []);

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
					margin: "10% auto",
				}}
			>
				”Smell is a word, perfume is literature.”——Jean-Claude Ellena
			</p>
			<div className='recommend'>
				<h4 className='title'>最新推薦</h4>
				{products
					.filter((item) => item.category === "season-autumn")
					.map((item) => (
						<div key={item.id} className="row">
							<div>
								<img className='img-fluid' src={item.imageUrl} alt={item.title} />
							</div>
							<div>
								<h5>{item.title}</h5>
								<p>{item.content}</p>
							</div>
						</div>
					))}
			</div>
			<div className='game'>
				<h4 className='title'>心情抽籤</h4>
				{/* <div className='shape-article'></div> */}
				<div className='group neumorphism mb-5'>
					<h3>Choose Your Today Perfume</h3>
					<button
						type='button'
						className='circle btn'
						onClick={() => {
							getArticle();
						}}
					>
						Click Me
					</button>
				</div>
				<div className='mx-2'>
					<div className='cloud'>
						<div className='mb-2 border-0 container'>
							<div
								className='rounded-circle'
								style={{
									position: "absolute",
									bottom: "36%",
									right: "15%",
									border: ".5rem solid aqua",
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

							<div
								className='d-flex flex-column gap-1'
								style={{ paddingTop: "1rem", paddingLeft: "1rem" }}
							>
								<h5 className='m-0'>{article?.title}</h5>
								<p className='m-0'>{article?.description}</p>
								<div className='m-0'>
									{tag.map((item, index) => (
										<div key={index}>
											<span>推薦：</span>
											<NavLink to={`/product/${tagId}`}>#{item}</NavLink>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home