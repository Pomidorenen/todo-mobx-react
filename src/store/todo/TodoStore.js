import {makeAutoObservable} from "mobx";

class TodoStore{
    todo = [{
        id: 1,
        completed: false,
        name:"name1",
        date:Date.now(),
    }]
    constructor() {
        makeAutoObservable(this);
    }
    deleteTodo = (id)=>{
        this.todo = this.todo.filter((item)=>item.id!==id);
    }
    addTodo = (name)=>{
        this.todo.push({
            id:Date.now(),
            name:name,
            date:Date.now(),
            completed: false
        })
    }
    completeTodo = (id)=>{
       this.todo = this.todo.map((item)=>{
           if(item.id===id){
               item.completed = !item.completed;
           }
           return item;
       });
    }
}
export default new TodoStore();