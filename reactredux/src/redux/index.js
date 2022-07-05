import {addTodo,todoes,Todo} from './todos/index'
import {combineReducers , createStore} from 'redux'


const reducers=combineReducers({
    todoes
})

export {addTodo,Todo}
export default createStore(reducers)