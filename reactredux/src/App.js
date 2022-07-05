
import './App.css';
import {Button} from 'rsuite'
 import "rsuite";
import {connect} from 'react-redux'



function App({todos,dispatch}) {
  console.log(todos,dispatch);
  const createTodo=()=>{

  }
  return (
   <main>

     <Button appearance='primary'>
      Add Todo List
     </Button>

     </main>
  );
}

export default connect(({todos})=>todos)(App);
