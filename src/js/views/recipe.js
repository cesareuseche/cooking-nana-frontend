import React from "react";
import "../../styles/Recipe.css";
import pasta from "../../img/pasta.jpg";

function Recipe() {
	return (
		<React.Fragment>
			<div className="container-fluid">
				<div className="row row-recipe-responsive">
					<div className="col-md-6 recipe-title recipe-image">
						<h1>This is your Recipe</h1>
						<h3>Here is the space for the recipes name</h3>
						<img src={pasta} alt="" />
					</div>
					<div className="col-md-6 col-sm-12 recipe-text">
						<p>
							First you must... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
							exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</p>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Recipe;
