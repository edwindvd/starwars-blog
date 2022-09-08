import React from "react";
import Proptypes from "prop-types"
import { Link } from "react-router-dom";
import "../../styles/card.css";
import { useState } from "react";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faHeart} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { Context } from "../store/appContext";

const Card = ( props ) => {
  const [favorite, setFavorite] = useState(false)
  const { store, actions } = useContext(Context)
 
  return (
    <div className="card">
      <img src="https://via.placeholder.com/250x150" />
        <div className="card-body">
          <h5 className="card-title">
            {props.item.name} 
            </h5>
          {/* <h6 className="card-text"><b>Gender: </b> 
          {props.item.gender} 
          </h6>
						<h6 className="card-text"><b>Hair Color:</b>
             {props.item.hair_color}
            </h6>
						<h6 className="card-text"><b>Eye Color:</b>
             {props.item.eye_color}
            </h6> */}
             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							<div className="d-flex justify-content-between">
							<Link to={`/character/${props.item.uid}`} className="btn btn-outline-primary">
								Learn more!
							</Link>
							<button type="button" className="btn btn-outline-warning" onClick={() => {
								actions.addFavorites(item.properties.name)
								setFavorite(true)
							}}> esto
                {/* <FontAwesomeIcon icon={faHeart} /> */}
              </button>
						</div>
        </div>
    </div>
  );
};


Card.proptype = {item: Proptypes.object,}
export default Card;