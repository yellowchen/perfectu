import { useState, createContext } from 'react';

export const PaymentContext = createContext();
export const PaymentProvider = ({children}) => {
    const [payment, setPayment] = useState("");
	const paymentValue = {
		payment,
		setPayment,
	};

    return (
        <PaymentContext.Provider value={paymentValue}>
            {children}
        </PaymentContext.Provider>
    )
}