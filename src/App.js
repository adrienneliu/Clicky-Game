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
  };

handleIncrement = () => {
  shuffle(this.state.burgers)
  this.setState({correctScore: this.state.correctScore + 1})
}

  // handleCorrect = () => {
  //   this.setState({
  //     clicked: true
  //   });
  // }


  // selectBurger = id => {


  //   if (clicked.includes(id)) {
  //     alert("you lost")
  //     this.setState({ clicked: [], score: 0 })
  //     this.loadNextCard();
  //   } else {
  //     clicked.push(id)
  //     console.log(clicked)

  //     if (this.highScore === 12) {
  //       this.setState({ highScore: 12 })
  //       alert("Winner");
  //       return;
  //     }
  //    }
  // };

  render() {
    return (
      <div>
        <Header score={this.state.correctScore} highscore={this.state.highScore}>Clicky Game</Header>
        {/* <div className="container"> */}
        <div className="wrapper">

          {/* This goes through the array and displays the info in burger card */}
          {this.state.burgers.map(burger => (
            <BurgerCard
              // selectBurger={this.selectBurger}
              handleIncrement = {this.handleIncrement}
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
