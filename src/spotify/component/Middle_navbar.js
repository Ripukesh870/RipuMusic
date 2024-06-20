import React from 'react'
import MusicSection from './MusicSection'
import Navbar from './Navbar'

function Middle_navbar() {
    return (
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
    )
}

export default Middle_navbar


{/* <div className='spotyfy_home'>
                <div className='spotyfy_home1'>
                    <button className='home_btn slick-active'>All</button>
                    <button className='home_btn homeBtn1 '>Music</button>
                    <button className='home_btn homeBtn1'> Prodcast</button>
                </div>

                <MusicSection />
            </div> */}