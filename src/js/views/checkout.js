import React from "react";
import "../../styles/Checkout.css";
import logo from "../../img/logo.png";
import checkoutBanner from "../../img/checkout-banner.jpg";
import MarketProducts from "../component/marketProducts";
import Subtotal from "../component/subtotal";
import { useStateValue } from "../store/stateProvider";
import CheckoutMarketProduct from "../component/checkoutMarketProduct";

function Checkout() {
	const [{ cart }, dispatch] = useStateValue();

	return (
		<React.Fragment>
			<div className="checkout">
				<div className="checkout__left">
					<img className="checkout__ad" src={checkoutBanner} alt="" />
					<div>
						<h3> Hello, {sessionStorage.getItem("name")}</h3>
						<h5 className="checkout__title">
							Your Cooking Nana Cart <img className="logo" src={logo} alt="logo-nana" />
						</h5>
						{cart.map(item => (
							<CheckoutMarketProduct
								key={item}
								id={item.id}
								title={item.title}
								image={item.image}
								rating={item.rating}
								price={item.price}
							/>
						))}
					</div>
					<div className="checkout__box">
						<Subtotal />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Checkout;
