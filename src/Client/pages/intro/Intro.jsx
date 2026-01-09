import { StoryCard } from './component/StoryCard';
import data from "../../common/data/IntroData.json";

const Intro = () => {
    return (
		<div className='container'>
			{data.intro.map((item, index) => (
				<div key={index}>
					<h1 className='title uoq_mun'>{item.title}</h1>
					<div className='position-relative'>
						<p
							className='text-justify fs-5 fw-medium'
							style={{
								lineHeight: "2.5",
								padding: " 2rem 10px 6rem",
							}}
						>
							<span>{item.content}</span>
						</p>
					</div>
				</div>
			))}
			<div
				className='mb-3 m-auto row row-cols-lg-2 justify-content-center'
				style={{ maxWidth: "100%" }}
			>
				{data.introStory.map((item) => (
					<StoryCard
						key={item.id}
						item={item}
					/>
				))}
			</div>
		</div>
	);
}

export default Intro