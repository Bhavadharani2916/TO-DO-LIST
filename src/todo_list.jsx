import React, {useState} from "react";
import "./todolist.css";

const List = () => {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);

    const handleAdd = () => {
        if (task.trim() ==="") return;
        setTodos ([...todos,{id:Date.now(),Text:task, completed:false}]);
        setTask("");
    };
    
    const handleToggle = (id) => {
        setTodos(
            todos.map((todo) => 
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };
const handleDelete = (id) => {
    setTodos (todos.filter((todo) =>todo.id !==id));
};

return (
    <div className="app">
        <h1>TO-DO LIST</h1>
        <div class ="todo-input">
            <input
            type="text"
            placeholder="Enter a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}/>
            <button onClick={handleAdd}>ADD</button>

        </div>
        <ul className="todo-list">
            {todos.map((todo)=>(
                <li key={todo.id} className={todo.completed ?"completed" : ""}>
                    <span onClick={()=> handleToggle(todo.id)}>{todo.Text}</span>
                    <div className="button">
                    <button onClick={() => handleDelete (todo.id)}>Delete</button>
                    </div>
                </li>
            ))}
        </ul>
    </div>
);
    

};
export default List;