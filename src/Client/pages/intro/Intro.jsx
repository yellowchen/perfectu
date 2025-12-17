import { StoryCard } from './component/StoryCard';
import { IntroStory } from './data/IntroStory';

const Intro = () => {
    return (
		<div className='container'>
			<h1 className='title uoq_mun'>品牌故事</h1>
			<div className='position-relative'>
				<p
					className='text-justify fs-5 fw-medium'
					style={{
						lineHeight: "2.5",
						padding: " 2rem 10px 6rem",
					}}
				>
					PerfectU秉持<strong>"Perfect, Principle, Present, Peace"</strong>
					核心價值，專注於提供非凡的純天然手工香氛。堅持承襲古老工藝，嚴格篩選頂級原料，確保每款香氛皆為天然馨香，並承諾不經動物實驗。PerfectU將生命中轉瞬即逝的獨特回憶，淬鍊成香氛產品。願它成為一份珍貴的贈禮，助您透過香氛美學，重獲內在的和諧與寧靜。
				</p>
			</div>

			<div
				className='mb-3 m-auto row row-cols-lg-2 justify-content-center'
				style={{ maxWidth: "100%" }}
			>
				{IntroStory.map((item) => (
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