import React from "react";
import './Add.css';

const Add = () => {
    return (
        <form>
            <label for="name">New task:</label>
            <input id="input" type="text" id="name" name="name"></input>
            <button>Add</button>
        </form>
    );
}

export default Add;
