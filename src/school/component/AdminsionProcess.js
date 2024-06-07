import React from 'react'
import '../css/AdminsionProcess.css'
// import aboutBanner from "../image/aboutbanner.jpg"
import aboutSide from "../image/aboutside.jpg"
import { Home,PlayArrow } from "@mui/icons-material"
function AdminsionProcess() {
    return (
        <div className='Add_pro_main'>
            <div className="Add_pro_inner_img">
                <div>
                    <h1 className='Add_pro_inner_img_h1'>ADMISSION</h1>
                </div>
            </div>
            <div className='Add_pro_box2'>
                <div className='Add_pro_box21'>
                    <div className='Add_pro_box211'>
                        <button><Home className='Add_pro_box211_home' style={{ width: "30px", }} />  Admission Process</button>
                    </div>
                    <div className='Add_pro_innerboxs'>
                        <div className='Add_pro_box212'>
                            <h3>Admission Process</h3>
                            <div>
                                <h5>Admission to I</h5>
                                <p>
                                    Students are admitted to I. Applications for this class are ordinarily done two months prior to the commencement of the academic year. The dates of application are announced every year on the school Bulletin Board. The academic year begins in the first week of April. The students are admitted to I by the management of the school on a random basis only after inviting application form and verification of the documents required for admission.
                                </p>
                            </div>
                            <div>
                                <h5>Admission in class VI - VIII</h5>
                                <p>
                                    Normally casual vacancies, if any, in other classes are filled in after the commencement of the academic year.
                                </p>
                            </div>
                            <div>
                                <h5>Admission to class XI</h5>
                                <p>
                                    The Senior School Certificate Course offered here is conducted by the Central Board of Secondary Education, Delhi, and is a two year Post Secondary Course which has been recognized by all Indian Universities as equivalent to the Intermediate College Examination. On Completion of the course, the candidates are eligible to begin the three year degree course in the Universities.
                                </p>
                                <ul>
                                    <li>  Since admission to Class XI is designed to be SELECTIVE in the Government’s scheme of education, students of Class X must apply for admission to Class XI when applications are called for and appear for an Aptitude Test. </li>
                                    <li> Apart from the minimum qualification prescribed by the Central Board, the school has its own norms of eligibility for admission. Eligibility will depend on the following:</li>
                                    <ul>
                                        <li>High academic performance in the All India Secondary School Examination, the Entrance Test, Sent-up Examination, Pre-Board Examination and his/her performance in Class X. </li>
                                        <li> Regularity in attendance and work during IX-X. Thus, only those students can be accomodated who in addition to mental ability have also displayed serious application to studies.</li>
                                        <li> Character and conduct of the candidate should be such that during the course here at P.P.M. School he/she has shown clear evidence that he/she has benefited from the character formation offered in the school. Mere academic performance WILL NOT MAKE THE STUDENT ELIGIBLE FOR ADMISSION TO CLASS XI. The principal, in the consultation with the Governing Body of the school is the final arbiter in this matter.</li>

                                    </ul>
                                    <li> For the Science Stream, we expect an average of 85% or the corresponding grade, in Maths & Science. An aggregate of 70% or the corresponding grade is a must for the Commerce Stream</li>
                                </ul>
                            </div>

                            <div className='Add_pro_Courses'>
                                <button>Courses</button>
                                <ul>
                                    <li>
                                        <h6>Course of Studies</h6>
                                        <p>The School prepares the students for the All India Secondary School (Class IX-X) and the All India Senior School Certificate Examinations (Class XI-XII) conducted by the Central Board of Secondary Education, Delhi.</p>
                                    </li>
                                    <li>
                                        <h6>.Medium of Instruction</h6>
                                        <p>Using the language of the child as a medium of instruction has undeniable inherent educational advantages. For many years P.P.M. School has been following Hindi and English medium of instruction in the Primary section, bilingual (Hindi and English) from Class VI-X (Social Studies and Moral Science in Hindi) and English medium at the +2 level. However, over the years English has become a tool of empowerment in the world. Indeed it has become the most important language in the world today. This change has taken place in India since globalization in the early 1990s. Therefore, in the changed context of today, we have decided to change the medium of instruction into English in the following phased out manner from the academic year 2010-11.</p>
                                    </li>
                                </ul>
                                <p><PlayArrow sx={{marginRight:"10px"}}/> English medium from Class I to X, from 2010 onwards.</p>
                                <p><PlayArrow sx={{marginRight:"10px"}}/> English medium from Class I to X, from 2010 onwards.</p>
                            </div>
                        </div>

                        <div className='Add_pro_box22'>
                            <img src={aboutSide} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AdminsionProcess
