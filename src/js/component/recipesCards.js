import React from "react";
import bowl from "../../img/poke.jpg";
import pasta from "../../img/pasta.jpg";

const RecipesCards = () => {
	return (
		<React.Fragment>
			<div className="container-fluid presentation-width">
				<div className="row mt-4">
					<div className="col-md-3">
						<div className="card-group">
							<div className="card shadow mb-5">
								<img src={bowl} className="card-img-top" alt="" />
								<div className="card-body">
									<h5 className="card-title">Hawaian Poke Bowl</h5>
									<p className="card-text" />
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-3">
						<div className="card-group">
							<div className="card shadow">
								<img src={pasta} className="card-img-top" alt="" />
								<div className="card-body">
									<h5 className="card-title">Spaghetti Alla Carrettiera</h5>
									<p className="card-text" />
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-3">
						<div className="card-group">
							<div className="card shadow">
								<img src={pasta} className="card-img-top" alt="" />
								<div className="card-body">
									<h5 className="card-title">Spaghetti Alla Carrettiera</h5>
									<p className="card-text" />
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-3">
						<div className="card-group">
							<div className="card shadow">
								<img src={bowl} className="card-img-top" alt="" />
								<div className="card-body">
									<h5 className="card-title">Hawaian Poke Bowl</h5>
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
