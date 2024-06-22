import React from 'react'
import "../component/css/Login.css";
import logo from './image/logo.png'
import { Link } from 'react-router-dom';
function Login() {
  return (
    <div className='spotify_login_mainbox'>
      <div className='m_logo'>
        <img className='m_img' src={logo} alt="" />
      </div>
      <h4>Login to R_Music</h4>
      <div className='another_type_login'>
        <button className='btn'>Continue with google</button>
        <button className="btn">Continue with Facebook</button>
        <button className="btn">Continue with Apple</button>
        <button className="btn">Continue with Phone no</button>
      </div>
      <hr className='hr'/>
      <div className='simple_login'>
        <div className='m_label'>
          <label className='label' htmlFor="">Email or username</label>
          <input className='M_input' type="text" placeholder='Email or username' />
        </div>

        <div className='m_label'>
          <label className='label' htmlFor="">password</label>
          <input className='M_input' type="text" placeholder='password' />
        </div>
        <button className='m_button'>Log in</button>
        <button className='m_forget'><Link className='' style={{color:"white"}} to="/forget">Forget Your password</Link></button>
      </div>
      <hr className='hr' />
      <div className='m_signup'>
        <p>Don't have an account? <Link  to="/signup"  style={{color:"white"}}>Sign up for R_music</Link></p>
      </div>
    </div>
  )
}

export default Login
