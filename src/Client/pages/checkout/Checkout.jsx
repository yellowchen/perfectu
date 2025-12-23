import { useState, useEffect } from "react";
import {useForm, useWatch} from "react-hook-form";
import { useOutletContext, useNavigate, Navigate } from 'react-router-dom';

import CheckoutCard from "./component/card/CheckoutCard";
import { Address } from "./component/Address";
import taiwanAddress from "./data/Taiwan.json";
import { CheckoutInputRules } from "./data/checkoutInputRules";

import { postOrder } from "../../common/api/front";
import { ProgressBar } from "../../common/utils/dataUtils/ProgressBar";
import { SubmitButton, ClickedButton } from "../../common/utils/Button";

import { FormTextArea, FormInput } from "../../../Common/FormElements";
import { thousandFormat } from "../../../Common/utils/stringUtils/string-utils";


const Checkout = () => {
	const { cartData, getAllCart } = useOutletContext();
	const { carts, total, final_total } = cartData;
    const [addressData, setAddressData] = useState([]);
    const navigate = useNavigate();

	const {
		register,
		handleSubmit,
        control,
        watch,
		formState: { errors },
	} = useForm({
		mode: "onTouched",
	});

	const onSubmit = async (data, postCode) => {
		const form = {
			data: {
				user: {
					name: data.name,
					email: data.email,
					tel: data.tel,
					address: data.city + data.district + data.road,
                    message: data.message
				},
			},
		};
		try {
            const res = await postOrder(form);
            navigate(`/payment/${res.data.orderId}`);
            getAllCart();
		} catch (err) {
			console.log(err);
		}
	};
    useEffect(() => {
        const subscription = watch((value) => {
			console.log(value);
		});
        return () => subscription.unsubscribe();
    }, [watch]);

    const watchCity = useWatch({
        control,
        name: "city",
        defaultValue: ""
    });
    const watchDistrict = useWatch({
        control,
        name: "district",
        defaultValue: ""
    });

    useEffect(() => {
		setAddressData(taiwanAddress);
	}, []);


	return (
		<div className='container'>
			<ProgressBar step={2} />
			<h1 className='title uoq_mun'>填寫收件資訊</h1>
			<div className=''>
				{cartData?.carts?.length === 0 ? (
					<Navigate to='/product' />
				) : (
					<>
						<form
							className='row g-0'
							onSubmit={handleSubmit(onSubmit)}
						>
							<div className='d-flex gap-4 flex-column flex-lg-row px-0 px-md-2'>
								<div
									className='w-100 p-3 bg-light align-self-start'
									style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 5px 10px 0px" }}
								>
									<h3 className='mb-5 text-start'>結帳明細</h3>
									<div className='px-2'>
										{carts?.map((item) => (
											<CheckoutCard
												item={item}
												key={item.id}
											/>
										))}
										<hr />
										<div className='d-flex justify-content-between my-3'>
											<h5 className=''>小計</h5>
											<h5 className=''>NT$ {thousandFormat(total)}</h5>
										</div>
										<div className='d-flex justify-content-between my-3'>
											<h5 className=''>使用優惠券</h5>
											<h5 className={final_total !== total ? "text-danger" : "text-dark"}>
												NT$ {thousandFormat(final_total - total)}
											</h5>
										</div>
										<hr />
										<div className='d-flex justify-content-between'>
											<h5 className=''>總計</h5>
											<h5 className=''>NT$ {thousandFormat(final_total)}</h5>
										</div>
									</div>
								</div>

								<div className='col-12 col-lg-7 d-flex flex-column'>
									<div
										className='p-3 bg-light'
										style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 5px 10px 0px" }}
									>
										<h3 className='mb-5 text-start'>寄件資料填寫</h3>
										<div className="px-2">
											{CheckoutInputRules.map((item) => (
												<FormInput
													key={item.id}
													item={item}
													register={register}
													errors={errors}
												/>
											))}
											<Address
												register={register}
												errors={errors}
												addressData={addressData}
												watchCity={watchCity}
												watchDistrict={watchDistrict}
											/>
											<FormTextArea
												item={{
													id: "message",
													name: "message",
													placeholder: "",
													labelText: "訂單備註",
												}}
												register={register}
											/>
										</div>
									</div>

									<div className='d-flex justify-content-around mx-0 mx-md-3 mt-5 px-3 py-2'>
										<ClickedButton
											className='rounded-4 mx-4 w-50 py-2 px-1'
											content='上一頁'
											action={() => {
												navigate(-1);
											}}
										/>
										<SubmitButton
											className='rounded-4 mx-4 w-50 py-2 px-1'
											text='下一步'
										/>
									</div>
								</div>
							</div>
						</form>
					</>
				)}
			</div>
		</div>
	);
}

export default Checkout