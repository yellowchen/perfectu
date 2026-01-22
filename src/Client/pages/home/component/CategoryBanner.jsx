import { NavLink } from 'react-router-dom';

const CategoryBanner = ({item}) => {
    const {link, className, style, imageUrl, title, imageStyle} = item;

    return (
		<>
			<NavLink
				to={link}
				className={`w-50 ${className}`}
				style={style}
			>
				<img
					className='h-100 w-100'
					src={imageUrl}
					alt={title}
                    style={imageStyle}
				/>
			</NavLink>
		</>
	);
}

export default CategoryBanner