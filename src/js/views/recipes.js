import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/Recipes.css";
import RecipesResult from "../component/RecipeResults";

function Recipes() {
	const { store, actions } = useContext(Context);
	let recipes = [];
	useEffect(() => {
		let ingredients = [];
		let selectedIngredients = store.selectedIngredients;
		let matchs = [];
		let counter = 0;
		let counter1 = 0;
		let match = 0;
		for (let i = 0; i < store.recipes.length; i++) {
			ingredients = store.recipes[i].ingredients;
			for (let j = 0; j < selectedIngredients.length; j++) {
				for (let k = 0; k < ingredients.length; k++) {
					if (selectedIngredients[j] == ingredients[k]) {
						counter++;
						break;
					}
				}
			}
			counter1 = store.recipes[i].ingredients.length;
			match = (counter * 100) / counter1;
			if (match >= 70) {
				matchs.push(match);
				recipes.push(store.recipes[i]);
			}
		}
	});

	return (
		<React.Fragment>
			<div className="container-fluid presentation-width recipe-result">
				<div className="row mobile-margin first-result-align" />
				<div className="recipe-row col-md-12">
					{/* {recipes.map((recipe, i) => (
						<RecipesResult
							key={i}
							img={recipe.img_url}
							description={recipe.description}
							name={recipe.name}
							id={recipe.id}
							match={matchs[i]}
						/>
					))} */}
				</div>
			</div>
		</React.Fragment>
	);
}

export default Recipes;
