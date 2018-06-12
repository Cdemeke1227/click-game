import React from "react";
import "./ClickCard.css";

const clickCard = props => (
  <div>
    <span onClick={() => props.clickedCard(props.id)} className="click" >
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />

          <div className="content">
          </div>
        </div>
      </div>
    </span>
  </div>

);

export default clickCard;