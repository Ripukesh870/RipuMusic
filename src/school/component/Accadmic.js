import React from 'react'
import { Home } from "@mui/icons-material"
import disbanner from "../image/sportsbanner.jpg"

function Accadmic() {
  return (
    <div className='transport_main'>
    <div className='transport_first_box' style={{backgroundImage:`url(${disbanner})`}}>
      <h4>Accadmic</h4>
    </div>
    <div>
      <div>
        <div className='Add_pro_box211'>
          <button><Home className='Add_pro_box211_home' style={{ width: "30px", }} />  Accadmic </button>
        </div>
        <div className='Add_pro_innerboxs'>
          <div className='Add_pro_box212'>
            <h3>Accadmic</h3>
            <p>
            The Academic Programmes at P.P.M. School is comprehensive so as to enable the students to develop intellectually and attain growth in personality. The prescribed syllabus aside, there are additional resources and infrastructure provided for the students to attain maximum developments. Regular and adequate assessment of the students is part of the academic programme.            </p>
           
          </div>
          <div className='Add_pro_box22'>
            <img src={disbanner} alt="" />
          </div>
        </div>
      </div>

    </div>
  </div>
  )
}

export default Accadmic
