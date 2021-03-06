import React, { useContext, useState, Component } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/IngredientSelection.css";
import protein from "../../img/protein.png";
import veggie from "../../img/veggie.png";
import carb from "../../img/carbs.png";
import { Link } from "react-router-dom";
import Select from "react-select";

function IngredientSelection() {
	const history = useHistory();
	const { store, actions } = useContext(Context);
	const [proteins, setProteins] = useState([]);
	const [carbs, setCarbs] = useState([]);
	const [veggies, setVeggies] = useState([]);

	let list = [];
	let dictionary = {};
	let handleChangeP = e => {
		setProteins(Array.isArray(e) ? e.map(x => x.value) : []);
	};
	let handleChangeC = e => {
		setCarbs(Array.isArray(e) ? e.map(x => x.value) : []);
	};

	let handleChangeV = e => {
		setVeggies(Array.isArray(e) ? e.map(x => x.value) : []);
	};

	const sendIngredients = async e => {
		list = list.concat(proteins, carbs, veggies);
		dictionary = { search: list };
		const succes = await actions.searchRecipes(dictionary);
		if (succes) {
			history.push("/recipes");
		}
	};

	const selectProteins = [
		{ label: "🥩 Beef", value: "beef" },
		{ label: "🍗 Chicken", value: "chicken" },
		{ label: "🍳 Eggs", value: "eggs" },
		{ label: "🐠 Fish", value: "fish" },
		{ label: "🍖 Lamb", value: "lamb" },
		{ label: "🥓 Pork", value: "pork" },
		{ label: "🥖 Sausage", value: "sausage" }
	];

	const selectCarbs = [
		{ label: "🍝 Pasta", value: "pasta" },
		{ label: "🍚 Rice", value: "rice" },
		{ label: "🥔 Potato", value: "potato" },
		{ label: "🍞 Bread", value: "bread" },
		{ label: "🍥 Flour", value: "flour" },
		{ label: "🧀 Cheese", value: "cheesepep" },
		{ label: "🧈 Butter", value: "butter" }
	];

	const selectVegetables = [
		{ label: "🥕 Carrot", value: "carrot" },
		{ label: "🍅 Tomato", value: "tomato" },
		{ label: "🧅 Onion", value: "onion" },
		{ label: "🌶 Peppers", value: "peppers" },
		{ label: "🥦 Brocoli", value: "brocoli" },
		{ label: "🧄 Garlic", value: "garlic" },
		{ label: "🌿 Basil", value: "basil" }
		// { label: "🥫 Peas", value: "peas" },
		// { label: "🍄 Mushrooms", value: "mushrooms" },
		// { label: "🛢 Olive Oil", value: "olive oil" }
	];

	return (
		<React.Fragment>
			<div className="wrapper">
				<div className="container">
					<div className="row">
						<div className="col-md-12 ingredients-selection">
							<h1>Choose your ingredients</h1>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4 ingredients-icons">
							<img src={protein} alt="protein" />
							<Select
								captureMenuScroll={false}
								placeholder="Protein..."
								isMulti
								options={selectProteins}
								onChange={handleChangeP}
							/>
						</div>
						<div className="col-md-4 ingredients-icons">
							<img src={carb} alt="carbs" />
							<Select
								placeholder="Carbs..."
								isMulti
								options={selectCarbs}
								captureMenuScroll={false}
								onChange={handleChangeC}
							/>
						</div>
						<div className="col-md-4 ingredients-icons">
							<img src={veggie} alt="veggie" />
							<Select
								placeholder="Veggies..."
								isMulti
								options={selectVegetables}
								captureMenuScroll={false}
								onChange={handleChangeV}
							/>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12 button-alignment button-style">
							<button onClick={sendIngredients}>Search your Recipe</button>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default IngredientSelection;
