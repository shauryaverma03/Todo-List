import { useState }  from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    let [todos, settodos] = useState([{task: "sample task", id: uuidv4()}]);
    let [newtodo, setnewtodo] = useState("");

    let addnewtask = () => {
        settodos((prevTodos) => {
            return ([...prevTodos, {task: newtodo, id: uuidv4()}]);
        });
        setnewtodo("");
    }

    let updateTodovalue = (event) => {
        setnewtodo(event.target.value);
    }

    let deletetodo = (id) => {
        settodos(todos.filter((todo) => todo.id !== id));
    }

    let upperCaseAll = () => {
        settodos((prevTodos) =>
             prevTodos.map((todo) => {
            return {
                ...todo, 
                task: todo.task.toUpperCase()
            }
        }));
    }

    let upperCaseOne = (id) => {
        settodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        task: todo.task.toUpperCase()
                    };
                }
                else {
                    return todo;
                }
            })
        );
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
                        return (
                        <li key={todo.id}>
                            <span>{todo.task}</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <button onClick={() => deletetodo(todo.id)}>Delete</button>
                            <button onClick={() => upperCaseOne(todo.id)}>UpperCase One</button>
                        </li>
                        )
                    })
                }
            </ul>
            <br /><br />
            <button onClick={upperCaseAll}>UpperCase All</button>
        </div>
    )
}