import React from 'react'
import { Home } from "@mui/icons-material"
import disbanner from "../image/activitybanner.jpg"

function Activity() {
  return (
    <div className='transport_main'>
    <div className='transport_first_box' style={{backgroundImage:`url(${disbanner})`}}>
      <h4>Activity</h4>
    </div>
    <div>
      <div>
        <div className='Add_pro_box211'>
          <button><Home className='Add_pro_box211_home' style={{ width: "30px", }} />  disbanner </button>
        </div>
        <div className='Add_pro_innerboxs'>
          <div className='Add_pro_box212'>
            <h3>Activity</h3>
            <p>
            The P.P.M. School firmly believes that textual studies are only but a part of the full development of a child and therefore provides a spectrum of in house activities through a program.            
          
            </p>
            <p>
            The main thrust of activities at the School are visualized to promote the development of a balanced and harmonious personality of the students including physical, practical, aesthetic, moral and intellectual aspects.
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

export default Activity
