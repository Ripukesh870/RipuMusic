import React, { useState } from 'react'
import "../component/css/Login.css";
import logo from './image/logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onLogin } from '../Action/Index';
function Login() {
  // varible
  const email1 = "ripukesh870@gmail.com";
  const password1 = "ripu";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  const [wrong, setwrong] = useState(false);
  const login = useSelector((state) => state.logIn);
  const dispatch=useDispatch();


  //login function
  const handleLogin = () => {
    if (email1 === email) {
      if (password1 === password) {
        console.log("Go to home page");
        nav("/");
        dispatch(onLogin(true));
      } else {
        setwrong(true)
        console.log("page not found");
        alert("invalid creadintials");
        setEmail("");
        setPassword("");
        // setwrong(true)
      }
    } else {
      setwrong(true)
      console.log("page not found");
      alert("invalid creadintials");
      setEmail("");
      setPassword("");
      // setwrong(true)
    }
  }



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
      <hr className='hr' />
      <div className='simple_login'>
        <div className='m_label'>
          <label className='label' htmlFor="">Email or username</label>
          <input className='M_input' type="text" placeholder='Email or username' value={email} onChange={(e) => setEmail(e.target.value)} />
          {
            wrong && <p style={{ color: "red", textAlign: "left", paddingLeft: "20px" }}>wrong email *</p>
          }
        </div>

        <div className='m_label'>
          <label className='label' htmlFor="">password</label>
          <input className='M_input' type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
          {
            wrong && <p style={{ color: "red", textAlign: "left", paddingLeft: "20px" }}>wrong password *</p>
          }
        </div>

        <button className='m_button' onClick={handleLogin}>Log in</button>
        <button className='m_forget'><Link className='' style={{ color: "white" }} to="/forget">Forget Your password</Link></button>
      </div>
      <hr className='hr' />
      <div className='m_signup'>
        <p>Don't have an account? <Link to="/signup" style={{ color: "white" }}>Sign up for R_music</Link></p>
      </div>
    </div>
  )
}

export default Login
