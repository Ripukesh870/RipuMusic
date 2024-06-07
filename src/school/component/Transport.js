import React from 'react'
import "../css/Transport.css"
import { Home } from "@mui/icons-material"
import transbanner from "../image/transbanner.jpg"
function Transport() {
  return (
    <div className='transport_main'>
      <div className='transport_first_box'>
        <h4> Transportation</h4>
      </div>
      <div>
        <div>
          <div className='Add_pro_box211'>
            <button><Home className='Add_pro_box211_home' style={{ width: "30px", }} />  Transportation </button>
          </div>
          <div className='Add_pro_innerboxs'>
            <div className='Add_pro_box212'>
              <h3>Transportation</h3>
              <p>
                The school has bus/van on contract basis, exclusively for the school’s use. The bus/van service operated by the school will have a separate transportation fee. The buses/vans cover the main trunk and the feeder routes. Specific bus/vans routes depending on the demand are determined at the beginning of each session and cost varies accordingly to area. The school reserves the right to fix and or change bus/van routes as may be necessary from time to time, in the interest of all. Parents will be informed about the tentative bus/van routes at the time of admission. School transport is subject to availability of seats.
              </p>
            </div>
            <div className='Add_pro_box22'>
              <img src={transbanner} alt="" />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Transport
