// import React, { useState, useEffect } from 'react'
// // import { PauseCircleFilled, PlayCircle } from '@mui/icons-material';
// import { useSelector } from 'react-redux';

// function MusicSection() {
//     const [push, setpush] = useState(true);
//     const [tracks, setTracks] = useState([]);
//     const mystate = useSelector((state) => state.onchanges);
//     console.log(mystate);
//     useEffect(() => {
//         // Fetch music data (replace with your actual API endpoint)
//         const fetchTracks = async () => {
//             try {
//                 const response = await fetch("https://v1.nocodeapi.com/ripukesh_870/spotify/fveXgbtpOkBQfwtQ/search?q=R_Music&type=track");
//                 // const response = await fetch(`https://v1.nocodeapi.com/ripukesh_870/spotify/fveXgbtpOkBQfwtQ/search?q=${mystate}&type=track`);

//                 const data = await response.json();
//                 setTracks(data.tracks.items);
//                 console.log(data);

//                 console.log(tracks);

//             } catch (error) {
//                 console.error("Error fetching music data:", error);
//             }
//         };
//         fetchTracks();
//     },[]);


   

//     const HandlePush = () => {
//         setpush(prevPush => !prevPush);
//     }
//     return (
//         <div className='spotyfy_home_1'>
//             <h4 className='spotyfy_home_1_h4'>Music</h4>
//             <div className='spotyfy_home_11'>
//                 {
//                     tracks.map((track, index) => (
//                         <div key={index} className="card" style={{ width: "15rem" }}>
//                             <img src={track.album.images[0].url} className="card-img-top" alt={track.name} />
//                             {/* <p className='card-img-overlay'> {push ? (
//                                 <PlayCircle style={{ fontSize: "45px", cursor: "pointer" }} onClick={HandlePush}/>
//                             ) : (
//                                 <PauseCircleFilled style={{ fontSize: "45px", cursor: "pointer"}}onClick={HandlePush} />
//                             )} </p> */}
//                             <div className="card-body" >
//                                 <h5 className="card-title">{track.name}</h5>
//                                 <p className="card-text">release date: {track.album.release_date}</p>
//                                 {/* <a href="/" className="btn btn-primary">Go somewhere</a> */}
//                                 <audio src={track.preview_url} controls className='w-100'> </audio>
//                             </div>
//                         </div>
//                     ))
//                 }
//             </div>
//         </div>
//     )
// }


// export default MusicSection












// MusicSection.js
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function MusicSection() {
    const [tracks, setTracks] = useState([]);
    const mystate = useSelector((state) => state.onchanges);

    useEffect(() => {
        const fetchTracks = async () => {
            try {
                const response = await fetch(`https://v1.nocodeapi.com/ripukesh_870/spotify/fveXgbtpOkBQfwtQ/search?q=${mystate}&type=track`);
                const data = await response.json();
                setTracks(data.tracks.items);
            } catch (error) {
                console.error("Error fetching music data:", error);
            }
        };

        if (mystate.trim() !== '') {
            fetchTracks();
        }
    }, [mystate]);

    return (
        <div className='spotyfy_home_1'>
            <h4 className='spotyfy_home_1_h4'>Music</h4>
            <div className='spotyfy_home_11'>
                {tracks.map((track, index) => (
                    <div key={index} className="card" style={{ width: "15rem" }}>
                        <img src={track.album.images[0].url} className="card-img-top" alt={track.name} />
                        <div className="card-body">
                            <h5 className="card-title">{track.name}</h5>
                            <p className="card-text">release date: {track.album.release_date}</p>
                            <audio src={track.preview_url} controls className='w-100'></audio>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MusicSection;
