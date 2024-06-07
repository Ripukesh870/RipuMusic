import React from 'react'
// import "../css/Transport.css"
import { Home } from "@mui/icons-material"
import clabbanner from "../image/clabbanner.jpg"
function Computer_lab() {
  return (
    <div className='transport_main'>
      <div className='transport_first_box' style={{backgroundImage:`url(${clabbanner})`}}>
        <h4> Computer Lab</h4>
      </div>
      <div>
        <div>
          <div className='Add_pro_box211'>
            <button><Home className='Add_pro_box211_home' style={{ width: "30px", }} />  Computer Lab </button>
          </div>
          <div className='Add_pro_innerboxs'>
            <div className='Add_pro_box212'>
              <h3>Computer Lab</h3>
              <p>
              P.P.M. School has a Computer Lab for students. Students are advised to make full use of this facility under the guidance of assigned instructors. Regular and systematic learning in computer use has been scheduled for each class throughout the academic year. Students are expected to use the computers carefully. Any damage will have to be compensated. Students will have to follow the guidelines of supervisors in the Computer Lab.              </p>
            </div>
            <div className='Add_pro_box22'>
              <img src={clabbanner} alt="" />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Computer_lab
