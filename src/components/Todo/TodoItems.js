import React, { Component } from "react";
import "./TodoItems.scss";

class TodoItems extends Component {
  constructor(props) {
    super(props);

    this.createTasks = this.createTasks.bind(this);
  }

  delete(key) {
    this.props.delete(key);
  }

  createTasks(item) {
    return (
      <div className="todo__list">
        <div className="todo__items">
          <div className="todo__task">
            <input type="checkbox" key={item.key} />
            <label>{item.text}</label>
          </div>
          <div>
            <button
              className="fas fa-trash"
              onClick={() => this.delete(item.key)}
            ></button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    let todoEntries = this.props.entries;
    let listItems = todoEntries.map(this.createTasks);

    return <ul className="todo">{listItems}</ul>;
  }
}

export default TodoItems;
