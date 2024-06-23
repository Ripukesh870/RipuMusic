import React, { useState } from 'react'
import logo from './image/logo.png'
import { useNavigate } from 'react-router-dom'

function SignupDetials() {
  const nav = useNavigate();

  const [user,setUser]=useState({
    firstname:"",
    lastname:"",
    phone:"",
    address:"",
    password:"",
    Cpassword:"",
  })

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSignup=()=>{
    console.log(user);
    if (!user.firstname || !user.lastname || !user.phone || !user.address || !user.password || !user.Cpassword) {
      console.error("Please fill in all fields.");

      return;
    } else if(user.password==user.Cpassword){
      alert("signup Successfully");
      nav("/login");

    } else {
      alert("password not match ");
    }

  }


  return (
    <div className='spotify_login_mainbox'>
      <div className='m_logo'>
        <img className='m_img' src={logo} alt="" />
      </div>
      <h4>Fill Detials</h4>
      <div className='simple_login'>
        <div className='m_label'>
          <label className='label' htmlFor="">First name</label>
          <input className='M_input' type="text" placeholder='Enter your Name' onChange={handleChanges} name='firstname' value={user.firstname}/>
        </div>
        <div className='m_label'>
          <label className='label' htmlFor="">Last name </label>
          <input className='M_input' type="text" placeholder='Enter your Name' onChange={handleChanges} name='lastname' value={user.lastname}/>
        </div>
        <div className='m_label'>
          <label className='label' htmlFor="">Phone </label>
          <input className='M_input' type="number" placeholder='Phone no' onChange={handleChanges} name='phone' value={user.phone}/>
        </div>
        <div className='m_label'>
          <label className='label' htmlFor="">Address </label>
          <input className='M_input' type="text" placeholder='address' onChange={handleChanges} name='address' value={user.address}/>
        </div>
        <div className='m_label'>
          <label className='label' htmlFor="">Password </label>
          <input className='M_input' type="password" placeholder='Password ****' onChange={handleChanges} name='password' value={user.password}/>
        </div>
        <div className='m_label'>
          <label className='label' htmlFor="">Conform Password </label>
          <input className='M_input' type="password" placeholder='Conform Password ****' onChange={handleChanges} name='Cpassword' value={user.Cpassword}/>
        </div>
        <button className='m_button'style={{marginBottom:"70px"}} onClick={handleSignup}>Sign Up</button>

      </div>
    </div>
  )
}

export default SignupDetials
