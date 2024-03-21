import React from 'react'

function Add() {
  return (
    <div className='container' style={{marginTop:'100px'}}>
    <div className='p-5'>
      <div className="row">
          <div className="col">
              <table className='table'>
                  <thead>
                      <tr>
                          <th>*</th>
                          <th>No.</th>
                          <th></th>
                          <th></th>
                          <th></th>
                          <th>trash</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td><input type="checkbox" name='' id='' /></td>
                          <td>Todo 1</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td><i class="fa-solid fa-trash"></i></td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
    </div>

  </div>
  )
}

export default Add