import { useEffect, useState, useContext } from "react";
import { useParams, NavLink, useOutletContext, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";


//API
import { getOrder, postPayment } from "../../api/front";

import { PaymentContext } from "./../../context/PaymentContext";
import OrderCard from "../../components/front/Card/OrderCard";
import Banner from "./../../components/front/Banner";
import { FormRadio } from "./../../components/share/FormElements";
import { CheckRules } from "../../components/front/Data/FrontFormRules";
import { OrderInformation } from "../../components/front/OrderInformation";

import { thousandFormat } from "./../../utils/string-utils";
import { ProgressBar } from "../../utils/data-utils";
import { TextButton, SubmitButton } from "../../utils/button/Button";

const Payment = () => {
	const { products } = useOutletContext();
	console.log(products);
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
			console.log(res);
			console.log(res.data.order);
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
					{/* <h1 className='mb-4 title'>付款選擇</h1> */}
					<div className='d-flex gap-4 flex-column flex-lg-row align-items-start p-3 rounded-0'>
						{/* 付款選擇 */}
						<form
							className='col-12 col-lg-7 bg-light p-3'
							onSubmit={handleSubmit(onSubmit)}
						>
							<div style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 5px 10px 0px" }}>
								<h3 className='mb-4 text-center'>付款方式</h3>
								<hr className='my-3 mx-1' />
								<div className='p-3'>
									{CheckRules.map((item) => (
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
						<OrderInformation
							orderData={orderData}
							user={user}
							payment={payment}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Payment;
