import data from "../../common/data/ServiceData.json";
import { AccordionItem } from '../../common/AccordionItem';

const Service = () => {
  return (
		<div className='container'>
			<h1 className='title'>常見問題</h1>
			<div
				className='accordion px-2 mx-0 mx-lg-5'
				id='accordionPanel'
			>
				{data.serviceInformation.map((item) => (
					<AccordionItem
						key={item.id}
						id={item.id}
						title={item.title}
						content={item.content}
					/>
				))}
				<hr className='mt-5 mb-3' />
				<p
					className='px-2 px-lg-5'
					style={{ lineHeight: "2.5" }}
				>
					若有任何緊急事件需要我們的協助：
					<br />
					&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;請撥打perfectU服務電話：<a href='tel:+886-3-2291111'>(03)299-1111</a>
					<br />
					&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;或者來信
					<a href='mailto:perfectU@mail.perfectu.tw'>perfectU@mail.perfectu.tw</a>
					<br />
					我們將於營業時間內儘速為您服務。 對此帶來的不便，我們深感抱歉 ，並感謝您的理解與耐心 。
				</p>
			</div>
		</div>
  );
}

export default Service