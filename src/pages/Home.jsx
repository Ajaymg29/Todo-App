import React from 'react'
import Add from './Add'


function Home() {
  
  return (
    <>
    <h1 className='text-center mt-5'>My Todo List</h1>
    <div style={{width:'400px'}} className='d-flex mt-3 ms-2'>
    <input type="text" className='form-control' placeholder='Add Todo' />
    <button className='btn btn-info ms-2'>Submit</button>
    </div>
    <Add/>
    </>
  )
}

export default Home