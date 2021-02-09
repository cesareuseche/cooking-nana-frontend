import React from "react";
import "../../styles/Checkout.css";
import logo from "../../img/logo.png";
import checkoutBanner from "../../img/checkout-banner.jpg";
import MarketProducts from "../component/marketProducts";
import Subtotal from "../component/subtotal";

function Checkout() {
	return (
		<React.Fragment>
			<div className="checkout">
				<div className="checkout__left">
					<img className="checkout__ad" src={checkoutBanner} alt="" />
					<div>
						<h3> Hello,</h3>
						{/* <h2 className="checkout__title">
							Your Cooking Nana's Cart <img className="logo" src={logo} alt="logo-nana" />
						</h2> */}
						{/*MarketProducts*/}
						{/*MarketProducts*/}
						{/*MarketProducts*/}
						{/*MarketProducts*/}
					</div>
					<Subtotal />
				</div>
			</div>
		</React.Fragment>
	);
}

export default Checkout;
