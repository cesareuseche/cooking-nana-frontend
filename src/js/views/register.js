import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import "../../styles/Register.css";
import logo from "../../img/logo.png";

function Register() {
	const { store, actions } = useContext(Context);
	const history = useHistory("");
	const [name, setName] = useState("");
	const [last_name, setLastName] = useState("");
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [repeatPassword, setRepeatPassword] = useState("");
	const register = async e => {
		e.preventDefault();
		const succes = await actions.registerContact(name, last_name, username, email, password);
		if (succes) {
			console.log("usuario creado");
			history.push("/");
		} else {
			console.log("usuario no creado");
		}
	};

	return (
		<div className="register">
			<div className="register__container">
				<img src={logo} alt="" />
				<h1>Welcome to Cooking Nana</h1>
				<div className="register-inputs-alignment">
					<input
						className="register-input"
						type="text"
						value={name}
						placeholder="Name"
						onChange={e => setName(e.target.value)}
					/>
					<input
						className="register-input"
						type="text"
						value={last_name}
						placeholder="Last Name"
						onChange={e => setLastName(e.target.value)}
					/>
					<input
						className="register-input"
						type="text"
						value={username}
						placeholder="Username"
						onChange={e => setUsername(e.target.value)}
					/>
					<input
						className="register-input"
						type="text"
						value={email}
						placeholder="Email"
						onChange={e => setEmail(e.target.value)}
					/>
					<input
						className="register-input"
						type="password"
						value={password}
						placeholder="Password"
						onChange={e => setPassword(e.target.value)}
					/>
					<input
						className="register-input"
						type="password"
						value={repeatPassword}
						placeholder="Repeat Password"
						onChange={e => setRepeatPassword(e.target.value)}
					/>
				</div>
				<div className="register-buttons">
					<button className="cta-select-register" onClick={register}>
						Create an Account
					</button>
				</div>
			</div>
		</div>
	);
}

export default Register;
