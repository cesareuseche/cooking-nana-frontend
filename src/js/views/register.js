import React from "react";
import "../../styles/Login.css";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";

function Register() {
	return (
		<React.Fragment>
			<div className="all row">
				<div className="left-cover col-md-5" />
				<div className="principal col-md-7 d-flex flex-column align-items-center justify-content-center">
					<h1>Create your account</h1>
					<form>
						<input className="input" type="text" placeholder="Name..." id="user" name="user" size="25" />
						<input
							className="input"
							type="text"
							placeholder="Last name..."
							id="password"
							name="password"
							size="25"
						/>
						<input
							className="input"
							type="email"
							placeholder="Email..."
							id="email"
							name="email"
							size="25"
						/>
						<p className="example-text">e.g. myusername@example.com</p>
						<input
							className="input"
							type="password"
							placeholder="Password..."
							id="password"
							name="password"
							size="25"
						/>
						<input
							className="input"
							type="password"
							placeholder="Repeat your password..."
							id="password1"
							name="password1"
							size="25"
						/>
					</form>
					<Link to="/">
						<button className="cta-select">Create an account</button>
					</Link>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Register;
