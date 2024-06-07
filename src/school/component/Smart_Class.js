import React from 'react'
import { Home } from "@mui/icons-material"
import sclassbanner from "../image/sclassbanner.jpg"

function Smart_Class() {
  return (
    <div className='transport_main'>
      <div className='transport_first_box' style={{ backgroundImage: `url(${sclassbanner})` }}>
        <h4> Smart Class </h4>
      </div>
      <div>
        <div>
          <div className='Add_pro_box211'>
            <button><Home className='Add_pro_box211_home' style={{ width: "30px", }} />  Smart Class </button>
          </div>
          <div className='Add_pro_innerboxs'>
            <div className='Add_pro_box212'>
              <h3>Smart Class</h3>
              <p>
                One of the recent innovations in computer-aided, hi-tech learning. P.P.M. is one of the few schools in Jehanabad which have the Smart Class facility. Introduced in 2016, this advanced technology-supported learning system is available to the students of P.P.M. in a regulated manner, under the guidance of supervisors. Five classrooms have been equipped with this facility the use of which have been arranged regularly and systematically for all the classes. 
              </p>
            </div>
            <div className='Add_pro_box22'>
              <img src={sclassbanner} alt="" />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Smart_Class
