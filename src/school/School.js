import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./School.css";
import Navbar from './Navbar';
import Footer from './Footer'
import Home from './Home';
import AdminsionProcess from "./component/AdminsionProcess"
import FeeStructure from './component/FeeStructure';
import Library from './component/Library';
import Transport from './component/Transport';
import Computer_lab from './component/Computer_lab';
import Smart_Class from './component/Smart_Class';
import Subject_Lab from './component/Subject_Lab';
import Dispanray from './component/Dispanray';
import Activity from './component/Activity';
import Sports from './component/Sports';
import Result from './component/Result';
import Homework from './component/Homework';
import Gallery from './component/Gallery';
import History from './component/History';
import SchoolInfa from './component/SchoolInfa';
import FaculityQua from './component/FaculityQua';
import Accadmic from './component/Accadmic';
import SchoolGui from './component/SchoolGui';
import T_C_Section from './component/T_C_Section';
import Downloads from './component/Downloads';
import GovernenseStructure from './component/GovernenseStructure';
import Cbse from './component/Cbse';
import Media from './component/Media';
import Administration from './component/Administration';
import StudentDetials from './component/StudentDetials';
import Contact from './component/Contact';
// import Regastationupload from './Regastationupload'
// import Resultupload from './Resultupload';
// import Newnotificationupload from './Newnotificationupload';
// import Newadmition from './Newadmition';

function School() {
  return (
    <div className='School_contaner'>
      {/* <Navbar />
        <Home /> */}

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/adminsionprocess' element={<AdminsionProcess />} />
          <Route path='/feestructure' element={<FeeStructure />} />
          <Route path='/library' element={<Library />} />
          <Route path='/transport' element={<Transport />} />
          <Route path='/computer_lab' element={<Computer_lab />} />
          <Route path='/smart_class' element={<Smart_Class />} />
          <Route path='/subject_lab' element={<Subject_Lab />} />
          <Route path='/dispanray' element={<Dispanray />} />
          <Route path='/activity' element={<Activity />} />
          <Route path='/sports' element={<Sports />} />
          <Route path='/result' element={<Result />} />
          <Route path='/homeworkwork' element={<Homework />} />

          <Route path='/gallery' element={<Gallery />} />
          <Route path='/media' element={<Media/>} />

          <Route path='/history' element={<History />} />
          <Route path='/schoolinfa' element={<SchoolInfa />} />
          <Route path='/faculityqua' element={<FaculityQua />} />
          <Route path='/accadmic' element={<Accadmic />} />
          <Route path='/schoolGui' element={<SchoolGui />} />
          <Route path='/t_c_section' element={<T_C_Section />} />
          <Route path='/downloads' element={<Downloads />} />
          <Route path='/governensestructure' element={<GovernenseStructure />} />
          <Route path='/cbse' element={<Cbse />} />

          <Route path='/administration' element={<Administration />} />
          <Route path='/studentdetials' element={<StudentDetials />} />
          <Route path='/contact' element={<Contact />} />





          {/* <Route path='/registerupload' element={<Regastationupload />} />
          <Route path='/resultupload' element={<Resultupload />} />
          <Route path='/newnotification' element={<Newnotificationupload />} />
          <Route path='/newadmition' element={<Newadmition />} /> */}
          {/* <Route path='/randomcolor' element={<RandomColor/>} />
          <Route path='/counter' element={<Counter/>} />
          <Route path='/todolist' element={<Todolist/>} />
          <Route path='/report' element={<Report/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/Regester' element={<Formvalidation/>} />
          <Route path='/forget' element={<Forget/>} />
           */}
        </Routes>
        <Footer />
      </BrowserRouter>


    </div>
  )
}

export default School
