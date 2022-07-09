import { ADD_TODO,REMOVE_TODO } from "./actionTypes";


//actioncreator that return an action
export const addTodo=(todo)=>{
    return {
        type:ADD_TODO,
        todo:todo
    }
}
export const deleteTodo=(todo)=>{
    return {
        type:REMOVE_TODO,
        todo:todo
    }
}