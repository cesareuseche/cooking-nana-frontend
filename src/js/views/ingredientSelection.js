import React from "react";
import "../../styles/IngredientSelection.css";
import protein from "../../img/protein.png";
import veggie from "../../img/veggie.png";
import carbs from "../../img/carbs.png";
import { Link } from "react-router-dom";

function IngredientSelection() {
	return (
		<React.Fragment>
			<div className="container">
				<div className="row">
					<div className="col-md-12 ingredients-selection">
						<h1>Choose your ingredients</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4 ingredients-icons">
						<img src={protein} alt="protein" />
						<div className="drowdown space-drodown">
							<button
								className="btn btn-secondary btn-protein dropdown-toggle"
								type="button"
								id="dropdownMenuButton"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false">
								Select your Protein
							</button>
							<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
								<a className="dropdown-item" href="#">
									Action
								</a>
								<a className="dropdown-item" href="#">
									Another action
								</a>
								<a className="dropdown-item" href="#">
									Something else here
								</a>
								<a className="dropdown-item" href="#">
									Something else here
								</a>
								<a className="dropdown-item" href="#">
									Something else here
								</a>
								<a className="dropdown-item" href="#">
									Something else here
								</a>
							</div>
						</div>
					</div>
					<div className="col-md-4 ingredients-icons">
						<img src={carbs} alt="protein" />
						<div className="drowdown space-drodown">
							<button
								className="btn btn-secondary btn-carb dropdown-toggle"
								type="button"
								id="dropdownMenuButton"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false">
								Select your Carb
							</button>
							<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
								<a className="dropdown-item" href="#">
									Action
								</a>
								<a className="dropdown-item" href="#">
									Another action
								</a>
								<a className="dropdown-item" href="#">
									Something else here
								</a>
								<a className="dropdown-item" href="#">
									Something else here
								</a>
								<a className="dropdown-item" href="#">
									Something else here
								</a>
								<a className="dropdown-item" href="#">
									Something else here
								</a>
							</div>
						</div>
					</div>
					<div className="col-md-4 ingredients-icons">
						<img src={veggie} alt="protein" />
						<div className="drowdown space-drodown">
							<button
								className="btn btn-secondary btn-veggie dropdown-toggle "
								type="button"
								id="dropdownMenuButton"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false">
								Select your Veggie
							</button>
							<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
								<a className="dropdown-item" href="#">
									Action
								</a>
								<a className="dropdown-item" href="#">
									Another action
								</a>
								<a className="dropdown-item" href="#">
									Something else here
								</a>
								<a className="dropdown-item" href="#">
									Something else here
								</a>
								<a className="dropdown-item" href="#">
									Something else here
								</a>
								<a className="dropdown-item" href="#">
									Something else here
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 button-alignment button-style">
						<Link to="/recipes">
							<button>Search your Recipe</button>
						</Link>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default IngredientSelection;
