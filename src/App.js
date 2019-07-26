import React, {Component} from 'react';
import './App.css';
import burgers from "./burgers.json";
import Wrapper from "./components/Wrapper/index";
import BurgerCard from "./components/BurgerCard/index";


//TODO: 
// navbar
//    li: [title, click], [you guessed in/correct], [score/high score]
// header with brief instructions
// pictures area
// bottom div
// footer

class App extends Component {

  //Set this.state.food to json array
  state = {
    burgers
  };

  removeBurger = id => {
    // Filter this.state.burgers for characters with an id not equal to the id being removed
    const burgers = this.state.burgers.filter(burger => burger.id !== id);
    // Set this.state.burgers equal to the new burgers array
    this.setState({ burgers });
  };

  render(){
  return (
    <Wrapper>
      <div className="App">
          <h1>Hello</h1>
{/* This maps through the array and displays the pictures in burger card */}
          {this.state.burgers.map(burger => (
          <BurgerCard
          removeBurger={this.removeBurger}
          id={burger.id}
          key={burger.id}
          name={burger.name}
          image={burger.image}
          />
          ))}

      </div>
    </Wrapper>
  );
}
}
export default App;
