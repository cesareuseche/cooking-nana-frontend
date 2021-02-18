import React from "react";
import "../../styles/IngredientSelection.css";
import protein from "../../img/protein.png";
import veggie from "../../img/veggie.png";
import carbs from "../../img/carbs.png";
import { Link } from "react-router-dom";
import Select from "react-select";

function IngredientSelection() {
	const selectProteins = [
		{ label: "🥩Beef", value: "1" },
		{ label: "🍗Chicken", value: "2" },
		{ label: "🐠Fish", value: "3" },
		{ label: "🍖Lamb", value: "4" },
		{ label: "🥓Pork", value: "5" }
	];

	const selectCarbs = [
		{ label: "🍝Pasta", value: "1" },
		{ label: "🍚Rice", value: "2" },
		{ label: "🥔Potato", value: "3" },
		{ label: "🍞Bread", value: "4" }
	];

	const selectVegetables = [
		{ label: "🥕Carrot", value: "1" },
		{ label: "🍅Tomato", value: "2" },
		{ label: "🧅Onion", value: "3" },
		{ label: "🫑Peppers", value: "4" },
		{ label: "🥦Brocoli", value: "5" }
	];

	// function limpiador(label){
	// 	for(let i = 0; i < label.length; i++)
	// 	{
	// 		if(label.charAt(i))
	// 	}
	// }

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
						<Select placeholder="Protein..." isMulti options={selectProteins} captureMenuScroll={false} />
					</div>
					<div className="col-md-4 ingredients-icons">
						<img src={carbs} alt="protein" />
						<Select placeholder="Carbs..." isMulti options={selectCarbs} captureMenuScroll={false} />
					</div>
					<div className="col-md-4 ingredients-icons">
						<img src={veggie} alt="protein" />
						<Select placeholder="Veggies..." isMulti options={selectVegetables} captureMenuScroll={false} />
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
