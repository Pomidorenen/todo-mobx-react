import Counter from "./components/counter.jsx";
import Search from "./components/search.jsx";
import {RootStoreContext} from "./store/RootStoreContext.js";
import store from "./store/index.js";
import Todo from "./components/todo.jsx";
import "./styles/app.scss";
import {useState} from "react";
const list =[
    {
        name:"todo list",
        element:<Todo/>
    },
    {
        name:"Counter",
        element:<Counter/>
    },
    {
        name:"search",
        element:<Search/>
    }
];
function App() {
    const [elemnent,setElement] = useState(list[0]);
    return (
    <>
        <RootStoreContext.Provider value={store}>
            <header>
            {list.map((el,i)=>{
                return <button className="btn" key={i} onClick={()=>{
                    setElement(el);
                }}>
                    {el.name}
                </button>
            })}
            </header>
            <div className="wrapper">
                {elemnent.element}
            </div>

        </RootStoreContext.Provider>
    </>
  )
}

export default App
