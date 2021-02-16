import React from "react";
import "../../styles/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function Subtotal() {
	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={value => (
					<>
						<p>
							Subtotal(0 items):
							<strong>0</strong>
						</p>
						<small className="subtotal__gift">
							<input type="checkbox" />
							This order contains a gift
						</small>
					</>
				)}
				decimalScale={2}
				value={0}
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
