import React from "react";
import "../../styles/Recipes.css";
import bowl from "../../img/poke.jpg";
import pasta from "../../img/pasta.jpg";
import risotto from "../../img/risotto.jpg";
import RecipesResult from "../component/RecipeResults";

function Recipes() {
	return (
		<React.Fragment>
			<div className="container-fluid presentation-width recipe-result">
				<div className="row mobile-margin first-result-align" />
				<div className="recipe-row col-md-12">
					<RecipesResult
						image={bowl}
						description={`This is the snippet of the recipe`}
						title={`Hawaian Bowl`}
					/>
				</div>
				<div className="recipe-row col-md-12">
					<RecipesResult
						image={pasta}
						description={`This is the snippet of the recipe`}
						title={`Hawaian Bowl`}
					/>
				</div>
				<div className="recipe-row col-md-12">
					<RecipesResult
						image={risotto}
						description={`This is the snippet of the recipe`}
						title={`Hawaian Bowl`}
					/>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Recipes;
