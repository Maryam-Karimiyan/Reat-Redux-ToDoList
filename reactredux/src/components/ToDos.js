import React from "react";
import { List,IconButton,FlexboxGrid } from "rsuite";
//use connect to connect this component to redux store
import { connect } from "react-redux";
import { deleteTodo } from "../redux_Or_Store";




const ToDos = ({ todo ,dispach}) => {
  console.log({ todo });
  const del = (todo) => {
    dispach(deleteTodo(todo));
  };
  return (
    <section>
      <List>
        {todo &&
          todo.map((todo, index) => (
            <List.Item key={index}>
              <FlexboxGrid justify="space-around">
                <FlexboxGrid.Item colspan={10}>
                  <h3>{todo.text}</h3>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={2}>
                  <IconButton color="red" circle onClick={() => del(todo)} />
                </FlexboxGrid.Item>
              </FlexboxGrid>
            </List.Item>
          ))}
      </List>
    </section>
  );
};

export default connect(({todos}) => {
  console.log({todos});
  return {todos:todos};
})(ToDos);
