import { StoryCard } from "../../components/Card/StoryCard";
import { IntroStory } from "../../components/Data/IntroStory";


const Intro = () => {
    return (
		<div className='container'>
			<h1 className='title limelight'>Our Story</h1>
			<div
				className='mb-3 p-2 m-auto border-0 row row-cols-lg-2 justify-content-center'
				style={{ maxWidth: "100%" }}
			>
				{IntroStory.map((item) => (
					<StoryCard
						key={item.id}
						borderRadius_out={item.borderRadius_out}
                        direction={item.direction}
						imgUrl={item.imgUrl}
						name={item.name}
						borderRadius_in={item.borderRadius_in}
						shape={item.shape}
						content={item.content}
					/>
				))}
			</div>
		</div>
	);
}

export default Intro