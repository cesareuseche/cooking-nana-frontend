import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/Recipes.css";
import RecipesResult from "../component/RecipeResults";

function Recipes() {
	const { store, actions } = useContext(Context);

	const obtenerId = async () => {
		let succes = await actions.saveRecipes();
	};

	useEffect(() => {
		obtenerId();
	}, []);

	return (
		<React.Fragment>
			<div className="container-fluid presentation-width recipe-result">
				<div className="row mobile-margin first-result-align" />
				<div className="recipe-row col-md-12">
					{store.recipes.map(recipe => (
						<RecipesResult key={recipe.id} recipe={recipe} />
					))}
				</div>
			</div>
		</React.Fragment>
	);
}

export default Recipes;
