import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { OrderInformation } from "./component/OrderInformation";

import { paymentCheckRules } from "./../../common/data/PaymentData";
import { getOrder, postPayment } from "../../common/api/front";
import { PaymentContext } from "../../common/context/PaymentContext";

import { ProgressBar } from "./../../../Common/utils/dataUtils/ProgressBar";
import { SubmitButton } from "../../../Common/form/Button";
import { FormRadio } from '../../../Common/form/Radio';


const Payment = () => {
	const [orderData, setOrderData] = useState([]);
	const { orderId } = useParams();
	const { payment, setPayment } = useContext(PaymentContext);
	const { user } = orderData;
    const navigate = useNavigate();

    const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: "onTouched",
	});

	const getOrderData = async () => {
		try {
			const res = await getOrder(orderId);
			setOrderData(res.data.order);
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		getOrderData();
	}, []);

    const onSubmit = async() => {
        const res = await postPayment(orderId);
        console.log(res);
        navigate(`/success/${orderId}`);
    }

	return (
		<>
			<ProgressBar step={3} />
			<div className='container'>
				<h1 className='title uoq_mun'>付款方式</h1>
				<div className='row g-0'>
					<div className='d-flex gap-4 flex-column flex-lg-row align-items-start rounded-0'>
						<OrderInformation
							orderData={orderData}
							user={user}
							payment={payment}
						/>
						<form
							className='col-12 col-lg-7'
							onSubmit={handleSubmit(onSubmit)}
						>
							<div
								className='bg-light p-3'
								style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 5px 10px 0px" }}
							>
								<h3 className='mb-4 text-center'>付款方式</h3>
								<hr className='my-3 mx-1' />
								<div className='p-3'>
									{paymentCheckRules.map((item) => (
										<FormRadio
											key={item.id}
											item={item}
											register={register}
											errors={errors}
											setPayment={setPayment}
										/>
									))}
								</div>
							</div>
							<div className='d-flex justify-content-around mt-5 px-3'>
								<SubmitButton
									className='rounded-4 py-2 w-50'
									style={{}}
									text='確認結帳'
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Payment;
