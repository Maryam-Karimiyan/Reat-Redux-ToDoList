import { ADD_TODO } from "./actionTypes";


//actioncreator that return an action
export const addTodo=(todo)=>{
    return {
        type:ADD_TODO,
        todo:todo
    }
}