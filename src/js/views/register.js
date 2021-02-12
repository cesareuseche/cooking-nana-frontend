import React from "react";
import "../../styles/Register.css";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";

function Register() {
	return (
		<div className="register">
			<div className="register__container">
				<img src={logo} alt="" />
				<h1>Welcome to Cooking Nana</h1>
				<div className="register-inputs-alignment">
					<input className="register-input" type="text" placeholder="Name" />
					<input className="register-input" type="text" placeholder="Last Name" />
					<input className="register-input" type="text" placeholder="Username" />
					<input className="register-input" type="text" placeholder="Email" />
					<input className="register-input" type="password" placeholder="Password" />
					<input className="register-input" type="password" placeholder="Repeat Password" />
				</div>
				<div className="register-buttons">
					<button className="cta-select-register"> Create an Account </button>
				</div>
			</div>
		</div>
	);
}

export default Register;
