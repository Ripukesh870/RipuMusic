import React from 'react';
import "./css/newadmition.css";

function Newadmition() {
  return (
    <div className='newadmition_contaner'>
        <h3>Addimition Form</h3>
        <form action="" className='newadmition_form'>
            <div>
                <label htmlFor="">Name : </label>
                <input type="text" placeholder='Enter Name'/>
            </div>
            
            <div>
                <label htmlFor="">Father's name : </label>
                <input type="text" placeholder="father's name"/>
            </div>
            <div>
                <label htmlFor="">Mither's name : </label>
                <input type="text" placeholder="mother's name"/>
            </div>
            <div>
                <label htmlFor="">Email Id : </label>
                <input type="email" placeholder='Email'/>
            </div>
            <div>
                <label htmlFor="">phone no : </label>
                <input type="number" />
            </div>
            <div>
                <label htmlFor="">phone no : </label>
                <input type="number" />
            </div>
            <div>
                <label htmlFor="">village : </label>
                <input type="number" />
            </div>
            <div>
                <label htmlFor="">Address : </label>
                <textarea name="" id="" cols="30" rows="2"></textarea>
            </div>
            <div>
                <label htmlFor="">Pin Code : </label>
                <input type="number" name="" id="" />
            </div>

        </form>
    </div>
  )
}

export default Newadmition
