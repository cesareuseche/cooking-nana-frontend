import React from "react";
import "../../styles/RecipesResults.css";
import PropTypes from "prop-types";

function RecipesResult({ title, image, description }) {
    return (
        <React.Fragment>
            <div className="card-group card-size">
                <div className="card shadow mb-5">
                    <img src={image} className="card-img-top" alt="" />
                    <div className="card-body recipe-button">
                        <h5 className="card-title">{title}</h5>
                        <button>Full Recipe</button>
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
    image: PropTypes.src,
    title: PropTypes.string,
    description: PropTypes.string
};

export default RecipesResult;
