import React from 'react'
import { Home } from "@mui/icons-material"
import aboutSide from "../image/aboutside.jpg";

function SchoolInfa() {
  return (
    <div className='Add_pro_main'>
      <div className="Add_pro_inner_img">
        <div>
          <h1 className='Add_pro_inner_img_h1'>HISTORY</h1>
        </div>
      </div>
      <div>
        <div className='Add_pro_box211'>
          <button><Home className='Add_pro_box211_home' style={{ width: "30px", }} /> History </button>
        </div>
        <div className='fee_structure'>
          <div>
            <h3>Land Area</h3>
            <h4>Infarastructure Detials / Building Statement</h4>
            <div style={{ width: "100%", padding: "20px" }}>
              <table cellpadding="0px" cellspacing="0px" class="table-bordered tablen" width="100%">

                <tbody><tr><th>Sl.No.</th>
                  <th>Rooms</th>
                  <th>No</th>
                  <th>Lengthg in Fit</th>
                  <th>Breadth in Fit</th>
                  <th>Remarks</th></tr>
                  <tr><td height="20">1</td><td>Office</td><td>&nbsp;1</td>
                    <td>25</td>
                    <td>20</td><td>&nbsp;</td></tr>

                  <tr>
                    <td height="20">2</td>
                    <td>Staff Room</td>
                    <td>&nbsp;1</td>
                    <td>&nbsp;25</td>
                    <td>&nbsp;20</td><td>&nbsp;</td></tr>

                  <tr><td height="20">3</td>
                    <td>Common Room</td>
                    <td>&nbsp;1</td>
                    <td>&nbsp;25</td>
                    <td>&nbsp;20</td><td>&nbsp;</td></tr>

                  <tr><td height="20">4</td>
                    <td>Computer Science Room</td>
                    <td>&nbsp;1</td>
                    <td>&nbsp;25</td>
                    <td>&nbsp;20</td>
                    <td>&nbsp;</td></tr>

                  <tr>
                    <td height="20">5</td>
                    <td>Library</td>
                    <td>&nbsp;1</td>
                    <td>45</td>
                    <td>&nbsp;30</td>
                    <td>&nbsp;</td></tr>

                  <tr>
                    <td height="20">6</td>
                    <td>Study Room</td>
                    <td>&nbsp;1</td>
                    <td>20</td>
                    <td>&nbsp;20</td>
                    <td>&nbsp;</td></tr>

                  <tr>
                    <td height="20">7</td>
                    <td>Meeting Hall</td>
                    <td>&nbsp;1</td>
                    <td>60</td>
                    <td>&nbsp;30</td>
                    <td>&nbsp;</td></tr>

                  <tr><td height="20">8</td>
                    <td>Math Lab</td>
                    <td>&nbsp;1</td>
                    <td>30</td>
                    <td>&nbsp;20</td>
                    <td></td>
                  </tr>

                  <tr><td height="20">9</td>
                    <td>Physics Lab</td>
                    <td>&nbsp;1</td>
                    <td>&nbsp;30</td>
                    <td>&nbsp;20</td>
                    <td>&nbsp;</td>
                  </tr>

                  <tr>
                    <td height="20">10</td>
                    <td>Chemistry Lab</td>
                    <td>&nbsp;1</td>
                    <td>&nbsp;30</td>
                    <td>&nbsp;20</td>
                    <td>&nbsp;</td>
                  </tr>

                  <tr>
                    <td height="20">11</td>
                    <td>Biology Lab</td>
                    <td>&nbsp;1</td>
                    <td>30</td>
                    <td>20</td>
                    <td>&nbsp;</td>
                  </tr>

                  <tr>
                    <td height="20">12</td>
                    <td>Class Room</td>
                    <td>38</td>
                    <td>&nbsp;25</td>
                    <td>&nbsp;30</td>
                    <td>&nbsp;</td>
                  </tr>

                  <tr>
                    <td height="20">13</td>
                    <td>Total Rooms</td>
                    <td>&nbsp;48</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>

                  <tr>
                    <td height="20">14</td>
                    <td>Toilet for Boys</td>
                    <td>&nbsp;18</td>
                    <td>&nbsp;7</td>
                    <td>&nbsp;5</td>
                    <td>&nbsp;</td>
                  </tr>

                  <tr>
                    <td height="20">15</td>
                    <td>Toilet for Girls</td>
                    <td>&nbsp;12</td>
                    <td>&nbsp;7</td>
                    <td>&nbsp;5</td>
                    <td>&nbsp;</td>
                  </tr>

                  <tr>
                    <td height="20">16</td>
                    <td>Toilet for Staff</td>
                    <td>&nbsp;5</td>
                    <td>&nbsp;7</td>
                    <td>&nbsp;5</td>
                    <td>&nbsp;</td>
                  </tr>


                </tbody></table>
            </div>

          </div>
          <div className='Add_pro_box22'>
            <img src={aboutSide} alt="" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default SchoolInfa
