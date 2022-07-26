import React from 'react';
import './App.css';

//  connct is for connecting this component to redux Store
// import {connect} from 'react-redux'
// import {generate} from 'shortid'
/////////////////////////////////////////////////////////

import NavBar from './components/NavBar';
import Home from './components/Home';


////packages///
import "bootstrap/dist/css/bootstrap.min.css";
///////
function App() {
 
  return (
   <>
   <NavBar/>
   <Home/>
   </>
    
   );
}

//we should invoke connect and pass our app component;
//state={type , todos} is the global redux store state;it gets the state and pass it to app-componnet
//we have distructured state for todos and    ////anything we return here goes as a prop for App componnet
export default App
//we just connect app to redux store

