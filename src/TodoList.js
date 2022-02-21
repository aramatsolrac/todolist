import React, { Component } from "react";
import TodoItems from "./TodoItems";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };

    this.addItem = this.addItem.bind(this);
  }
  addItem(e) {
    if (this._inputElement.value !== "") {
      let newItem = {
        text: this._inputElement.value,
        key: Date.now(),
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem),
        };
      });

      this._inputElement.value = "";
    }

    console.log(this.state.items);

    e.preventDefault();
  }
  render() {
    return (
      <>
        <form onSubmit={this.addItem}>
          <input
            ref={(a) => (this._inputElement = a)}
            placeholder="Enter task"
          ></input>
          <button type="submit">Add</button>
        </form>
        <TodoItems entries={this.state.items} />
      </>
    );
  }
}

export default TodoList;