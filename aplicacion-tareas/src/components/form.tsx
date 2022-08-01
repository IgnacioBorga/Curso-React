import { type } from "@testing-library/user-event/dist/type";
import React, {useState} from "react";
import "../styles/todoForm.css";
import TodoList from "./TodoList";


function TodoForm(props) {
    const { v4: uuidv4 } = require('uuid');
    const [input, setInput] = useState("");

    const listenTask = e => {
        setInput(e.target.value);
    }

    const sendTask = e => {
        e.preventDefault();
        console.log(typeof(e))
        
        const newTask = {
            id: uuidv4(), 
            text: input,
            completed: false
        }
        
        props.onSubmit(newTask);
    }

    return(
        <form 
        action="" className="todo-form"
        onSubmit={sendTask}>
        
            <input 
                type="text" 
                className="todo-input"
                placeholder="Nueva tarea"
                name="text"
                onChange={listenTask}
            />
            <button className="todo-button">Agregar Tarea</button>
        </form>
    );
}

export default TodoForm;