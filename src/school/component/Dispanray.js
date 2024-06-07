import React from 'react'
import { Home } from "@mui/icons-material"
import disbanner from "../image/disbanner.jpg"

function Dispanray() {
  return (
    <div className='transport_main'>
    <div className='transport_first_box' style={{backgroundImage:`url(${disbanner})`}}>
      <h4>Dispensary</h4>     
    </div>
    <div>
      <div>
        <div className='Add_pro_box211'>
          <button><Home className='Add_pro_box211_home' style={{ width: "30px", }} />  disbanner </button>
        </div>
        <div className='Add_pro_innerboxs'>
          <div className='Add_pro_box212'>
            <h3>Dispensary</h3>
            <p>
            A well-equipped dispensary under the supervision of a trained female nurse in the school building is to attend to any health care problems of the students during class hours.
            
                        </p>
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

export default Dispanray
