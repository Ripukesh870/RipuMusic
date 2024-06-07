import React from 'react'
import { Home } from "@mui/icons-material"
import "../css/FeeStructure.css"
import aboutSide from "../image/aboutside.jpg"

function FeeStructure() {
  return (
    <div className='Add_pro_main'>
            <div className="Add_pro_inner_img">
                <div>
                    <h1 className='Add_pro_inner_img_h1'>ADMISSION</h1>
                </div>
            </div>
            <div>
                <div className='Add_pro_box211'>
                    <button><Home className='Add_pro_box211_home' style={{ width: "30px", }} />  Fee Structure </button>
                </div>
                <div className='fee_structure'>
                    <div>
                        <h3>Fee Structure</h3>
                        <ul>
                            <li>FEE STRUCTURE</li>
                            <li>ACADMIC CALENDER</li>
                            <li>LIST OF SCHOOL COMMITTE</li>
                            <li>LIST OF PARENTS TEACHERS ASSOCIATION(PTA) MEMBER</li>
                            <li>LAST TREE YEAR RESULT OF THE BOAD EXAM</li>
                        </ul>
                    </div>
                    <div className='Add_pro_box22'>
                            <img src={aboutSide} alt="" />
                    </div>
                </div>
            </div>

    </div>
  )
}

export default FeeStructure
