import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";


const ScrollToTop = () => {
    const [btnVisible, setBtnVisible] = useState(true);

    const toggleVisibility = () => {
        if(window.scrollY > 300) {
            setBtnVisible(true);
        }else {
            setBtnVisible(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return (() => {
            window.removeEventListener("scroll", toggleVisibility)
        })
    })

	const { pathname } = useLocation();
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }
	useEffect(() => {
        scrollToTop()
	}, [pathname]);

    window.history.scrollRestoration = "manual";

    return (
		<>
			{btnVisible && (
				<div
					className='btn btn-success position-fixed rounded-circle d-flex justify-content-center align-items-center'
					style={{
						bottom: "3%",
						right: "3%",
						cursor: "pointer",
						width: "45px",
						height: "45px",
						zIndex: "9",
					}}
					onClick={scrollToTop}
				>
					<i className='bi bi-capslock-fill text-light fs-4'></i>
				</div>
			)}
		</>
	);
};

export default ScrollToTop;
