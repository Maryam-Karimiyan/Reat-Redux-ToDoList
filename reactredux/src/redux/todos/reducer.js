import { ADD_TODO } from "./actionTypes";
const initialState = [];
export const todoes = (state=initialState, { type, todo }) => {
  switch (type) {
    case ADD_TODO:
      return [...state, todo];

    default:
    return state
  }
};
