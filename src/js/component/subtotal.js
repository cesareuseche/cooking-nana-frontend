import React from "react";
import "../../styles/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../store/stateProvider";
import { getCartTotal } from "../store/reducer";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function Subtotal() {
	const [{ cart }, dispatch] = useStateValue();
	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={value => (
					<>
						<p>
							Subtotal(
							{cart.length}
							):
							<strong>{value}</strong>
						</p>
						<small className="subtotal__gift">
							<input type="checkbox" />
							This order contains a gift
						</small>
					</>
				)}
				decimalScale={2}
				value={getCartTotal(cart)}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
			/>
			<div className="button-wrapper">
				<PayPalScriptProvider options={{ "client-id": "test" }}>
					<PayPalButtons />
				</PayPalScriptProvider>
			</div>
		</div>
	);
}

export default Subtotal;
