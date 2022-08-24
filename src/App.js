import { Component } from "react";

import './App.css';
import shoppingImage from './img/shopping.jpg';
import manImage from './img/man.jpg';
import { GroceryList } from './GroceryList';
import heart1Image from './img/heart1.jpg';
import heart2Image from './img/heart2.jpg';


class App extends Component {
  state = {
    message: "Like Us",
    image: heart1Image,
}

heartClicked = () => {
  this.setState({
    message: "Thank You!",
    image: heart2Image
  })
}

render() {
  return (
    <div className='app'>
      <div className="container-heart">
        <h2>{this.state.message}</h2>
        <img onClick={this.heartClicked} className="heart" src={this.state.image} alt="heart" width="60px"/>
      </div>
        <div className="container">
          <img src={ shoppingImage } width="150px" alt="shopping"/>
        </div>
      <div className="container">
        <h1>Grocery List</h1>
      </div>
      <GroceryList />
      <div className="container">
        <img src={ manImage } width="200px" alt="man"/>
      </div>
    </div>
  );
}
}

export default App;
