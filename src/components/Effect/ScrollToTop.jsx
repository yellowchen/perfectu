import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {

    //change page
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

    //refresh
    useEffect(() => {
        window.history.scrollRestoration = "manual";
    }, [])

	return null;
};

export default ScrollToTop;
