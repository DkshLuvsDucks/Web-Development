import { useDispatch, useSelector } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo, markAsDone } from "../../features/todo/todoSlice";

export default function Todo(){
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const deleteHandler = (id) => {
        console.log(`delete id:  ${id}`);
        dispatch(deleteTodo(id));
    };

    const markAsDoneHandler = (id) => {
        console.log(`mark as done id:  ${id}`);
        dispatch(markAsDone(id));
    };

    return(
        <>
            <h2>Todo-List</h2>
            <AddForm/>
            <ul>
                {todos.map((todo) => (
                    <li 
                        key={todo.id}
                        style={{ textDecoration: todo.isDone ? "line-through" : "none" }}
                    >
                        {todo.task}
                        <button onClick={()=>deleteHandler(todo.id)}>Delete</button>
                        <button onClick={()=>markAsDoneHandler(todo.id)}>Mark As Done</button>
                    </li>
                ))}
            </ul>
        </>
    );
}