import {observer} from "mobx-react-lite";
import {useEffect, useState} from "react";
import {useInput} from "../hooks/useInput.js";
import {getDataByWord} from "../features/getDataByWord.js";
import HighlightText from "./highlightText.jsx";
import {useStores} from "../store/RootStoreContext.js";



const Search = observer(() => {
    const {StationStore} = useStores();
    const {stations,getStationsAction} = StationStore;
    const [sort,setSort] = useState([]);
    const textField = useInput("П");
    useEffect(() => {
        getStationsAction();
    },[]);
    useEffect(()=>{
        if(!stations)return;
        const data = getDataByWord(textField.value,stations.value);
        setSort(data.slice(0, 10));
    },[textField.value]);
    return stations&&stations.case({
        pending: () => <div>loading</div>,
        rejected: () => <div>error</div>,
        fulfilled: () =><div>
            <input className="input" type="text" {...textField}/>
            <ul>
            {sort.map(({id, name}) => {
                return <li  key={id} >
                    <HighlightText text={name} highlight={textField.value} color={"rgb(9,63,181)"}/>
                </li>
            })}
            </ul>
        </div>
    });
});

export default Search;