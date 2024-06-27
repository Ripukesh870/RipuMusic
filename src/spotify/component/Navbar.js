
import { ArrowBack, ArrowForward, Search } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { onChange, onClickMenu, onLogin } from '../Action/Index';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';

function Navbar() {
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const [showMenu, setShowMenu] = useState(false); 
  const [keyword, setkeyword] = useState("");
  const disp = useSelector((state) => state.Search);
  const disp1 = useSelector((state) => state.onMenu);
  const isLoggedIn = useSelector(state => state.LogIn);
  const dispatch = useDispatch();
  const nav=useNavigate();

  const handleinput = (e) => {
    const newKeyword = e.target.value;
    // console.log(newKeyword);
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

  const handleLogin = () => {
    // Perform login logic here (e.g., set user session, update state)
    // setIsLoggedIn(true);
  }

  const handleAvatarClick = () => {
    setShowMenu(showMenu?false:true);
  }


  const handleLogout = () => {
    // Perform logout logic here (e.g., clear user session, update state)
    // setIsLoggedIn(false);
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
        {isMenuVisible &&
          <div className='menu_icon' style={{ color: "white", display: disp1 === "none" ? "block" : "none" }} onClick={handleMenu}>
            <MenuIcon fontSize='large' />
          </div>
        }
        <div className='arrow_btn' style={{ display: isMenuVisible == true ? disp1 === "none" ? "none" : "block" : "block" }}><ArrowBack className='arrow' /><ArrowForward className='arrow' /></div>

        <div className='search2' style={{ display: `${disp}` }}>
          <Search className='search1 ser ' style={{ fontSize: "30px", color: "black", marginTop: "8px" }} />
          <input type="search" className='Search' value={keyword} onChange={(e) => handleinput(e)} style={{ display: "" }} />
        </div>
        <div>
          

          {isLoggedIn ? (
            <Avatar className='' onClick={handleAvatarClick} style={{ cursor: 'pointer',marginRight:"20px" }}>
              R
            </Avatar>
          ) : (
            <Link to="/login" className='nav_btn navBtn1' onClick={handleLogin}>Login</Link>
          )}

          
        {isLoggedIn && showMenu && (
            <ul className='drop_down_button' style={{position:"absolute" ,right:"30px",width:"150px",textAlign:"left",listStyle:"none",fontSize:"18px",backgroundColor:"#4A4646",marginTop:"20px"}}>
              <li className='d_w_b' style={{margin:"6px 0px",cursor:"pointer"}} onClick={()=>{nav("/profile");setShowMenu(!showMenu);}}>Profile</li>
              <li className='d_w_b' style={{margin:"6px 0px",cursor:"pointer"}} onClick={()=>{dispatch(onLogin(false));nav("/");setShowMenu(!showMenu);}}>Log Out</li>
            </ul>
        )}

        </div>
      </div>



    </>
  )
}

export default Navbar









// ripukesh870@gmail.com









{/* {
            login ? <Link to="/login" className='nav_btn navBtn1' >Login</Link> : <button className='nav_btn navBtn1'>R</button>
          } */}

          // {isLoggedIn && showMenu && (
           
          //   <div className="dropdown-menu" style={{ border:"2px solid green", position: 'absolute', top: '40px', right: 0, backgroundColor: '#ffffff', boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)', zIndex: 1, minWidth: '120px', textAlign: 'right',order:2 }}>
          //     <button onClick={handleLogout} style={{ padding: '10px 20px', display: 'block', width: '100%', border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}>Logout</button>
          //   </div>
          // )}