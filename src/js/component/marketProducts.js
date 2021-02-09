import React from "react";
import "../../styles/MarketProducts.css";
import wine1 from "../../img/wine1.jpg";
import PropTypes from "prop-types";

function MarketProducts({ title, image, price, rating }) {
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
					<button>Add To Cart</button>
				</div>
			</div>
		</React.Fragment>
	);
}

MarketProducts.propTypes = {
	title: PropTypes.string,
	image: PropTypes.src,
	price: PropTypes.price,
	rating: PropTypes.number
};

export default MarketProducts;
