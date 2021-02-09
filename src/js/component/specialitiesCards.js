import React from "react";
import "../../styles/SpecialitiesCards.css";
import Sushi from "../../img/sushi.png";
import Pizza from "../../img/pizza.png";
import Taco from "../../img/taco.png";
import Usa from "../../img/USA.png";

function SpecialitiesCards() {
	return (
		<div>
			<React.Fragment>
				<div className="container-fluid presentation-width">
					<div className="row">
						<div className="col-md-3 specialities-align">
							<div className="box sushi">
								<img src={Sushi} alt="icon" />
								<h6>ASIAN</h6>
							</div>
						</div>
						<div className="col-md-3 specialities-align">
							<div className="box pizza">
								<img src={Pizza} />
								<h6>ITALIAN</h6>
							</div>
						</div>
						<div className="col-md-3 specialities-align">
							<div className="box usa">
								<img src={Usa} />
								<h6>AMERICAN</h6>
							</div>
						</div>
						<div className="col-md-3 specialities-align">
							<div className="box taco">
								<img src={Taco} />
								<h6>MEXICAN</h6>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		</div>
	);
}

export default SpecialitiesCards;
