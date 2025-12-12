import { ServiceInformation } from './data/ServiceInformation';
import { AccordionItem } from './../../common/AccordionItem';

const Service = () => {
  return (
		<div className='container'>
			<h1 className='title'>常見問題</h1>
			<div
				className='accordion px-2 mx-0 mx-lg-5 lxgw_wenkai'
				id='accordionPanel'
			>
				{ServiceInformation.map((item) => (
					<AccordionItem
						key={item.id}
						id={item.id}
						title={item.title}
						content={item.content}
					/>
				))}
				<hr className="mt-5 mb-3"/>
				<p
                className="text-justify px-4"
                style={{ lineHeight: "2.5"}}>
					若有任何緊急事件需要我們的協助，請撥打perfectU服務電話：<a href='tel:+886-3-2291111'>(03)299-1111</a>
					，或者來信<a href='mailto:perfectU@mail.perfectu.tw'>perfectU@mail.perfectu.tw</a>
					，我們將於營業時間內儘速為您服務。 對此帶來的不便，我們深感抱歉 ，並感謝您的理解與耐心 。
				</p>
			</div>
		</div>
  );
}

export default Service