import React from 'react'
import "./css/registationupload.css"
function Regastationupload() {
  return (
    <div className='s_r_upload'>
        <h3>Upload Registation detials</h3>
        <form action="" className='s_r_upload_from'>
            <div>
                <label htmlFor="" className='s_r_label'>Condidate Name : </label>
                <input className='s_r_input' type="text" placeholder="enter your name :" />          
            </div>
            <div>
                <label htmlFor="" className='s_r_label'>Condidate Father's name : </label>
                <input className='s_r_input' type="text" placeholder="enter father's name"/>
            </div>
            <div>
                <label htmlFor="" className='s_r_label'>Condidate Mother's name : </label>
                <input className='s_r_input' type="text" placeholder="enter mother's name" />
            </div>
            <div>
                <label htmlFor="" className='s_r_label'>D.O.B : </label>
                <input className='s_r_input' type="date" />
            </div>
            <div>
                <label htmlFor="" className='s_r_label'>Condidate Address : </label>
                <input className='s_r_input' type="text" placeholder='enter your address'/>
            </div>
            <div>
                <label htmlFor="" className='s_r_label s_r_label1'>Condidate image : </label>
                <input type="file" className='s_r_input_file s_r_input' style={{borderRadius:"10px",marginLeft:"10px"}}/>
            </div>
            <div className='s_f_captcha'>
                <h5>Captcha </h5>
                <div className='s_f_number_box'>
                    <h4>5 + 6 = </h4>
                    <input className='s_f_input_num' type="number" />
                </div>
            </div>
            <button className='btn s_r_button'>Upload detials</button>
        </form>
    </div>
  )
}

export default Regastationupload

