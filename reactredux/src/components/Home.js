import React, { useState } from 'react'
import {Button} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import ToDos from './ToDos';
import {Add} from "../redux/actions/action"
import {useDispatch} from "react-redux"
function Home() {
  
  const [data,setData]=useState('');
  

  const dispatch=useDispatch();

  const addData=()=>{
    dispatch(Add(data))
    setData('')
  }
  return (
    <div className="container">
      <section className="mt-3 text-center">
        <h3>Enter Your Task</h3>

        <div className="todo col-lg-5 mx-auto d-flex justify-content-between">
          <input
            style={{ background: "#c5c5c5" }}
            value={data}
            onChange={(e) => setData(e.target.value)}
            name="task"
            className="form-control"
          />
          <Button
            onClick={() => addData()}
            variant="contained"
            style={{ background: "#558ad8" }}
            className="mx-2"
          >
            <AddIcon />
          </Button>
        </div>
        <ToDos />
      </section>
    </div>
  );
}

export default Home