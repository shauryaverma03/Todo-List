import { useState }  from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    let [todos, settodos] = useState([{task: "sample task", id: uuidv4()}]);
    let [newtodo, setnewtodo] = useState("");

    let addnewtask = () => {
        settodos([...todos, {task: newtodo, id: uuidv4()}]);
        setnewtodo("");
    }

    let updateTodovalue = (event) => {
        setnewtodo(event.target.value);
    }

    return (
        <div>
            <input placeholder="Add a task" value={newtodo} onChange={updateTodovalue}/>
            <br />
            <button onClick={addnewtask}>Add Task</button>
            <br /><br /><br /><br /><br /><br />

            <hr />
            <h4>Tasks ToDo</h4>
            <ul>
                {
                    todos.map((todo) => {
                        return <li key={todo.id}>{todo.task}</li>
                    })
                }
            </ul>
        </div>
    )
}