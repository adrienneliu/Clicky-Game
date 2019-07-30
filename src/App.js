import React, { Component } from 'react';
import './App.css';
import burgers from "./burgers.json";
import BurgerCard from "./components/BurgerCard";
import Header from "./components/Header";

//TODO: 
// navbar
//    li: [title, click], [you guessed in/correct], [score/high score]
// header with brief instructions
// pictures area
// bottom div
// footer
var shuffle = require("shuffle-array")

class App extends Component {

  //Set this.state.food to json array
  state = {
    burgers,
    clicked: [],
    correctScore: 0,
    message: ""
  };

  handleIncrement = id => {
    shuffle(this.state.burgers)
    console.log(id)
    if (this.state.clicked.includes(id)) {
      this.setState({correctScore: 0, clicked: [], message: "Aw, game over. Try again."})
      // console.log("me??", id)
      // console.log("oh no!")
      // alert("Try again!")
    } else if (this.state.correctScore === 11) {
      this.setState({correctScore: 0, clicked: [], message: "You won!"})
      // alert("You Win")
    }
    else {
      this.state.clicked.push(id)
      // console.log("id")
      // console.log(id)
      this.setState({ correctScore: this.state.correctScore + 1, message: "Yeah! Keep going!"})
    };
  }

  render() {
    return (
      <div className="wrapper">
        <Header score={this.state.correctScore} message={this.state.message}>Clicky Game</Header>
        {/* <div className="container"> */}
        <div className="container">
          {/* This goes through the array and displays the info in burger card */}
          {this.state.burgers.map(burger => (
            <BurgerCard
              // selectBurger={this.selectBurger}
              handleIncrement={this.handleIncrement}
              id={burger.id}
              key={burger.id}
              name={burger.name}
              image={burger.image}
            />))}
          {/* </div> */}
        </div>
      </div>

    );
  }
}
export default App;
