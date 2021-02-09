import React from "react";
import "../../styles/Login.css";
import cover from "../../img/cover.png";
import logo from "../../img/nana-surpise.png";
import { Link } from "react-router-dom";

function Recover() {
	return (
		<React.Fragment>
			<div className="all row">
				<div className="left-cover col-md-5" />
				<div className="principal col-md-7 d-flex flex-column align-items-center justify-content-center">
					<Link to="/">
						<img className="logo" src={logo} alt="logo" />
					</Link>
					<h1>Recover your password</h1>
					<form>
						<input
							className="input"
							type="email"
							placeholder="Email..."
							id="email"
							name="email"
							size="25"
						/>
						<p className="example-text">e.g. myusername@example.com</p>
					</form>
					<Link to="/">
						<button className="cta-select">Send New Password</button>
					</Link>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Recover;
