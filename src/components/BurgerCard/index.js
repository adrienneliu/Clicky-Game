import React from "react";

function BurgerCard(props) {

  return (
    <div className="card" >
      <div className="img-container" onClick={() => 
        // {props.selectBurger(props.id)}} >
        {props.handleIncrement()}} >
        <img alt={props.name} src={props.image}/>
          {/* // className="selectBurger"/> */}
        {/* // handleBtnClick={this.handleBtnClick} /> */}
      </div>

    </div>
  );
}

export default BurgerCard;
