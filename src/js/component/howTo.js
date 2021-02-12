import React from "react";
import "../../styles/HowTo.css";
import searchIcon from "../../img/searchhowto.png";
import chefIcon from "../../img/chefhowto.png";
import inputIngredients from "../../img/ingredientshowto.png";

function HowTo() {
	return (
		<div className="howto">
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<h1 className="howto__tile__section">3 Easy steps to get your ideal recipe</h1>
						<div className="rectangular-box">
							<div className="icon">
								<img className="icon-size-align" src={inputIngredients} />
								<div className="first-step-title" />
							</div>
							<h3 className="table-title">Input the ingredients that you have available</h3>
							<div className="first-step-description">
								<p>
									We will ask you to input the main protein that you have, then input the main veggies
									and last will be to enter a main carb. Two more steps closer to start cooking like a
									chef!
								</p>
							</div>
						</div>
						<div className="rectangular-box card-margin-bottom">
							<div className="icon">
								<img className="icon-size-align" src={chefIcon} />
								<div className="first-step-title" />
							</div>
							<h3 className="table-title">Get ready to cook like a Chef</h3>
							<div className="first-step-description">
								<p>
									The time has come, start to cook like a chef and surprise your friends and family
									with an amazing meal!.
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-6 single-card-alignment">
						<div className="rectangular-box">
							<div className="icon">
								<img className="icon-size-align" src={searchIcon} />
								<div className="first-step-title" />
							</div>
							<h3 className="table-title">Search for your ideal recipe</h3>
							<div className="first-step-description">
								<p>
									Search in the results your ideal recipe, checkout the recipe reviews and likes and
									be part of the Cooking Nana community. One more step closer to cook like a chef!
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HowTo;
