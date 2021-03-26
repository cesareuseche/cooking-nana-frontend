import React, { useContext, useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Avatar } from "@material-ui/core";
import "../../styles/Header.css";
import CookingNana from "../../img/Cooking-nana.png";
import cartIcon from "../../img/newcart.png";
import { useStateValue } from "../store/stateProvider";
import { auth, provider } from "../store/firebase";
import { Navbar, Nav } from "react-bootstrap";

export const Header = () => {
	const { store, actions } = useContext(Context);
	const [{ cart, user }, dispatch] = useStateValue();
	const history = useHistory("");

	return (
		<Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
			<Navbar.Brand className="header__brand">
				<img href="/" src={CookingNana} alt="Logo" />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav" className="menu-alignment">
				<Nav className="mr-auto menu-center">
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href="/">How it works</Nav.Link>

					{store.logOutConfirmation ? (
						<Nav.Link onClick={actions.logOut} href="/">
							Sign out
						</Nav.Link>
					) : (
						<Nav.Link onClick={actions.logOut} href="/login">
							Sign in
						</Nav.Link>
					)}

					<Nav.Link href="/register">Create Account</Nav.Link>
					<Nav.Link href="/market">Market</Nav.Link>
				</Nav>
				<Nav className="cart-avatar-alignment">
					<Nav.Link href="/cart" className="icon-cart">
						<img src={cartIcon} alt="cart-icon" />
						<span>{cart.length}</span>
					</Nav.Link>
					<Nav.Link className="username-header">
						<span>Hello,</span>
						<span>{!store.logOutConfirmation ? "Guest" : sessionStorage.getItem("name")}</span>
						<Avatar src={sessionStorage.getItem("picture")} />
					</Nav.Link>
				</Nav>
				<Nav />
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
