import React from "react";
import "../../styles/Home.css";
import RecipesCards from "../component/recipesCards";
import poke from "../../img/Photo.png";
import SpecialitiesCards from "../component/specialitiesCards";
import HowTo from "../component/howTo";
import { Link } from "react-router-dom";

function Home() {
	return (
		<React.Fragment>
			<div className="presentation">
				<div className="introduction">
					<div className="intro-text">
						<h1>Cook like a chef at home</h1>
						<h3>the best way to eat delicous meals at home</h3>
					</div>
					<div className="cta">
						<Link to="/ingredient-selection">
							<button className="cta-select">Start Cooking</button>
						</Link>
					</div>
				</div>
				<div className="cover">
					<img src={poke} alt="poke-cover" />
				</div>
			</div>
			<div className="border-box-presentation">
				<ul className="alignment-row">
					<li>
						<img
							className="food-intro-icon-align"
							src="https://img.icons8.com/color/48/000000/hamper.png"
						/>
						Input the ingridients that you have
					</li>
					<li>
						<img
							className="food-intro-icon-align-second"
							src="https://img.icons8.com/color/48/000000/restaurant-menu.png"
						/>
						Search for your ideal recipe
					</li>
					<li>
						<img src="https://img.icons8.com/color/48/000000/omlette.png" />
						Get ready to cook like a chef
					</li>
				</ul>
			</div>
			<div className="container-fluid presentation-width">
				<div className="row">
					<div className="col-md-12">
						<h2>Recepies</h2>
					</div>
				</div>
			</div>
			<RecipesCards />
			<div className="container-fluid presentation-width">
				<div className="row">
					<div className="col-md-12">
						<h2>Specialities</h2>
					</div>
				</div>
			</div>
			<SpecialitiesCards />
			<HowTo />
		</React.Fragment>
	);
}

export default Home;
