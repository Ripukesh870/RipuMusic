import React from 'react'
import { Home } from "@mui/icons-material"
import sclassbanner from "../image/sclassbanner.jpg"


function Homework() {
  return (
    <div className='transport_main'>
    <div className='transport_first_box' style={{ backgroundImage: `url(${sclassbanner})` }}>
      <h4> Parents Area </h4>
    </div>
    <div>
      <div>
        <div className='Add_pro_box211'>
          <button><Home className='Add_pro_box211_home' style={{ width: "30px", }} />Home Work</button>
        </div>
        <div className='Add_pro_innerboxs'>
          <div className='Add_pro_box212'>
            <h3>Home Work</h3>
            <p>


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

export default Homework
