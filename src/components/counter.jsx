import {observer} from "mobx-react-lite";
import {useStores} from "../store/RootStoreContext.js";

const Counter = observer(() => {
    const {CounterStore} = useStores();
    const  {count,decrement,increment} =  CounterStore;
    return (
        <div className="counter-container">
            <button className="btn" onClick={()=>decrement(1)}>
                -
            </button>
            <h1>{count}</h1>
            <button className="btn" onClick={()=>increment(1)}>
                +
            </button>
        </div>
    );
});

export default Counter;