import { useContext } from 'react';
import {useForm} from "react-hook-form";
import { useOutletContext, useNavigate, Navigate } from 'react-router-dom';
import axios from "axios";

import { thousandFormat } from "../../utils/string-utils";
import CheckoutCard from '../../components/Card/CheckoutCard';
import { FormInput, FormSelect } from "./../../components/FormElements";
import {InputRules, CheckRules } from '../../components/FormRules';
import { PaymentContext } from './FrontLayout';



const Checkout = () => {
	const { cartData } = useOutletContext();
	const { carts, total } = cartData;
	// console.log(carts);
    const {payment, setPayment} = useContext(PaymentContext);
    const navigate = useNavigate();

	//react-hook-form[01]
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: "onTouched",
	});

	//react-hook-form[02] --> <form></form>
	const onSubmit = async (data) => {
        console.log(data);
        const {name, email, tel, address} = data;
		const form = {
			create_at: Date.now(),
			data: {
				user: {
					name,
					email,
					tel,
					address,
				},
			},
		};
        console.log("form: ", form);
		try {
			const res = await axios.post(`/v2/api/${process.env.REACT_APP_API_PATH}/order`, form);
			console.log(res);
            navigate(`/success/${res.data.orderId}`);
		} catch (err) {
			console.log(err);
		}
	};

    

	return (
		<div className='container'>
			<div className='row my-5 mx-2 gap-5 justify-content-center'>
				{cartData?.carts?.length === 0 ? (
					<Navigate to='/product' />
				) : (
					<>
						{/* Order */}
						<div className='col-md-4 p-2 bg-light'>
							<h3 className='mb-4'>Order Detail</h3>
							{carts?.map((item) => (
								<CheckoutCard item={item} key={item.id} />
							))}
							<hr />
							<div className='d-flex justify-content-between'>
								<p className='fw-bolder'>SubTotal</p>
								<p className=''>NT$ {thousandFormat(total)}</p>
							</div>
							<div className='d-flex justify-content-between'>
								<p className='fw-bolder mb-0'>Payment</p>
								<p className='mb-0'>{payment}</p>
							</div>
							<hr />
							<div className='d-flex justify-content-between'>
								<h5 className='fw-bolder'>Total</h5>
								<h5 className='fw-bolder'>NT$ {thousandFormat(total)}</h5>
							</div>
						</div>

						{/* Info */}
						<form className='col-md-6 p-2 bg-light' onSubmit={handleSubmit(onSubmit)}>
							<div className='bg-white mb-5'>
								<h3 className='mb-4'>Contact Information</h3>
								{InputRules.map((item) => (
									<FormInput 
                                        key={item.id} 
                                        item={item} 
                                        register={register} 
                                        errors={errors} 
                                    />
								))}
								<p className='mb-1'>Payment</p>
								{CheckRules.map((item) => (
									<FormSelect
										key={item.id}
										item={item}
										register={register}
										errors={errors}
										setPayment={setPayment}
									/>
								))}
							</div>

							{/* Submit */}
							<div className='d-flex justify-content-between'>
								<button
									type='button'
									className='btn'
									onClick={() => {
										navigate(-1);
									}}
								>
									<i className='fas fa-chevron-left me-2'></i>Back To Cart
								</button>
								<button type='submit' className='btn btn-dark rounded-0'>
									GET PAYED
								</button>
							</div>
						</form>
					</>
				)}
			</div>
		</div>
	);
}

export default Checkout