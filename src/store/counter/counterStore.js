import {makeAutoObservable} from "mobx";

class CounterStore{
    count = 10;
    constructor() {
        makeAutoObservable(this);
    }
    increment = (value)=>{
        this.count += value;
    }
    decrement = (value) =>{
        this.count -= value;
    }
    get total (){
        return this.count * 2;
    }
}
export default new CounterStore();