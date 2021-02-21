import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import "../../styles/Header.css";
import CookingNana from "../../img/Cooking-nana.png";
import cartIcon from "../../img/newcart.png";
import { useStateValue } from "../store/stateProvider";
import { auth, provider } from "../store/firebase";

export const Header = () => {
	const [{ cart, user }, dispatch] = useStateValue();

	//LOG OUT NOT WORKING

	const logOut = () => {
		auth.signOut(provider)
			.then(user => {
				console.log("logged out", user);
			})
			.catch(error => {
				console.log(error.message);
			});
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
										<li className="nav-item" onClick={logOut}>
											<Link
												className="page-scroll"
												to={!sessionStorage.getItem("logueado") && "/login"}>
												<span>
													{!sessionStorage.getItem("logueado") ? "Sign in" : "Sign out"}
												</span>
											</Link>
										</li>
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
													{!sessionStorage.getItem("logueado")
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
