import React from "react";
import Proptypes from "prop-types"
import { Link } from "react-router-dom";
import "../../styles/card.css";

const Card = (props) => {
  return (
    <div className="card">
      <img src="https://via.placeholder.com/250x150" />
        <div className="card-body">
          <h5 className="card-title">{props.item.name}</h5>
          <h6 className="card-text"><b>Gender:</b> {props.item.gender}</h6>
						<h6 className="card-text"><b>Hair Color:</b> {props.item.hair_color}</h6>
						<h6 className="card-text"><b>Eye Color:</b> {props.item.eye_color}</h6>
						<div className="d-flex justify-content-between">
							<Link className="btn btn-outline-primary">
								Learn more!
							</Link>
            </div>
        </div>
    </div>
  );
};


Card.proptype = {item: Proptypes.object,}
export default Card;