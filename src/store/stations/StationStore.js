import {makeAutoObservable} from "mobx";
import {fromPromise} from "mobx-utils";
const url = `https://gist.githubusercontent.com/VasilyMur/43ef6df83bba694f871f11a16ed7556d/raw/b6edff674e35452d6c57ec64177a558f7adb432e/moscowSubway.json`;

class StationStore{
    constructor(){
        makeAutoObservable(this)
    }
    getStationsAction =  ()=>{
            this.stations = fromPromise(fetch(url)
                .then((response)=>response.json())
                .then((data)=>{
                    return data.reduce((sum,num)=>{
                        return [...sum,...num.stations];
                    },[]);
                }))
    }
}

export default new StationStore();