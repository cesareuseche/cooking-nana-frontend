import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/Recipe.css";
import { useParams } from "react-router-dom";

function Recipe() {
	const { store, actions } = useContext(Context);
	const [recipe, setRecipe] = useState({});
	const params = useParams();
	useEffect(
		() => {
			let selectedRecipe = store.recipes.length > 0 ? store.recipes.find(recipes => recipes.id == params.id) : {};
			setRecipe(selectedRecipe);
		},
		[store.recipes, params]
	);
	return (
		<React.Fragment>
			<div className="container-fluid">
				<div className="row row-recipe-responsive">
					<div className="col-md-6 recipe-title recipe-image">
						<h1>This is your Recipe</h1>
						<h3>{recipe.name}</h3>
						<img src={recipe.img_url} alt="" />
					</div>
					<div className="col-md-6 col-sm-12 recipe-text">
						<p>{recipe.description}</p>
						<p>{recipe.instructions}</p>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Recipe;
