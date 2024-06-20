
import { ArrowBack, ArrowForward, Search } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
// import Button from './Button';
import { useSelector, useDispatch } from 'react-redux';
import { onChange, onClickMenu } from '../Action/Index';
// import { onSearch } from '../Action/Index';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const [keyword, setkeyword] = useState("");
  const [login, setLogin] = useState(true);
  const [isMenuVisible, setIsMenuVisible] = useState(true); // State to manage menu visibility

  const disp = useSelector((state) => state.Search);

  const disp1 = useSelector((state) => state.onMenu);

  // console.log(disp)
  const dispatch = useDispatch();

  const handleinput = (e) => {
    const newKeyword = e.target.value;
    setkeyword(newKeyword);
    dispatch(onChange(newKeyword));
  }

  const handleMenu = () => {
    console.log("menu");
    dispatch(onClickMenu(""));
  }

  const handleResize = () => {
    if (window.innerWidth > 600) {
      setIsMenuVisible(false);
    } else {
      setIsMenuVisible(true);
    }
  }

  useEffect(() => {
    handleResize(); // Initial check on component mount
    window.addEventListener('resize', handleResize); // Add listener for resize events
    return () => {
      window.removeEventListener('resize', handleResize); // Clean up on component unmount
    }
  }, []);

  return (
    <>

      <div className='spotify_navbar'>
        {/* <div className='menu_icon' style={{ color: "white", display: disp1 === "none" ? "block" : "none" }} onClick={handleMenu}>
          <MenuIcon fontSize='large' />
        </div> */}
        {isMenuVisible &&
          <div className='menu_icon' style={{ color: "white", display: disp1 === "none" ? "block" : "none" }} onClick={handleMenu}>
            <MenuIcon fontSize='large' />
          </div>
        }
        <div className='arrow_btn' style={{ display: isMenuVisible==true ? disp1 === "none" ? "none" : "block" : "block" }}><ArrowBack className='arrow' /><ArrowForward className='arrow' /></div>

        {/* <div className='arrow_btn'>
          <ArrowBack className='arrow' />
          <ArrowForward className='arrow' />
        </div> */}

        <div className='search2' style={{ display: `${disp}` }}>
          <Search className='search1 ser ' style={{ fontSize: "30px", color: "black", marginTop: "8px" }} />
          <input type="search" className='Search' value={keyword} onChange={(e) => handleinput(e)} style={{ display: "" }} />
        </div>
        <div>
          {
            login ? <button className='nav_btn navBtn1'>Login</button> : <button className='nav_btn navBtn1'>R</button>
          }

        </div>
      </div>



    </>
  )
}

export default Navbar


