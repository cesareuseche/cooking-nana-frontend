import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import Home from "./views/home";
import Login from "./views/login";
import Register from "./views/register";
import Recover from "./views/recover";
import Market from "./views/market";
import Recipe from "./views/recipe";
import Recipes from "./views/recipes";
import Checkout from "./views/checkout";
import IngredientSelection from "./views/ingredientSelection";
import injectContext from "./store/appContext";

import { Header } from "./component/header";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Switch>
						<Route exact path="/">
							<Header />
							<Home />
							<Footer />
						</Route>
						<Route exact path="/login">
							<Header />
							<Login />
						</Route>
						<Route exact path="/register">
							<Header />
							<Register />
						</Route>
						<Route exact path="/recover">
							<Recover />
						</Route>
						<Route exact path="/recipe">
							<Header />
							<Recipe />
							<Footer />
						</Route>
						<Route exact path="/recipes">
							<Header />
							<Recipes />
							<Footer />
						</Route>
						<Route exact path="/cart">
							<Header />
							<Checkout />
						</Route>
						<Route exact path="/market">
							<Header />
							<Market />
						</Route>
						<Route exact path="/ingredient-selection">
							<Header />
							<IngredientSelection />
							<Footer />
						</Route>
						<Route>
							<h1>Not Found</h1>
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
