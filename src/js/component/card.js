import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import placeholder from "../../img/placeholder.jpg"
import PropTypes from "prop-types";

function Card(props) {

	const { store, actions } = useContext(Context);


	const picture = props.id + 1;
	const pic = "https://starwars-visualguide.com/assets/img/" + props.section + "/" + picture + ".jpg";
	const nopicture = placeholder

	const isfavorite = () => {
		if (store.favorites.includes(props.name)){
			actions.deleteFavorite(props.name);
		} else {
			actions.addFavorite(props.name);
		}
	}

	return (
		<div>
			<div className="card border-light me-4 mb-4">
				<div className="card-body mb-5">
				<img src={props.section != "characters" && props.id <0   ? nopicture : pic} className="card-img-top" alt="" style={{ width: "200px", height:"280px" }}/>
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text">
						{props.labelText1} {props.text1}
					</p>
					<div className="downButtons d-flex justify-content-between">
						<Link to={"/" + props.section + "/" + props.id} className="btn  " style={{color:"black", background:"hsl(50, 84%, 51%)"}}>
							Details
						</Link>
						<button
							type="button"
							className="btn " style={{color:"black", background:"hsl(50, 84%, 51%)"}}
							id="heart"
							onClick={isfavorite}>
							{store.favorites.includes(props.name) ? (<FaHeart />) : (<FaRegHeart />)}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

Card.propTypes = {
	name: PropTypes.string,
	labelText1: PropTypes.string,
	labelText2: PropTypes.string,
	labelText3: PropTypes.string,
	text1: PropTypes.string,
	text2: PropTypes.string,
	text3: PropTypes.string,
	id: PropTypes.number,
	section: PropTypes.string
};

export default Card;