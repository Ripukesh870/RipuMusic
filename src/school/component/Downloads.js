import React from 'react'
import { Home } from "@mui/icons-material"
import disbanner from "../image/sportsbanner.jpg"
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
function Downloads() {
  return (
    <div className='transport_main'>
    <div className='transport_first_box' style={{backgroundImage:`url(${disbanner})`}}>
      <h4>About Us</h4>
    </div>
    <div>
      <div>
        <div className='Add_pro_box211'>
          <button><Home className='Add_pro_box211_home' style={{ width: "30px", }} />  T_C_Section </button>
        </div>
        <div className='Add_pro_innerboxs'>
          <div className='Add_pro_box212'>
            <h3>T_C_Section</h3>
            <div className='SC_Download'>
              <div className='SC_Download1'>Adnition Form</div>
              <div className='SC_Download2'><ArrowCircleDownIcon sx={{fontSize:"35px"}} /></div>
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

export default Downloads
