// // src/App.js
// import React from "react";
// import "./App.css";
// import ImageSlider from "./ImageSlider";
// import flowerImg from "./images/flower.jpg";
// import lighthouseImg from "./images/lighthouse.jpg";
// import dandelion from "./images/dandelion.jpg";

// function Image_Slider() {
//   const images = [
//     lighthouseImg,
//     flowerImg,
//     dandelion,
//     // Add more image URLs here
//   ];

//   return (
//     <div className="App">
//       <div style={{ padding: "10px" }}>
//         <ImageSlider images={images} />
//       </div>
//     </div>
//   );
// }

// export default Image_Slider;


// src/ImageSlider.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/ImageSlider.css"; // Create this file for custom styles

const ImageSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <div className="image-slider SC_image_slider" >
      <Slider {...settings} className="SC_image_slider1">
        {images.map((image, index) => (
          <div key={index}>
            <img  src={image} alt={`Slide ${index}`} style={{objectFit:"cover",height:"500px"}} className="SC_image_slider1_img" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
