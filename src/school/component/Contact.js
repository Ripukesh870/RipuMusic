import React from 'react'
import { Home } from "@mui/icons-material"
import disbanner from "../image/sportsbanner.jpg"
import { TextField } from '@mui/material'

function Contact() {
  return (
    <div className='transport_main'>
      <div className='transport_first_box' style={{ backgroundImage: `url(${disbanner})` }}>
        <h4>About Us</h4>
      </div>
      <div>
        <div>
          <div className='Add_pro_box211'>
            <button><Home className='Add_pro_box211_home' style={{ width: "30px", }} /> Administration </button>
          </div>
          <div className='Add_pro_innerboxs'>
            <div className='Add_pro_box212'>
              <h3>Administration</h3>
              <div style={{boxShadow:"3px 3px 3px brown"}} className='mt-5 mb-5'>
                {/* <p>Grievance and redressed Officer :-</p> */}
                <div style={{textAlign:"center",padding:""}} className='pb-3'>
                  <div>
                    <TextField className='m-2' id="outlined-basic" label="Name" variant="outlined" sx={{width:"48%"}} />
                    <TextField className='m-2' id="outlined-basic" label="Mobile No." variant="outlined"  sx={{width:"48%"}} />
                  </div>
                  <div style={{marginTop:"30px"}}>
                    <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth/>
                    <textarea name="" id="" style={{width:"90%",marginTop:"30px"}} ></textarea>
                  </div>
                  <button className='mt-4' style={{padding:"3px 20px",fontSize:"22px",background:"green",color:"white",border:"none"}}>Submit</button>
                </div>
              </div>
            </div>
            <div className='Add_pro_box22 mt-5 ' style={{height:"auto"}}>
              <div>
                <h3>Administrative Office:</h3>
                <div>
                  <p>PPM School </p>
                  <p>Venkateshwar Nagar, Arwal More, Jehanabad-804408.</p>
                  <p>Phone:- 06114-223222</p>
                  <p>Email:- ppmsjehanabad@gmail.com</p>
                </div>
              </div>
              <div>
                <h3>Admission Office:</h3>
                <div>
                  <p>P.P.M. School Venkateshwar Nagar, Arwal More, Jehanabad-804408</p>
                  <p>Mob :- 9431263954, 9334320896</p>
                </div>
              </div>
              <div className=''>
                <h3>Office Time:</h3>
                <div>
                  <p>Summer: 7 a.m. to 2.00 P.m.</p>
                  <p>Winter: 8 a.m. to 3.00 P.m.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact
