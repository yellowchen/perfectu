import { debounce } from "./Debounce";

export const slideIn = (slideRef, slideText, slideImage) => {
	const checkSlideIn = () => {
		const slideInAt = window.scrollY + window.innerHeight - slideRef?.current?.offsetHeight / 5;
		const slideBottom = slideRef?.current?.offsetTop + slideRef?.current?.offsetHeight;

		const isScrolledTop = slideInAt > slideRef?.current?.offsetTop;
		const isNotScrolledPast = window.scrollY < slideBottom;

		if (isScrolledTop && isNotScrolledPast) {
			slideText?.classList.add("active");
			slideImage?.classList.add("active");
		}
	};
	window.addEventListener("touchmove", debounce(checkSlideIn));
	window.addEventListener("scroll", debounce(checkSlideIn));
};
