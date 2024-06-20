import React from 'react'
import Navbar from './Navbar'
import "./css/Home.css";
import MusicSection from './MusicSection';
function Home() {
    return (
        < >
        
            <div className='spotyfy_home'>
                <div className='spotyfy_home1'>
                    <button className='home_btn slick-active'>All</button>
                    <button className='home_btn homeBtn1 '>Music</button>
                    <button className='home_btn homeBtn1'> Prodcast</button>
                </div>
                <div className='abcd'>
                    <MusicSection />
                </div>
                
            </div>
        </>
    )
}

export default Home
