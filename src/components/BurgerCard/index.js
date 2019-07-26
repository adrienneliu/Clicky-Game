import React from "react";

function BurgerCard(props) {
  return (
    <div className="card">
      <div className="img-container">
          {/* inside of a CARD, there is an img-container, where we are setting up <img src> with url from burgers.json */}
        <img alt={props.name} src={props.image} 
        // adding onclick to <img src> removes burger
            onClick={() => props.removeBurger(props.id)}/>
            {console.log(props.id)}
      </div>
      <div className="content">
        <ul>

              {/* name not required, but at least it shows, so we can add that to navbar later */}
            <strong>Name:</strong> {props.name}

        </ul>
      </div>
      {/* this is an onclick function that we made in app.js. when user clicks on [x] the image card will be removed */}
      {/* need to find out how to just click image */}
      {/* <span onClick={() => props.removeBurger(props.id)} className="remove">
        𝘅
      </span> */}
    </div>
  );
}

export default BurgerCard;
