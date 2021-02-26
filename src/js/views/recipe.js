import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/Recipe.css";

function Recipe() {
	const { store, actions } = useContext(Context);

	return (
		<React.Fragment>
			<div className="container-fluid background-recipe">
				<div className="row row-recipe-responsive">
					<div className="col-md-6 recipe-title recipe-image">
						<h1>This is your Recipe</h1>
						<h3>{store.recipeToShow.name}</h3>
						<img src={store.recipeToShow.img_url} alt="" />
					</div>
					<div className="col-md-6 col-sm-12 recipe-text">
						<p>{store.recipeToShow.description}</p>
						<p>{store.recipeToShow.instructions}</p>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Recipe;
