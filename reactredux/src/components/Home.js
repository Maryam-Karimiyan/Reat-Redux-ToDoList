import React from 'react'
import {Button} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import ToDos from './ToDos';
function Home() {
  return (
    <div className='container'>
        <section className='mt-3 text-center'>
            <h3>Enter Your Task</h3>

            <div className="todo col-lg-5 mx-auto d-flex justify-content-between">
                <input name='task' className='form-control'/>
                <Button variant='contained' style={{background:'#ee5253'}} className='mx-2'>
                   <AddIcon/>
                </Button>
            </div>
            <ToDos/>
        </section>
    </div>
  )
}

export default Home