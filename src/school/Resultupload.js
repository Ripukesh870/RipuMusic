import React from 'react'
import './css/resultupload.css'
function Resultupload() {
  return (
    <div className='s_result_upload'>
        <h3>Result upload</h3>
        <form action="" className='s_result_upload_from'>

            <div className='s_result_upload_from_box'>
                <label htmlFor="" className='s_result_upload_from_box_label'>Name : </label>
                <input className='s_result_upload_from_box_input' type="text" placeholder='Enter name'/>
            </div>

            <div className='s_result_upload_from_box'>
                <label htmlFor="" className='s_result_upload_from_box_label'>Father's Name : </label>
                <input className='s_result_upload_from_box_input' type="text" placeholder="Enter father's name"/>
            </div>
            <div className='s_result_upload_from_box'>
                <label htmlFor="" className='s_result_upload_from_box_label'>Mother's Name : </label>
                <input className='s_result_upload_from_box_input' type="text" placeholder="Enter mother's name"/>
            </div>
            <div className='s_result_upload_from_box'>
                <label htmlFor="" className='s_result_upload_from_box_label'>class : </label>
                <input className='s_result_upload_from_box_input_number' type="number" placeholder='class'/>
            </div>
            <div className='s_result_upload_from_box'>
                <label htmlFor="" className='s_result_upload_from_box_label'>Marks of Hindi : </label>
                <input className='s_result_upload_from_box_input_number' type="number" placeholder='0'/>
            </div>
            <div className='s_result_upload_from_box'>
                <label htmlFor="" className='s_result_upload_from_box_label'>Marks of English : </label>
                <input className='s_result_upload_from_box_input_number' type="number" placeholder='0'/>
            </div>
            <div className='s_result_upload_from_box'>
                <label htmlFor="" className='s_result_upload_from_box_label'>Marks of math : </label>
                <input className='s_result_upload_from_box_input_number' type="number" placeholder='0'/>
            </div>
            <div className='s_result_upload_from_box'>
                <label htmlFor="" className='s_result_upload_from_box_label'>Marks of S.S.t : </label>
                <input className='s_result_upload_from_box_input_number' type="number" placeholder='0'/>
            </div>
            <div className='s_result_upload_from_box'>
                <label htmlFor="" className='s_result_upload_from_box_label'>Marks of Science : </label>
                <input className='s_result_upload_from_box_input_number' type="number" placeholder='0'/>
            </div>
            <div className='s_result_upload_from_box'>
                <label htmlFor="" className='s_result_upload_from_box_label'>Marks of Computer : </label>
                <input className='s_result_upload_from_box_input_number' type="number" placeholder='0'/>
            </div>
            <div className='s_result_upload_from_box'>
                <label htmlFor="" className='s_result_upload_from_box_label'>Total marks : </label>
                <input className='s_result_upload_from_box_input_number' type="number" placeholder='0'/>
            </div>
            <div className='s_result_upload_from_box'>
                <label htmlFor="" className='s_result_upload_from_box_label'>Persentage of marks : </label>
                <input className='s_result_upload_from_box_input_number' type="number" placeholder='0'/>
            </div>
            <div className='s_result_upload_check_me'>
                <h5>check a valid student : </h5>
                <button>Click me</button>
            </div>
            <div>
                <button className='s_res_upload_btn'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Resultupload
