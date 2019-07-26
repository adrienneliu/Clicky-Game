import React, {Component} from 'react';
import './App.css';
import foods from "./foods.json";

class App extends Component {

  //Set this.state.food to json array
  state = {
    foods
  };

  render(){
  return (
    <div className="App">
        <h1>Hello</h1>
    </div>
  );
}
}
export default App;
