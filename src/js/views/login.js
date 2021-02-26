import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Redirect, useHistory } from "react-router-dom";
import "../../styles/Login.css";
import logo from "../../img/logo.png";
import googleIcon from "../../img/googleIcon.svg";
import { Link } from "react-router-dom";
import { useStateValue } from "../store/stateProvider";
import { auth, provider } from "../store/firebase";
import { actionTypes } from "../store/reducer";

function Login() {
	const [state, dispatch] = useStateValue();
	const { store, actions } = useContext(Context);
	const history = useHistory("");
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const login = async e => {
		e.preventDefault();
		const succes = await actions.login(userName, password);
		if (succes) {
			history.push("/");
		}
	};

	const signInWithGoogle = e => {
		auth.signInWithPopup(provider)
			.then(result => {
				if (result) {
					let user = {
						name: result.additionalUserInfo.profile.name,
						emai: result.additionalUserInfo.profile.email,
						jwt: result.credential.accessToken,
						picture: result.additionalUserInfo.profile.picture
					};
					actions.saveUserData(user, true);
					dispatch({
						type: actionTypes.SET_USER,
						user: result.user
					});
					history.push("/");
				}
			})
			.catch(error => {
				alert(error.message);
			});
	};

	return (
		<div className="login background-login">
			<div className="login__container">
				<Link to="/">
					<img src={logo} alt="" />
				</Link>
				<h1>Sign in to Cooking Nana</h1>
				<input
					className="sign-input"
					type="email"
					placeholder="Email/Username"
					id="email"
					name="email"
					onChange={e => setUserName(e.target.value)}
				/>
				<input
					className="sign-input"
					type="password"
					placeholder="Password"
					onChange={e => setPassword(e.target.value)}
				/>
				<div className="sign-in-buttons">
					<button className="cta-select" onClick={login}>
						{" "}
						Sign In
					</button>
					<button className="cta-select-google" onClick={signInWithGoogle}>
						<i className="fab fa-google" /> Sign In with Google
					</button>
					<Link to="/register">
						<button className="cta-select"> Create an Account</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
export default Login;
