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
                    {/* <Route path='/adminsionprocess' element={< />} />
                    <Route path='/feestructure' element={< />} />
                    <Route path='/library' element={< />} /> */}

                </Routes>
                </div>
            </BrowserRouter>

        </div>
    )
}

export default App1
