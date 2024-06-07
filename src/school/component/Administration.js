import React from 'react'
import { Home } from "@mui/icons-material"
import disbanner from "../image/sportsbanner.jpg"

function Administration() {
  return (
    <div className='transport_main'>
    <div className='transport_first_box' style={{backgroundImage:`url(${disbanner})`}}>
      <h4>Administration</h4>
    </div>
    <div>
      <div>
        <div className='Add_pro_box211'>
          <button><Home className='Add_pro_box211_home' style={{ width: "30px", }} /> Administration </button>
        </div>
        <div className='Add_pro_innerboxs'>
          <div className='Add_pro_box212'>
            <h3>Administration</h3>
            <div>
              <p>Grievance and redressed Officer :-</p>
              <ul>
                <li>» Dr. S.K. Sunil (Chairman / Member)</li>
                <li>» Mr. Sudarshan Sharma (Principal)</li>
                <li>» Mr. Chandan Kumar (Vice-Principal)</li>
              </ul>
            </div>
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

export default Administration
