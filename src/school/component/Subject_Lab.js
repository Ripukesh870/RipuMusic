import React from 'react'
import { Home } from "@mui/icons-material"
import subjectbanner from "../image/subjectbanner.jpg"
function Subject_Lab() {
  return (
    <div className='transport_main'>
    <div className='transport_first_box' style={{backgroundImage:`url(${subjectbanner})`}}>
      <h4>FACILITIES</h4>
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
            P.P.M. School has the following subject-specific labs: Physics Lab, Chemistry Lab, Biology Lab, and Maths Lab.Students are advised to make full use of these facilities under the guidance of assigned instructors. Students are expected to handle the tools, instruments and equipments in these labs carefully. Any damage will have to be compensated.
            </p>
          </div>
          <div className='Add_pro_box22'>
            <img src={subjectbanner} alt="" />
          </div>
        </div>
      </div>

    </div>
  </div>
  )
}

export default Subject_Lab
