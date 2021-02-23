import React, { useContext, useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Avatar } from "@material-ui/core";
import "../../styles/Header.css";
import CookingNana from "../../img/Cooking-nana.png";
import cartIcon from "../../img/newcart.png";
import { useStateValue } from "../store/stateProvider";
import { auth, provider } from "../store/firebase";

export const Header = () => {
	const { store, actions } = useContext(Context);
	const [{ cart, user }, dispatch] = useStateValue();
	const history = useHistory("");

	// useEffect(() => {
	// 	auth.onAuthStateChanged(authUser => {
	// 		console.log("THE USER IS >>>", authUser);
	// 		if (authUser) {
	// 			//the user just logged in / the user was logged in
	// 			dispatch({
	// 				type: "SET_USER",
	// 				user: authUser
	// 			});
	// 		} else {
	// 			// the user logged out of the account
	// 			dispatch({
	// 				type: "SET_USER",
	// 				user: null
	// 			});
	// 		}
	// 	});
	// }, []);

	const logOut = () => {
		sessionStorage.token = "";
		sessionStorage.id = "";
		sessionStorage.name = "";
		sessionStorage.logOutConfirmation = false;
		sessionStorage.picture = "";
		store.user = {};
		store.token = "";
		store.logOutConfirmation = false;
		console.log(store.logOutConfirmation);
		// auth.signOut(provider)
		// 	.then(user => {
		// 		console.log("logged out", user);
		// 	})
		// 	.catch(error => {
		// 		console.log(error.message);
		// 	});
	};

	return (
		<div className="header_area">
			<div className="header_navbar">
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-12">
							<nav className="navbar navbar-expand-lg">
								<Link className="header__brand" to="/">
									<img src={CookingNana} alt="Logo" />
								</Link>
								<button
									className="navbar-toggler"
									type="button"
									data-toggle="collapse"
									data-target="#navbarSupportedContent"
									aria-controls="navbarSupportedContent"
									aria-expanded="false"
									aria-label="Toggle navigation">
									<span className="toggler-icon" />
									<span className="toggler-icon" />
									<span className="toggler-icon" />
								</button>

								<div
									className="collapse navbar-collapse sub-menu-bar navbar-alignment-new"
									id="navbarSupportedContent">
									<ul id="nav" className="navbar-nav navbar-aligment-new">
										<li className="nav-item active">
											<Link className="page-scroll" to="/">
												Home
											</Link>
										</li>
										<li className="nav-item">
											<Link className="page-scroll" to="/">
												How it works
											</Link>
										</li>
										{store.logOutConfirmation ? (
											<li className="nav-item page-scroll" onClick={logOut}>
												<Link>Sign out</Link>
											</li>
										) : (
											<li className="nav-item page-scroll">
												<Link to="/login">Sign in</Link>
											</li>
										)}
										{/* <li className="nav-item" onClick={logOut}>
											<Link
												className="page-scroll"
												to={!sessionStorage.getItem("logueado") && "/login"}>
												<span>
													{!sessionStorage.getItem("logueado") ? "Sign in" : "Sign out"}
												</span>
											</Link>
										</li> */}
										<li className="nav-item">
											<Link className="page-scroll" to="/register">
												Create Account
											</Link>
										</li>
										<li className="nav-item">
											<Link className="page-scroll" to="/market">
												Market
											</Link>
										</li>
										<li className="nav-item">
											<Link className="page-scroll icon-cart" to="/cart">
												<img src={cartIcon} />
												<span>{cart.length}</span>
											</Link>
										</li>
										<li className="signIn-color">
											<Link className="username-header">
												{" "}
												<span>Hello,</span>
												<span>
													{!store.logOutConfirmation
														? "Guest"
														: sessionStorage.getItem("name")}
												</span>
												<Avatar src={sessionStorage.getItem("picture")} />
											</Link>
										</li>
									</ul>
								</div>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
