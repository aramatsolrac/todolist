import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.scss";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  addItem(item) {
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

    item.preventDefault();
  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return item.key !== key;
    });

    this.setState({
      items: filteredItems,
    });
  }
  render() {
    return (
      <div className="todo__list">
        <form className="todo__form" onSubmit={this.addItem}>
          <input
            ref={(e) => (this._inputElement = e)}
            placeholder="Enter task"
            className="todo__input"
          ></input>
          <button type="submit" className="todo__button">
            Add
          </button>
        </form>
        <TodoItems entries={this.state.items} delete={this.deleteItem} />
      </div>
    );
  }
}

export default TodoList;
