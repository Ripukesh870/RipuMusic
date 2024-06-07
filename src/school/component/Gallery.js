import React, { useState } from 'react'
import { Home, } from "@mui/icons-material"
import sclassbanner from "../image/sclassbanner.jpg"
import ImageSlider from "./ImageSlider"
// import ImageSlider from "../image/SudarsanSir.jpg";
import flowerImg from "../image/aboutside.jpg";
import lighthouseImg from "../image/activitybanner.jpg";
import "../css/Gallery.css"
function Gallery() {
    const [slid, setSlid] = useState(false);

    const images = [
        lighthouseImg,
        flowerImg,
        
        
        lighthouseImg,
        flowerImg,
        lighthouseImg,
        flowerImg,
        lighthouseImg,
        flowerImg,
        lighthouseImg,
        flowerImg,
        

        // Add more image URLs here
    ];
    const handleSlide=()=>{
        slid===false ? setSlid(true): setSlid(false);
    };
    return (
        <div className='transport_main'>
            <div className='transport_first_box' style={{ backgroundImage: `url(${sclassbanner})` }}>
                <h4>Gallery </h4>
            </div>
            <div>
                <div>
                    <div className='Add_pro_box211'>
                        <button><Home className='Add_pro_box211_home' style={{ width: "30px", }} />  Gallery </button>
                    </div>
                    <div className='S_C_gallery_slide' onClick={handleSlide}>
                        <h3 style={{ border: "", margin: "30px" }}>Gallery</h3>
                        {slid &&
                            <div className='S_C_gallery_slide1' >
                                <ImageSlider images={images} />
                            </div>
                        }
                        {/* <ImageSlider /> */}
                    </div>
                    <div style={{  margin: "20px 0px" }}>
                        <div  className="SC_gallery_slide2" style={{ display: "flex", alignContenta: "center", textAlign: "center", justifyContent: "center", flexWrap: "wrap" }}>
                            {/* <div style={{border:"2px solid red",width:"280px",height:"250px",margin:"10px"}}>
                             <h3>hello</h3>
                           </div> */}
                            {
                                images.map((image, ind) => (
                                    <div className='SC_gallery_image' style={{ width: "280px", height: "", margin: "10px" ,backgroundImage: `url(${image})`,objectFit:'cover', backgroundRepeat: "no-repeat"}} onClick={handleSlide}>
                                        <h3>hello</h3>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery 
