import { ArrowBack, ArrowForward, Search } from '@mui/icons-material'
import React from 'react'
import Button from './Button';

function Navbar() {

  return (
    <div className='spotify_navbar'>
      <div className='arrow_btn'><ArrowBack className='arrow' /><ArrowForward className='arrow' /></div>
      <div className='search2'>
        <Search className='search1 ser ' style={{ fontSize: "30px",color:"black" }}/>
        <input type="search" className='Search' />
        {/* <ArrowForward className='arrow'/> */}
      </div>
      <div>
        <button className='nav_btn'>Explore Premium</button>
        <button className='nav_btn navBtn1'>Install App</button>
        <button className='nav_btn navBtn1'>A</button>
        <button className='nav_btn navBtn1'>R</button>
      </div>
    </div>
  )
}

export default Navbar
