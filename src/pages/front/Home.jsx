
import Banner from './../../components/Banner';

const Home = () => {
    return (
		<>
			<Banner
				imgUrl={`https://res.cloudinary.com/da85u8p5e/image/upload/v1754556524/sergey-shmidt-koy6FlCCy5s-unsplash_pyw5fq.jpg`}
			/>
			<p
				className='eduTas p-5 text-center'
				style={{
					fontSize: "2rem",
				}}
			>
				”Smell is a word, perfume is literature.”——Jean-Claude Ellena
			</p>
			<div className='container'>
				<div className='row justify-content-center'>
					<div
						className='col-4'
						style={{
							borderRadius: "10px",
							border: "15px double #E47C01",
							overflow: "hidden",
							width: "30%",
							height: "300px",
						}}
					></div>
					<div
						className='col-4'
						style={{
							borderRadius: "10px",
							border: "15px double #E47C01",
							overflow: "hidden",
							width: "30%",
							height: "300px",
						}}
					></div>
					<div
						className='col-4'
						style={{
							borderRadius: "10px",
							border: "15px double #E47C01",
							overflow: "hidden",
							width: "30%",
							height: "300px",
						}}
					></div>
				</div>
			</div>
		</>
	);
}

export default Home