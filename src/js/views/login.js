import React from "react";
import "../../styles/Login.css";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";

function Login() {
	return (
		<div className="all row">
			<div className="left-cover col-md-5" />
			<div className="principal col-md-7 d-flex flex-column align-items-center justify-content-center">
				<Link to="/">
					<img className="logo" src={logo} alt="logo" />
				</Link>
				<h1>Login to you account</h1>
				<form>
					<input className="input email" type="text" placeholder="Email..." id="email" name="email" />
					<input className="input" type="password" placeholder="Password..." id="password" name="password" />
					<Link to="/recover">
						<a href=" ">forgot password?</a>
					</Link>
				</form>
				<br />
				<Link to="/">
					<button className="cta-select">Start Sign in</button>
				</Link>
				<Link to="/register">
					<button className="cta-select">Create an account</button>
				</Link>
			</div>
		</div>
	);
}

export default Login;
