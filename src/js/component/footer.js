import React, { Component } from "react";
import { Link } from "react-router-dom";
import cookingNanaLogo from "../../img/Cooking-nana.png";
import "../../styles/footer.css";

export const Footer = () => (
	<footer className="bg-white footer">
		<div className="container py-5">
			<div className="row py-4">
				<div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
					<img src={cookingNanaLogo} alt="" width="180" className="mb-3" />
					<p className="font-italic text-muted">
						Cooking Nana. The easiest and fastest place to start cooking like a Chef.
					</p>
					<ul className="list-inline mt-4">
						<li className="list-inline-item">
							<a href="#" target="_blank" title="twitter">
								<i className="fa fa-twitter" />
							</a>
						</li>
						<li className="list-inline-item">
							<a href="#" target="_blank" title="facebook">
								<i className="fa fa-facebook" />
							</a>
						</li>
						<li className="list-inline-item">
							<a href="#" target="_blank" title="instagram">
								<i className="fa fa-instagram" />
							</a>
						</li>
						<li className="list-inline-item">
							<a href="#" target="_blank" title="pinterest">
								<i className="fa fa-pinterest" />
							</a>
						</li>
						<li className="list-inline-item">
							<a href="#" target="_blank" title="vimeo">
								<i className="fa fa-vimeo" />
							</a>
						</li>
					</ul>
				</div>
				<div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
					<h6 className="text-uppercase font-weight-bold mb-4">Market</h6>
					<ul className="list-unstyled mb-0">
						<li className="mb-2">
							<a href="#" className="text-muted">
								Wines
							</a>
						</li>
						<li className="mb-2">
							<a href="#" className="text-muted">
								Kitchen Tools
							</a>
						</li>
						<li className="mb-2">
							<a href="#" className="text-muted">
								Pastries
							</a>
						</li>
						<li className="mb-2">
							<a href="#" className="text-muted">
								Kitchen Knifes
							</a>
						</li>
					</ul>
				</div>
				<div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
					<h6 className="text-uppercase font-weight-bold mb-4">Company</h6>
					<ul className="list-unstyled mb-0">
						<li className="mb-2">
							<Link to="/login" className="text-muted">
								Sign-In
							</Link>
						</li>
						<li className="mb-2">
							<Link to="/register" className="text-muted">
								Create Account
							</Link>
						</li>
						<li className="mb-2">
							<Link to="/market" className="text-muted">
								Market
							</Link>
						</li>
						<li className="mb-2">
							<Link to="/cart" className="text-muted">
								Cart
							</Link>
						</li>
					</ul>
				</div>
				<div className="col-lg-4 col-md-6 mb-lg-0">
					<h6 className="text-uppercase font-weight-bold mb-4">Newsletter</h6>
					<p className="text-muted mb-4">Get the best cooking tips and tricks weekly on your email</p>
					<div className="p-1 rounded border">
						<div className="input-group">
							<input
								className="footer-input form-control border-0 shadow-0 mt-0"
								type="email"
								placeholder="Enter your email address"
								aria-describedby="button-addon1"
							/>
							<div className="input-group-append">
								<button id="button-addon1" type="submit" className="btn btn-link">
									<i className="fa fa-paper-plane" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="bg-light py-4">
			<div className="container text-center">
				<p className="text-muted mb-0 py-2">Cooking Nana 2021</p>
			</div>
		</div>
	</footer>
);

export default Footer;
