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
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="header">
        <div className="title">{props.children}</div>
        <div className="scores">
          Score: {props.score} Highscore: {props.highscore}
        </div>
      </div>
    </nav>
  );
}

export default Header;