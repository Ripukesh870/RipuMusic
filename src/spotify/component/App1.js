import React from 'react';
import "./css/App1.css";
// import Home1 from "./Home"
// import Navbar from './Navbar'
import "./css/Home.css";
// import MusicSection from './MusicSection';
import Side_navbar from './Side_navbar';
import Middle_navbar from './Middle_navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import MusicSection from './MusicSection';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Forget from './Forget';
import SignupDetials from './SignupDetials';
import Profile from './Profile';
// import { Home } from '@mui/icons-material';

function App1() {

    return (
        <div className='spotify_app'>
            <BrowserRouter>
                <Side_navbar />
                <div className='spotify_app_section2 spotify_app_box' >
                    <Navbar />
                    <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/forget' element={<Forget />} />  
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/signupdetials' element={<SignupDetials />} />

                </Routes>
                </div>
            </BrowserRouter>

        </div>
    )
}

export default App1
