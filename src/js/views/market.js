import React from "react";
import "../../styles/Market.css";
//Importing the components
import MarketProducts from "../component/marketProducts";
import { Footer } from "../component/footer";
// Importing all the images
import marketimage from "../../img/market.jpg";
import wine1 from "../../img/wine1.jpg";
import italianWine from "../../img/italian-wine.jpg";
import frenchWine from "../../img/french-wines.jpg";
import chefKnife from "../../img/chef-knife.jpg";
import sartenSalmon from "../../img/pan-market.jpg";
import sartenGrande from "../../img/sarten-market.jpg";
import spiceBundle from "../../img/spice-bundle-market.jpg";
import tuscanBlend from "../../img/tuscan-blend.jpg";
import kosherSalt from "../../img/salt-market.jpg";

function Market() {
	return (
		<React.Fragment>
			<div className="market">
				<div className="market-container">
					<img className="market-image" src={marketimage} />
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-12 background-gray">
								<div className="product-category-font-alignment">
									<h1 className="margin-left-tools">Kitchen Tools</h1>
								</div>
							</div>
						</div>
					</div>
					<div className="product-row">
						<MarketProducts
							id={12364789}
							title={`Handcrafted Japanese Chef's knife`}
							price={114.99}
							rating={5}
							image={chefKnife}
						/>
						<MarketProducts
							id={189374980}
							title={'11" Nonstick Fry Pan'}
							price={102.99}
							rating={5}
							image={sartenSalmon}
						/>
						<MarketProducts
							id={1893378920}
							title={"Pan Stainless Steel Small Saucepan"}
							price={94.99}
							rating={4}
							image={sartenGrande}
						/>
					</div>
					<div className="container-fluid presentation-width">
						<div className="row">
							<div className="col-md-12">
								<h1 className="product-category-font-alignment">Pantry</h1>
							</div>
						</div>
					</div>
					<div className="product-row product-row-margin">
						<MarketProducts
							id={1893047630}
							title={"Spice Blend Bundle"}
							price={79.99}
							rating={4}
							image={spiceBundle}
						/>
						<MarketProducts
							id={189374980}
							title={"Italian Tuscan Blend"}
							price={9.99}
							rating={5}
							image={tuscanBlend}
						/>
						<MarketProducts
							id={1893768920}
							title={"Kosher Sea Salt"}
							price={8.99}
							rating={3}
							image={kosherSalt}
						/>
					</div>
					<div className="container-fluid presentation-width">
						<div className="row">
							<div className="col-md-12">
								<div className="market-icons" />
								<h1 className="product-category-font-alignment">Wines</h1>
							</div>
						</div>
					</div>
					<div className="product-row product-row-margin product-row-margin-bottom">
						<MarketProducts
							id={18973634374}
							title={"Essential Dinner Pairings - Multipack"}
							price={59.99}
							rating={4}
							image={wine1}
						/>
						<MarketProducts
							id={18937894853}
							title={"Italian Favorites - Perfect with red sauce"}
							price={70.99}
							rating={5}
							image={italianWine}
						/>
						<MarketProducts
							id={18937434586}
							title={"French Wines Bundle"}
							price={59.99}
							rating={5}
							image={frenchWine}
						/>
					</div>
					<Footer />
				</div>
			</div>
		</React.Fragment>
	);
}

export default Market;
