// import React, { useState, useEffect } from 'react';

// function Slide({ src, text, index, slideIndex }) {
//   return (
//     <div className="mySlides fade" style={{ display: index === slideIndex ? 'block' : 'none' }}>
//       <div className="numbertext">{`${index + 1} / 3`}</div>
//       <img src={src} style={{ width: '100%' }} alt={`Slide ${index + 1}`} />
//       <div className="text">{text}</div>
//     </div>
//   );
// }

// function Dot({ active, onClick }) {
//   return (
//     <span
//       className={`dot ${active ? 'active' : ''}`}
//       onClick={onClick}
//     ></span>
//   );
// }

// function Slideshow() {
//   const [slideIndex, setSlideIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSlideIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   const handleDotClick = (index) => {
//     setSlideIndex(index);
//   };

//   return (
//     <div className="slideshow-container">
//       {[...Array(3)].map((_, index) => (
//         <Slide
//           key={index}
//           src={`img_${index + 1}.jpg`}
//           text={`Caption ${index + 1}`}
//           index={index}
//           slideIndex={slideIndex}
//         />
//       ))}
//       <div style={{ textAlign: 'center' }}>
//         {[...Array(3)].map((_, index) => (
//           <Dot
//             key={index}
//             active={index === slideIndex}
//             onClick={() => handleDotClick(index)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Slideshow;




import React,{useState,useEffect} from 'react'
import img1 from "./image/img1.jpg"
import img2 from "./image/img2.jpg"
import img3 from "./image/img3.jpg"
import img4 from "./image/img4.jpg"

function Slideshow() {
  const images=[img1,img2,img3,img4];
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      // Increment index, but loop back to 0 if we reach the end
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    },4000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, [images.length]); // Dependency array ensures effect runs only when the length of images changes


  return (
    <div style={{border:"",height:"100%",boxSizing:"border-box",position:"relative" ,padding:"5px 10px 4px 10px",zIndex:0}}>
      <img src={images[currentIndex]} alt="" style={{width:"100%",height:"100%",objectFit:"cover",marginTop:"",border:"4px solid black",padding:"5px"}}/>
    </div>
  )
}

export default Slideshow
