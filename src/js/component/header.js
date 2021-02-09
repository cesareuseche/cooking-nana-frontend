import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Header.css";
import CookingNana from "../../img/Cooking-nana.png";
import cartIcon from "../../img/cart.svg";

export const Header = () => {
	return (
		<div className="header_area">
			<div className="header_navbar">
				<div className="container">
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

								<div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
									<ul id="nav" className="navbar-nav ml-auto">
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
										<li className="nav-item">
											<Link class="page-scroll" to="/login">
												SignIn
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
											<Link className="page-scroll" to="/cart">
												<img src={cartIcon} />
												<span>0</span>
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
