// This is where the individual todo components will live,
// and they’ll be repeatedly rendered in our TodoList.js file

import React from "react";

const Todo = props => {
    return (
        <div>
            <p>{props.singleTodo.task}</p>
        </div>
    )
}

export default Tode;
