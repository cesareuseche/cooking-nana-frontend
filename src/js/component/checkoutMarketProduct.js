import React from "react";
import "../../styles/CheckoutMarketProduct.css";
import PropTypes from "prop-types";
import { useStateValue } from "../store/stateProvider";

function CheckoutMarketProduct({ id, image, title, price, rating }) {
	const [{ cart }, dispatch] = useStateValue();
	const removeFromCart = () => {
		// remove the item from the cart
		dispatch({
			type: "REMOVE_FROM_CART",
			id: id
		});
	};

	return (
		<div className="checkoutProduct">
			<img className="checkoutProduct__image" src={image} />
			<div className="checkoutProduct__info">
				<p className="checkoutProduct__title">{title}</p>
				<p className="checkoutProduct__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="checkoutProduct__rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p key={i}>⭐️</p>
						))}
				</div>
				<button className="cart__button" onClick={removeFromCart}>
					Remove
				</button>
			</div>
		</div>
	);
}

CheckoutMarketProduct.propTypes = {
	id: PropTypes.number,
	image: PropTypes.src,
	title: PropTypes.string,
	price: PropTypes.price,
	rating: PropTypes.number
};

export default CheckoutMarketProduct;
