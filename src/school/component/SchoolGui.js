import React from 'react'
import { Home } from "@mui/icons-material"
import disbanner from "../image/sportsbanner.jpg"

function SchoolGui() {
  return (
    <div className='transport_main'>
    <div className='transport_first_box' style={{backgroundImage:`url(${disbanner})`}}>
      <h4>About Us</h4>
    </div>
    <div>
      <div>
        <div className='Add_pro_box211'>
          <button><Home className='Add_pro_box211_home' style={{ width: "30px", }} />  School Guideline </button>
        </div>
        <div className='Add_pro_innerboxs'>
          <div className='Add_pro_box212'>
            <h3>School Uniforms</h3>
            <div>
            <p>Maintenance of common uniform is an important part of Discipline. Regular Uniform :</p>
              <div>
                <button style={{border:"none",padding:"5px 15px",borderRadius:"2px 15px",background:"#F7C052",fontSize:"21px"}}>For Gurl's</button>
                <ul>
                  <li>. White Shirt(With School monogram)</li>
                  <li>Blue Shirt</li>
                  <li>Navy blue Socks</li>
                  <li>Black Leather Shoes</li>
                  <li>White ribbon</li>
                  <li>School, tie, Belt and badge</li>
                </ul>
              </div>
              <div> 
                <button style={{border:"none",padding:"5px 15px",borderRadius:"2px 15px",background:"#F7C052",fontSize:"21px"}}>For Gurl's</button>
                <ul>
                  <li>. White Shirt(With School monogram)</li>
                  <li>Blue Full Pant</li>
                  <li>Navy blue Socks</li>
                  <li>Black Leather Shoes</li>
                  <li>School, tie, Belt and badge</li>
                  <li>PT Uniforms on Saturday</li>
                </ul>
              </div>
            <p>During Winter besides the above Uniforms Navy Blue Sweaters and blazer will be required.</p>
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

export default SchoolGui
