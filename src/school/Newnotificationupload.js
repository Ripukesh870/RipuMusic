import React from 'react'
import "./css/Newnotificationupload.css"


function Newnotificationupload() {
  return (
    <div className='s_N_update'>
        <h4>Notification update </h4>
      <div className='s_N_update_box'>
        <div className='s_N_update_box_box'>
            <h5>title : </h5> 
            <input type="text" placeholder='Notification title'/>
        </div>
        <textarea name="" id="" cols="" rows="10" placeholder='Enter a message...'></textarea>
        <div className='s_N_update_box_box1'>
            <label htmlFor="">Notification Image : </label>
            <input type="file" />
        </div>
        <button>Submit</button>

      </div>
    </div>
  )
}

export default Newnotificationupload
