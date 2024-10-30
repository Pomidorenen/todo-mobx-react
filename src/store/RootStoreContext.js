import {createContext, useContext} from "react";

export const RootStoreContext = createContext(null)
export const useStores = () =>{
    const context = useContext(RootStoreContext);
    if(useContext == null){
        throw new Error("");
    }
    return context
}