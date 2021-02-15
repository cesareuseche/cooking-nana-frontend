import React from 'react';
import "../../styles/CheckoutMarketProduct.css";
import PropTypes from 'prop-types';

function CheckoutMarketProduct({ image, title, price, rating }) {
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
                    {Array(rating).fill().map((_, i) => (
                        <p key={i}>⭐️</p>
                    ))}
                </div>
                <button onClick={removeFromCart}>Remove</button>
            </div>
        </div>
    );
}

CheckoutMarketProduct.propTypes = {
    image: PropTypes.src,
    title: PropTypes.string,
    price: PropTypes.price,
    rating: PropTypes.number

};

export default CheckoutMarketProduct;
