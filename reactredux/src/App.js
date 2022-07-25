import React from 'react';
import "rsuite/dist/rsuite.min.css";
import './App.css';
import {
 Divider,CustomProvider, Button,Container,Navbar,Header,Content,FlexboxGrid,Panel,Form,ButtonToolbar} from 'rsuite'
//  connct is for connecting this component to redux Store
import {connect} from 'react-redux'
import {addTodo,TodoObject} from './redux_Or_Store/todos'
import { useState } from "react";
import {generate} from 'shortid'
import ToDos from './components/ToDos'



function App(State) {
  const [state,setState]=useState({txt:''});

  const updateState=txt=>setState({txt:txt})
  const createTodo=()=>{
     State.dispatch(addTodo(new TodoObject(generate(),state.txt)))
      setState({txt:''})
    }
  return (
   
    <CustomProvider theme="dark">
      <div className="main">
        <Container>
          <Header>
            <Navbar appearance="inverse">
              <Navbar.Brand>
                <p className="navbar-brand">React Redux ToDo</p>
              </Navbar.Brand>
            </Navbar>
          </Header>
          <Content>
            <FlexboxGrid justify="center">
              <FlexboxGrid.Item colspan={12}>
                <Panel header={<h3>Add ToDo</h3>} bordered>
                  <Form fluid>
                    <Form.Group>
                      <Form.ControlLabel>
                        What You Want To Do?
                      </Form.ControlLabel>
                      <Form.Control
                        name="task"
                        value={state.txt}
                        onChange={updateState}
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                      <ButtonToolbar>
                        <Button appearance="primary" onClick={createTodo}>
                          Create
                        </Button>
                      </ButtonToolbar>
                    </Form.Group>
                  </Form>
                </Panel>
                <Divider/>
                <ToDos state={State}/>
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </Content>
        </Container>
      </div>
    </CustomProvider>
   );
}

//we should invoke connect and pass our app component;
//state={type , todos} is the global redux store state;it gets the state and pass it to app-componnet
//we have distructured state for todos and    ////anything we return here goes as a prop for App componnet
export default connect(state=>{
  return state
})(App);
//we just connect app to redux store

