import React from "react";
import "../../styles/Login.css";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";

function Login() {
	return (
		<div className="login">
			<div className="login__container">
				<img src={logo} alt="" />
				<h1>Sign in to Cooking Nana</h1>
				<input className="sign-input" type="text" placeholder="Email" />
				<input className="sign-input" type="password" placeholder="Password" />
				<div className="sign-in-buttons">
					<button className="cta-select"> Sign In</button>
					<button className="cta-select"> Sign In with Google</button>
					<button className="cta-select"> Create an Account </button>
				</div>
			</div>
		</div>
	);
}
export default Login;
