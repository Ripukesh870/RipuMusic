import React from 'react'
import { Home } from "@mui/icons-material"
import sclassbanner from "../image/aboutbanner.jpg"

function Result() {
  return (
    <div className='transport_main'>
    <div className='transport_first_box' style={{ backgroundImage: `url(${sclassbanner})` }}>
      <h4> Result </h4>
    </div>
    <div>
      <div>
        <div className='Add_pro_box211'>
          <button><Home className='Add_pro_box211_home' style={{ width: "30px", }} />  Result </button>
        </div>
        <div className='Add_pro_innerboxs'>
          <div className='Add_pro_box212'>
            <h3>Result</h3>
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

export default Result
