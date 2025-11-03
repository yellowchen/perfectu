import { StoryCard } from "../../components/Card/StoryCard";
import { IntroStory } from "../../components/Data/IntroStory";


const Intro = () => {
    return (
		<div className='container'>
			<h1 className='title limelight'>Our Story</h1>
			<div className='position-relative'>
				<p
					className='text-justify uoq_mun fs-5'
					style={{
						lineHeight: "2.5",
						padding: " 2rem 10px 6rem",
						// background:
						// 	"url(https://res.cloudinary.com/da85u8p5e/image/upload/v1754450026/logo_gozatp.png) no-repeat right 0 bottom -20% / 200px",
					}}
				>
					PerfectU 秉持「Perfect, Present, Principle,
					Peace」核心價值，專注於提供非凡的純天然手工香氛。堅持承襲古老工藝，嚴格篩選頂級原料，確保每款香氛皆為天然馨香，並承諾不經動物實驗。
					PerfectU
					將生命中轉瞬即逝的獨特回憶，淬鍊成香氛產品。願它成為一份珍貴的贈禮，助您透過香氛美學，重獲內在的和諧與寧靜。
				</p>
			</div>

			<div className='mb-3 m-auto row row-cols-lg-2 justify-content-center' style={{ maxWidth: "100%" }}>
				{IntroStory.map((item) => (
					<StoryCard
						key={item.id}
						borderRadius_out={item.borderRadius_out}
						direction={item.direction}
						imgUrl={item.imgUrl}
						name={item.name}
						borderRadius_in={item.borderRadius_in}
						shape={item.shape}
						title={item.title}
						content={item.content}
					/>
				))}
			</div>
		</div>
	);
}

export default Intro