import { Component } from "react";
import checkImage from './img/purchase.png';

export class GroceryList extends Component {
    state = {
        userInput: '',
        groceryList: []
    }

    onChangeEvent(event) {
        this.setState({userInput: event})
    }

    addItem(input) {
        if (input === '') {
            alert("Please enter something")
        } else {
            let listArray = this.state.groceryList;
            listArray.push(input);
            this.setState({groceryList: listArray, 
                           userInput: ''})
        }
    }

    crossedWord(event) {
        const listItem = event.target;
        listItem.classList.toggle('crossed');
    }

    deleteItem() {
        let listArray = this.state.groceryList;
        listArray = []
        this.setState({groceryList: listArray})
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="container">
                        <input type="text" 
                        placeholder="What do you want to buy" 
                        onChange={(event) => {this.onChangeEvent(event.target.value)}}
                        value={this.state.userInput}/>
                    </div>
                    <div className="container">
                        <button className="container btn btn-add" onClick={() => this.addItem(this.state.userInput)}>Add</button>
                    </div>
                    <ul>
                        {this.state.groceryList.map((item, index) => (
                            <li onClick={this.crossedWord} 
                            key={index}>
                            <img src={checkImage} width="40px" alt="check" />
                            {item}</li>
                        ))}
                    </ul>
                    <div className="container">
                        <button className="btn btn-delete" onClick={() => this.deleteItem(this.state.userInput)}>Delete</button>
                    </div>
                </form>
            </div>
        )
    }
}