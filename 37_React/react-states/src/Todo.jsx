import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todo() {
    let [todos, setTodos] = useState([{ task: "sample", id: uuidv4(), isDone: false }]);
    let [newTask, setNewTask] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTask, id: uuidv4(), isDone: false }]
        });
        setNewTask("");
    }

    let updateTodoValue = (e) => {
        setNewTask(e.target.value);
    }

    let deleteTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((prevTodos) => prevTodos.id != id)
        });
    }

    let uppercaseAll = () => {
        setTodos((prevTodos) => (
            prevTodos.map((todo) => {
            return {
                ...todo,
                task: todo.task.toUpperCase(),
            };
        })))
    }

    let uppercaseOne = (id) => {
        setTodos((prevTodos) => (
            prevTodos.map((todo) => {
                if(todo.id == id){
                    return {
                        ...todo,
                        task: todo.task.toUpperCase(),
                    };
                }
                else{
                    return todo;
                }
            })))
    }

    let markDone = (id) => {
        setTodos((prevTodos) => (
            prevTodos.map((todo) => {
                if(todo.id == id){
                    return {
                        ...todo,
                        isDone: true,
                    };
                }
                else{
                    return todo;
                }
            })))
    }

    let markAllDone = () => {
        setTodos((prevTodos) => (
            prevTodos.map((todo) => {
            return {
                ...todo,
                isDone: true,
            };
        })))
    }

    return (
        <>
            <br /><br />
            <h2>To-Do List</h2>
            <input
                placeholder="add a task..."
                value={newTask}
                onChange={updateTodoValue}
            />
            <button onClick={addNewTask}>Add Task</button>
            <br />
            <button onClick={uppercaseAll}>Uppercase All</button>
            <br /><hr />
            <h4>Tasks To-Do</h4>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span style={todo.isDone ? {textDecorationLine: "line-through"} : {} }>{todo.task}</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        <button onClick={() => uppercaseOne(todo.id)}>Uppercase One</button>
                        <button onClick={() => markDone(todo.id)}>Mark Done</button>
                    </li>
                ))}
            </ul>
            <button onClick={markAllDone}>Mark All Done</button>
        </>
    );
}; 