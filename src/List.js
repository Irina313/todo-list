import { Component } from 'react';
import check from './check.png';

export class List extends Component {

    state = {
userInput: "",
list: []
    }

    onChangeList(e) {
       this.setState({userInput: e})
    }
    addItem(input) {
        if (input ==='') {
            alert ("Please enter an item")
        }
        else {
        let listArray = this.state.list;

        listArray.push(input);

        this.setState({list: listArray, userInput:''})
        }
    }
deleteItem() {
    let listArray = this.state.list;
    listArray = [];
    this.setState({list: listArray})
}

crossedWord(event) {
    const li = event.target
    li.classList.toggle ('crossed');
}
handleSubmit(e) {
    e.preventDefault();
}
    render () {
        return(
            <div>
                <form onSubmit = {this.handleSubmit}>
            <div className="container">
                <input type="text"
                placeholder="What do you want to do?"
                onChange={(e) => {this.onChangeList(e.target.value)}}
                value={this.state.userInput}/>
            </div>
            <div className="container">
                <button className="add" onClick={() => this.addItem(this.state.userInput)}>Add</button>
            </div>
<ul>
    {this.state.list.map((item, index) => (
        <li onClick = {this.crossedWord} key={index} alt="checkbox"><img src={check} width="40px" alt="check"/>{item}</li>
    ))}
</ul>
<div className="container">
<button className="delete" onClick = {() => this.deleteItem()}>Delete</button>
</div>
</form>
</div>
  )
    }
}