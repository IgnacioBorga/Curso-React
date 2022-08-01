import { timingSafeEqual } from "crypto";
import React, {useState} from "react";
import TodoForm from "./form";
import ToDo from "./toDo";

function TodoList(){

    const [list, setList] = useState([]);

    const addTask = task => {
        if (task.text.trim()){
            task.text = task.text.trim();
            const updatedList = [ task, ...list]
            setList(updatedList)
        }
    }

    const deleteTask = id =>{
        const updatedList = list.filter(task => task.id !== id);
        setList(updatedList)
    }

    const completeTask = id =>{
        const updatedList = list.map(task => {
            if (task.id === id ){
                task.completed = !task.completed;
            }
            return task
        }
        )
        setList(updatedList)
    }

    return(
        <>
            <TodoForm 
            onSubmit = {addTask} />
            <div className="todo-list-container">
                {
                    list.map((task) =>
                        <ToDo 
                            key= {task.id}
                            id = {task.id}
                            text = {task.text}
                            completed = {task.completed}
                            deleteTask = {deleteTask}
                            completeTask = {completeTask}

                        />)
                }
            </div>

        </>
    );
}

export default TodoList;