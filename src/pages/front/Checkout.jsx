import { useContext } from 'react';
import {useForm} from "react-hook-form";
import { useOutletContext, useNavigate, Navigate } from 'react-router-dom';
import axios from "axios";

import { thousandFormat } from "../../utils/string-utils";
import CheckoutCard from '../../components/Card/CheckoutCard';
import { FormInput, FormSelect } from "./../../components/FormElements";
import { InputRules, CheckRules } from '../../components/Data/FormRules';
import { PaymentContext } from './FrontLayout';
import { ProgressBar } from '../../utils/data-utils';


const Checkout = () => {
	const { cartData, getCart } = useOutletContext();
	const { carts, total, final_total } = cartData;
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
		try {
			const res = await axios.post(`/v2/api/${process.env.REACT_APP_API_PATH}/order`, form);
            navigate(`/success/${res.data.orderId}`);
            getCart();
		} catch (err) {
			console.log(err);
		}
	};


	return (
		<div className='container uoq_mun'>
			<ProgressBar step={2} />
			<div className='row my-5 mx-2 gap-5 justify-content-center'>
				{cartData?.carts?.length === 0 ? (
					<Navigate to='/product' />
				) : (
					<>
						{/* Order */}
						<div className='col-md-5 p-3 bg-light rounded-2'>
							<h3 className='mb-5 text-center limelight'>Order Detail</h3>
							{carts?.map((item) => (
								<CheckoutCard item={item} key={item.id} />
							))}
							<hr />
							<div className='d-flex justify-content-between'>
								<p className='fw-bolder'>SubTotal</p>
								<p className=''>NT$ {thousandFormat(total)}</p>
							</div>
							<div className='d-flex justify-content-between'>
								<p className='fw-bolder'>使用優惠券</p>
								<p className='text-danger'>NT$ {thousandFormat(final_total - total)}</p>
							</div>
							<div className='d-flex justify-content-between'>
								<p className='fw-bolder mb-0'>Payment</p>
								<p className='mb-0'>{payment}</p>
							</div>
							<hr />
							<div className='d-flex justify-content-between'>
								<h5 className='fw-bolder'>Total</h5>
								<h5 className='fw-bolder'>NT$ {thousandFormat(final_total)}</h5>
							</div>
						</div>

						{/* Info */}
						<form className='col-md-6 p-3 bg-light rounded-2' onSubmit={handleSubmit(onSubmit)}>
							<div className='mb-5 px-1'>
								<h3 className='mb-5 text-center limelight'>Contact Information</h3>
								{InputRules.map((item) => (
									<FormInput key={item.id} item={item} register={register} errors={errors} />
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
									className='btn fw-bold'
									onClick={() => {
										navigate(-1);
									}}
								>
									<i className='fas fa-chevron-left me-1'></i>Back To Cart
								</button>
								<button type='submit' className='btn btn-primary text-light w-50 limelight'>
									Check Out
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