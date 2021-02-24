import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/RecipeResults.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function RecipesResult({ img, name, id, description }) {
	return (
		<React.Fragment>
			<div className="card-group card-size">
				<div className="card shadow mb-5">
					<img src={img} className="card-img-top" alt="" />
					<div className="card-body recipe-button">
						<h5 className="card-title">{name}</h5>
						<Link to={`/recipe/${id}`}>
							<button>Full Recipe</button>
						</Link>
					</div>
				</div>
			</div>
			<div className="description-alignment">
				<p>{description}</p>
			</div>
		</React.Fragment>
	);
}
RecipesResult.propTypes = {
	img: PropTypes.img,
	name: PropTypes.string,
	id: PropTypes.number,
	description: PropTypes.string
};

export default RecipesResult;
