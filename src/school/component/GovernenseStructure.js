import React from 'react'
import { Home } from "@mui/icons-material"
import disbanner from "../image/sportsbanner.jpg"
import DownloadIcon from '@mui/icons-material/Download';

function GovernenseStructure() {
  return (
    <div className='transport_main'>
      <div className='transport_first_box' style={{ backgroundImage: `url(${disbanner})` }}>
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
              <div style={{ textAlign: "center" }}>
                <div style={{ background: "black", color: "white" }}>
                  <h5>Dr. S.K Sunil</h5>
                  <p>chairman (President Awardi)</p>
                </div>
                <div>
                  <DownloadIcon />
                </div>
                <div style={{ border: "2px solid #DDDDDD", marginTop: "10px" }}>
                  <h5>Sudarshan Sharma</h5>
                  <p>Principal</p>
                </div>

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

export default GovernenseStructure
