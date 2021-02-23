import React from "react";
import "../../styles/MarketProducts.css";
import wine1 from "../../img/wine1.jpg";
import PropTypes from "prop-types";
import { useStateValue } from "../store/stateProvider";

function MarketProducts({ id, title, image, price, rating }) {
	const [{ cart }, dispatch] = useStateValue();
	const addToCart = () => {
		// sending the item to the State Provider (CONTEXT API)
		dispatch({
			type: "ADD_TO_CART",
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating
			}
		});
	};

	return (
		<React.Fragment>
			<div>
				<div className="product">
					<img src={image} alt="" />
					<div className="product__info">
						<p>{title}</p>
						<p className="product__price">
							<small>$</small>
							<strong>{price}</strong>
						</p>
						<div className="product__rating">
							{Array(rating)
								.fill()
								.map((_, i) => (
									<p key={i}>⭐️</p>
								))}
						</div>
					</div>
					<button onClick={addToCart}>Add to Cart</button>
				</div>
			</div>
		</React.Fragment>
	);
}

MarketProducts.propTypes = {
	id: PropTypes.number,
	title: PropTypes.string,
	image: PropTypes.img,
	price: PropTypes.string,
	rating: PropTypes.number
};

export default MarketProducts;
