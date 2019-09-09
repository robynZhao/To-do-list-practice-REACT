import React from "react";
import Todo from './Todo';

const TodoList = props => {
    return (
        <div>
            {props.todoList.map((singleTodo, id) => (
                <Todo singleTodo={singleTodo} key={id}/>
            ))}
        </div>
    )
}
export default TodoList;
