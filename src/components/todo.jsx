import {observer} from "mobx-react-lite";
import {useStores} from "../store/RootStoreContext.js";
import {useInput} from "../hooks/useInput.js";

const Todo =observer( () => {
    const {TodoStore} = useStores();
    const {todo,deleteTodo,addTodo,completeTodo} = TodoStore;
    const textField = useInput("");
    const keyDownHandler = (e)=>{
        if(e.key === 'Enter'){
            addTodo(textField.value)
        }
    }
    return (
        <div>
            <div style={{display:'flex',justifyContent:"center",gap:4}}>
                <input className="input" onKeyDown={keyDownHandler} {...textField}/>
                <button className="btn" onClick={()=>addTodo(textField.value)}>add case</button>
            </div>
            <ul>
                {todo.map(({id,name,date,completed})=>{
                    const d =new Date(date);
                    return <li className="todo-item" key={id}>
                        <label>
                            <input type="checkbox" checked={completed} onChange={() => completeTodo(id)}/>
                            <span className="checkmark"></span>
                        </label>
                        <span>{name}</span>
                        <span>{d.toTimeString().split(" ")[0]}</span>
                        <button className="btn" onClick={() => deleteTodo(id)}> delete</button>
                    </li>
                })}
            </ul>
        </div>
    );
});

export default Todo;