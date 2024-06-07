import React from 'react'
import { Home } from "@mui/icons-material"
import disbanner from "../image/sportsbanner.jpg"

function Sports() {
  return (
    <div className='transport_main'>
    <div className='transport_first_box' style={{backgroundImage:`url(${disbanner})`}}>
      <h4>Sports</h4>
    </div>
    <div>
      <div>
        <div className='Add_pro_box211'>
          <button><Home className='Add_pro_box211_home' style={{ width: "30px", }} />  Sports </button>
        </div>
        <div className='Add_pro_innerboxs'>
          <div className='Add_pro_box212'>
            <h3>Sports</h3>
            <p>
            Playgrounds are the heart & soul of any campus since they are the wall of a healthy society. Our school has rich networks of playfields.          
            </p>
            <p>
            Cricket Ground – Cricket Ground forms a part of larger complex of football & Athletics arena, where the activity is smoothly conducted. The ground is effectively utilized for matches.
            </p>
            <p>
            Basket Ball Court – Ensconced in the backyard of the school premises, covered from three sides giving it perfect location as good as being indoor, the court has international dimensions.

            </p>
            <p>
            Football Field – We have a verdant football field lush with grass and well maintained since besides football it is extended to accommodate other activities also, like Cricket, in the vastness of its arena.
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

export default Sports
