import React from "react";
import "./style.css";

// const Header = props => (
//   <div className="header">
//     <div className="title">{props.children}</div>
//     <div className="scores">
//       Score: {props.score} Highscore: {props.highscore}
//     </div>
//   </div>
// );

function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-warning" style ={{height: 100}}>
      <div className="header">
        <div className="row">
        <div className="col title">{props.children}</div>
        <div className="col message">{props.message}</div>
        <div className="col scores">Score: {props.score} </div>
        </div>
</div>
    </nav>
  );
}

export default Header;