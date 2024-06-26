import React from 'react'
import "../component/css/Login.css";
import logo from './image/logo.png'
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
    const nav=useNavigate();
    return (
        <div className='spotify_login_mainbox'>
            <div className='m_logo'>
                <img className='m_img' src={logo} alt="" />
            </div>
            <h4>Sign up to start listening</h4>
            <div className='simple_login'>
                <div className='m_label'>
                    <label className='label' htmlFor="">Email Address</label>
                    <input className='M_input' type="text" placeholder='name@gmail.com' />
                </div>
                <button className='m_forget' style={{ margin: "0px 0px 20px" }}><Link className='' style={{ color: "green" }} to="/phone">use Phone number instead</Link></button>
                <button className='m_button' onClick={()=>{nav("/signupdetials")}}>Next</button>
            </div>
            <hr className='hr' />
            <div className='another_type_login'>
                <button className='btn'>Sign up with google</button>
                <button className="btn">Sign up with Facebook</button>
                <button className="btn">Sign up with Apple</button>
            </div>
            <hr className='hr' />

            <div className='m_signup'>
                <p>Already have an account? <Link to="/login" style={{ color: "white" }}>Log in here</Link></p>
            </div>
        </div>
    )
}

export default Signup;
