import React from "react";
import { List } from "rsuite";
//use connect to connect this component to redux store
import { connect } from "react-redux";
const ToDos = (state) => {
    console.log(state);
  return (
    <section>
      <List>
        {state.todos && state.todos.map((todo, index) => (
          <List.Item key={index}>{todo.text}</List.Item>
        ))}
      </List>
    </section>
  );
};

export default connect((state) => {
    // console.log(state);
  return state
})(ToDos);
