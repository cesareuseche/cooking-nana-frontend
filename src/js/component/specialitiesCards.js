import React from "react";
import "../../styles/SpecialitiesCards.css";

function SpecialitiesCards() {
	return (
		<div>
			<React.Fragment>
				<div className="container-fluid presentation-width">
					<div className="row">
						<div className="col-md-3 specialities-align">
							<div className="box">
								<img src="https://img.icons8.com/color/96/000000/sushi.png" />
								<h6>Asian</h6>
							</div>
						</div>
						<div className="col-md-3 specialities-align">
							<div className="box">
								<img src="https://img.icons8.com/color/96/000000/pizza.png" />
								<h6>Italian</h6>
							</div>
						</div>
						<div className="col-md-3 specialities-align">
							<div className="box">
								<img src="https://img.icons8.com/color/96/000000/hamburger.png" />
								<h6>American</h6>
							</div>
						</div>
						<div className="col-md-3 specialities-align">
							<div className="box">
								<img src="https://img.icons8.com/color/96/000000/kawaii-taco.png" />
								<h6>Mexican</h6>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		</div>
	);
}

export default SpecialitiesCards;
