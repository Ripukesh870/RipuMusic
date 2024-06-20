import React, { useState } from 'react'
import { Add, ArrowRightAlt, Home, LibraryMusic, Search } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { onClickMenu, onSearch } from '../Action/Index';
import CloseIcon from '@mui/icons-material/Close';

function Side_navbar() {
    const [track, settrack] = useState()
    const dispatch = useDispatch();
    const disp1 = useSelector((state) => state.onMenu);

    const disp = useSelector((state) => {
        return state.onSearch;
    });

    const handleSearch = () => {
        console.log("Ripukesh kumar");
        dispatch(onSearch(""));
        dispatch(onClickMenu("none"));
    }

    const handleHome = () => {
        dispatch(onSearch("none"));
        dispatch(onClickMenu("none"));

    }

    const handleClose = () => {
        console.log("menu");
        dispatch(onClickMenu("none"));
    }



    return (
        <>
            <div className='spotify_app_section1 spotify_app_box' style={{ display: "" }}>
                <div className='spotify_app_box1 spotify_app_section11'>
                    <button className=' box1_btn' onClick={handleHome}> <Home sx={{ marginTop: "-5px", marginRight: "5px", fontSize: "29px" }} /> Home</button>
                    <button className=' box1_btn' onClick={handleSearch} > <Search sx={{ marginTop: "-3px", marginRight: "5px", fontSize: "29px" }} /> Search</button>
                </div>
                <div className='spotify_app_box1 spotify_app_section12'>
                    <div className=' spotify_app_section121' >
                        <button className='box1_btn box1_btn1'  ><LibraryMusic className='libraryMusic' /> Your Library</button>
                        <button className='box1_btn box1_btn5' ><Add sx={{ background: "#1f1e1e", color: "white", fontSize: "25px", marginRight: "10px" }} />  <ArrowRightAlt sx={{ background: "#1f1e1e", color: "white", fontSize: "25px" }} /> </button>
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

            {/* show == block "" */}

            <div className='Spotify_Side_nav' style={{ display: `${disp1}` }}>
                <div className='spotify_app_box1 spotify_app_section11'>
                    <div>
                        <button className=' box1_btn' onClick={handleHome}> <Home sx={{ marginTop: "-5px", marginRight: "5px", fontSize: "29px" }} /> Home</button>
                        <button className=' box1_btn' onClick={handleSearch} > <Search sx={{ marginTop: "-3px", marginRight: "5px", fontSize: "29px" }} /> Search</button>
                    </div>
                    <div className='menu_icon'>
                        <div className='close m_icon' onClick={handleClose}><CloseIcon fontSize='35px' /></div>
                    </div>

                </div>
                <div className='spotify_app_box1 spotify_app_section12' >
                    <div className=' spotify_app_section121' >
                        <button className='box1_btn box1_btn1'  ><LibraryMusic className='libraryMusic' /> Your Library</button>
                        <button className='box1_btn box1_btn5' ><Add sx={{ background: "#1f1e1e", color: "white", fontSize: "25px", marginRight: "10px" }} />  <ArrowRightAlt sx={{ background: "#1f1e1e", color: "white", fontSize: "25px" }} /> </button>
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
        </>
    )
}

export default Side_navbar
