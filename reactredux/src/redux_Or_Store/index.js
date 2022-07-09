import {addTodo,deleteTodo ,todoes,TodoObject} from './todos/index'
import {combineReducers , createStore} from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";

//all of reducers from posts and todos will be passed here
const reducers=combineReducers({
    todoes
})
const store=createStore(reducers,composeWithDevTools());
export default store;
export {addTodo,deleteTodo, TodoObject}

//dispach is a function that we pass what action returns to it==>>{type,todo} and then dispach will call our correct reducer for that