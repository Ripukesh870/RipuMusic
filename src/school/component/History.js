import React from 'react'
import { Home } from "@mui/icons-material"
import aboutSide from "../image/aboutside.jpg";

function History() {
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
            <h3>General Information</h3>
            <div style={{ width: "100%", padding: "20px" }}>
              <table cellpadding="0px" cellspacing="0px" class="table-bordered tablen" width="100%">
                <tbody>
                  <tr><th>Name of the School</th>
                    <td>P.P.M. School</td></tr>
                  <tr><th>Affiliation Number</th>
                    <td>330255</td></tr>
                  <tr><th>Complete Address with pincode</th>
                    <td>Venkateshwar Nagar, Arwal More, Jehanabad, 804408</td></tr>
                  <tr><th height="20">Principal Name with Qualification</th>
                    <td>Sudarshan Sharma M.A(B.Ed)</td></tr>
                  <tr><th height="20">School Email ID</th>
                    <td>ppmsjehanabad@gmail.com</td></tr>
                  <tr><th height="20">Contact Details</th>
                    <td>06114223232</td></tr>
                </tbody></table>
            </div>
            <div style={{width:"100%"}}>
              <div style={{width:"100%"}}>
                <h3>Welcome To P.P.M. School</h3>
                <p>P.P.M. School is a co-ed Senior Secondary School, situated in the Venkateshwar nagar , Arwal more neighbourhood of Jehanabad District of Bihar, India. It was founded by a Great saint and scholar ‘Shri Shri 1008 Swami Dharnidharcharya ji Maharaj’ on 10th of January 2003 and since then it is being managed by N.G.O ‘JYOTI’ (Reg. By Govt. of Bihar). It was inaugurated by then D.M of JehanabadSri Santosh Kumar Mal (I.A.S) and Dr. Arunish Chawla (I.A.S)</p>
                <p>It is affiliated to the Central Board of Secondary Education , Delhi upto 12th standard (Affiliation No- 330255 , School No- 65258). The school since its origin has been carving a reputation for itself as it promotes Knowledge, Education, and Sacraments under the guidance of its chairman Dr. Surendra Kumar Sunil. Who himself is a renowned Educationalist</p>
                <p>The environment of the campus is completely favourable for learning as it is situated far from the hustle and bustle of the town and is a lush green campus. It is fully children friendly from the safety point of view. Besides education the students are taught to be a society friendly secular human being. The school in line with the RTE Act , 2009 reserves its 25% seats for economically and socially underprivileged children.</p>

              </div>
              <div style={{width:"100%"}}>
                <h3>Mission</h3>
                <p>The New School prepares students to understand, contribute to, and succeed in a rapidly changing society, and thus make the world a better and more just place. We will ensure that our students develop both the skills a sound liberal arts education provides and the competencies essential for success and leadership in the emerging creative economy. We will also lead in generating practical and theoretical knowledge that enables people to better understand our world and improve conditions for local and global communities. At the P.P.M. School, everything we do is designed to help all students achieve to the best of their ability. We have the incredible opportunity to inspire a smile in each student. Our collective, daily efforts make a positive difference in the lives of our students, their families and the world. Guided by our mission, vision and values, we build positive places for learning and working...together.</p>
              </div>
              <div  style={{width:"100%"}}>
                <h3>vission</h3>
                <p>We will help our students reach high levels of achievement. Our vision is to prepare each student for a successful future as a lifelong learner. To do this, we will:</p>
                <ul style={{border:"none"}}>
                  <li> Create places to learn and work where staff and students are happy, recognized and fulfilled</li>
                  <li> Engage all students and staff to achieve the high expectations of the Peel board</li>
                  <li>Offer all students a range of learning programs to help them discover their passions and potential</li>
                  <li> Be a leader in the use of technology to encourage creative and innovative learning</li>

                  <li> Provide equity of access and opportunity for students and staff to learn, work and succeed</li>
                  <li> Openly communicate as we welcome the involvement of all parents, staff and students in the diverse communities we serve</li>
                </ul>
              </div>
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

export default History
