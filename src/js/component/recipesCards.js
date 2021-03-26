import React from "react";
import "../../styles/RecipesCards.css";
import bowl from "../../img/poke.jpg";
import pasta from "../../img/pasta.jpg";
import burger from "../../img/burger.jpg";
import tacos from "../../img/tacos.jpg";

const RecipesCards = () => {
	return (
		<React.Fragment>
			<div className="container-fluid presentation-width">
				<div className="row mt-4">
					<div className="col-md-3">
						<div className="card-group">
							<div className="card shadow mb-5">
								<img src={bowl} className="card-img-top recipe-cards" alt="" />
								<div className="card-body">
									<h5 className="card-title">Hawaian Poke</h5>
									<p className="card-text" />
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-3">
						<div className="card-group">
							<div className="card shadow">
								<img src={pasta} className="card-img-top recipe-cards" alt="" />
								<div className="card-body">
									<h5 className="card-title">Spaghetti Marinara</h5>
									<p className="card-text" />
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-3">
						<div className="card-group">
							<div className="card shadow">
								<img src={tacos} className="card-img-top recipe-cards" alt="" />
								<div className="card-body">
									<h5 className="card-title">Gourmet Tacos</h5>
									<p className="card-text" />
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-3">
						<div className="card-group">
							<div className="card shadow">
								<img src={burger} className="card-img-top recipe-cards" alt="" />
								<div className="card-body">
									<h5 className="card-title">Gourmet Burger</h5>
									<p className="card-text" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};
export default RecipesCards;
