import { ServiceInformation } from '../../components/front/Data/ServiceInformation';
import { AccordionItem } from './../../components/front/AccordionItem';

const Service = () => {
  return (
    <div className="container">
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
                        </div>
    </div>
  )
}

export default Service