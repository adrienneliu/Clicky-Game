import React from "react";
import "./style.css";

function BurgerCard(props) {

  return (
    <div className="card" >
      <div className="img-container" onClick={() => 
        {props.handleIncrement(props.id)}} >
        <img alt={props.name} src={props.image}/>
      </div>

    </div>
  );
}

export default BurgerCard;
