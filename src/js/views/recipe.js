import React from "react";
import "../../styles/Recipe.css";
import poke from "../../img/Photo.png";

function Recipe() {
	return (
		<React.Fragment>
			<div className="content row d-flex container-fluid justify-content">
				<div className="col-md-5">
					<div className="row d-flex align=content">
						<div className="introduction com-md-12 flex-column justify-content">
							<div className="intro-text">
								<h1>This is your Recipe!</h1>
								<h3>Here is the space for recipes name</h3>
							</div>
						</div>
						<div className="cover col-md-12 flex-column justify-content">
							<img className="image-recipe" src={poke} alt="poke-cover" />
						</div>
						<div className="buttons row d-flex">
							<div className="cta col-sm-5 flex-column">
								<button className="cta-select">Another recipe!</button>
							</div>

							<button>
								<i className="fas fa-thumbs-up col-sm-3" /> Like
							</button>

							<button>
								<i className="fas fa-share col-sm-3" /> Share
							</button>
						</div>
					</div>
				</div>
				<div className="instructions col-md-6 flex-column">
					<div className="intro-text-detail all-row">
						<h1> Recipe!</h1>
						<h3>
							first you must....Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
							tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
							exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure
							reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
							obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est
							laborum.
						</h3>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Recipe;
