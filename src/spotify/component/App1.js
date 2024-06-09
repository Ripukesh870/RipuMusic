import React, { useState } from 'react';
import "./css/App1.css";
import { Add, ArrowRightAlt, Home, LibraryMusic, Search } from '@mui/icons-material';
// import Home1 from "./Home"
import Navbar from './Navbar'
import "./css/Home.css";
import MusicSection from './MusicSection';

function App1() {
    const [track, settrack] = useState()
    // const fetchApt = async () => {
    //     let data = await fetch("https://v1.nocodeapi.com/ripukesh_870/spotify/fveXgbtpOkBQfwtQ/search?q=R_Music&type=track");
    //     let jsonData = await data.json();
    //     console.log(jsonData.tracks.items);
    // }
    const handleSearch=()=>{
        
    }
    return (
        <div className='spotify_app'>
            <div className='spotify_app_section1 spotify_app_box'>
                <div className='spotify_app_box1 spotify_app_section11'>
                    <button className=' box1_btn'> <Home sx={{ marginTop: "-5px", marginRight: "5px", fontSize: "29px" }} /> Home</button>
                    <button className=' box1_btn' onClick={handleSearch}> <Search sx={{ marginTop: "-3px", marginRight: "5px", fontSize: "29px" }} /> Search</button>
                </div>
                <div className='spotify_app_box1 spotify_app_section12'>
                    <div className=' spotify_app_section121' >
                        <button className='box1_btn box1_btn1'  ><LibraryMusic sx={{ marginTop: "-5px", marginRight: "5px", fontSize: "29px" }} /> Your Library</button>
                        <button className='box1_btn box1_btn5' ><Add sx={{ background: "#1f1e1e", color: "white", fontSize: "30px", marginRight: "10px" }} />  <ArrowRightAlt sx={{ background: "#1f1e1e", color: "white", fontSize: "30px" }} /> </button>
                    </div>
                    <div className='spotify_app_section122'>
                        <h6>Create your first playlist</h6>
                        <p>it's easy,we'll help you</p>
                        <button className='box1_btn6'>Create PlayList</button>
                    </div>
                    <div className='spotify_app_section122'>
                        <h6>Let's find some products to follow</h6>
                        <p>we'll keep you on new episodes</p>
                        <button className='box1_btn6'>Browse prodcast</button>
                    </div>
                </div>
            </div>

            <div className='spotify_app_section2 spotify_app_box' >
                <Navbar />
                <div className='spotyfy_home'>
                    <div className='spotyfy_home1'>
                        <button className='home_btn slick-active'>All</button>
                        <button className='home_btn homeBtn1 '>Music</button>
                        <button className='home_btn homeBtn1'> Prodcast</button>
                    </div>

                    <MusicSection />


                </div>
            </div>
            {/* <div className='spotify_app_section3 spotify_app_box'>
                last
            </div> */}
        </div>
    )
}

export default App1
