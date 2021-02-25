import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/RecipeResults.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function RecipesResult({ recipe }) {
	const { store, actions } = useContext(Context);

	const setRecipe = async () => {
		actions.setRecipeToStore(recipe);
	};

	return (
		<React.Fragment>
			<div className="card-group card-size recipe-description-align">
				<div className="card shadow mb-5">
					<img src={recipe.img_url} className="card-img-top" alt="" />
					<div className="card-body recipe-button">
						<h5 className="card-title">{recipe.name}</h5>
						<Link to={"/recipe"}>
							<button onClick={setRecipe}>Full Recipe</button>
						</Link>
					</div>
				</div>
				<div className="description-alignment">
					<p>{recipe.description}</p>
				</div>
			</div>
		</React.Fragment>
	);
}
RecipesResult.propTypes = {
	img: PropTypes.src,
	name: PropTypes.string,
	id: PropTypes.number,
	description: PropTypes.string,
	recipe: PropTypes.object
};

export default RecipesResult;
