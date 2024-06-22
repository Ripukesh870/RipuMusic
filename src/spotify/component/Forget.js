import React from 'react'

function Forget() {
  return (
    <div className="forget_main_box">
        <div className='forget_main_box_inner'>
            <h3>Reset your password</h3>
            <p>Enter your email address or username, and we'll send you a link to get back into your account.</p>
            <label htmlFor="" className='label'>Email address</label>
            <input type="email"className='M_input' placeholder='Enter your password' />
            <button className='m_button self_btn' style={{margin:"30px 0px"}}>Send Link</button>

        </div>
    </div>
  )
}

export default Forget;
