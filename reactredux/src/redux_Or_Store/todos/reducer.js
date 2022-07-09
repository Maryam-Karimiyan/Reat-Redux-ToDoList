import { ADD_TODO,REMOVE_TODO } from "./actionTypes";
const initialState = [];
export const todoes = (state=initialState, { type, todo }) => {
  switch (type) {
    case ADD_TODO:
      //we use spread to return new array instead of push
      return [...state, todo];
    case REMOVE_TODO:
      return state.filter(i=>i.id !==todo.id)
    default:
      //this is because of the first render of app that there's no store or actions we should return something so we retun the initialstate=[].
    return state
  }
};
//an action that return an object that represent a part of the state.
//first argument is store==>>state  ////// and second is anything that action returns.===>> {type,todo}
