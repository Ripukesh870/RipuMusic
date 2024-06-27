
// import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import datas from "./datas.json";
// import { PauseCircleFilled, PlayCircle } from '@mui/icons-material';

// function MusicSection() {
//     const [tracks, setTracks] = useState([]);
//     const mystate = useSelector((state) => state.onchanges);
//     const [push, setpush] = useState(true);
//     const [music, setMusic] = useState("");
//     const [activeTrack, setActiveTrack] = useState(null);



//     useEffect(() => {
//         const fetchTracks = async () => {
//             try {
//         // const response = await fetch(`https://v1.nocodeapi.com/ripukesh_870/spotify/fveXgbtpOkBQfwtQ/search?q=${mystate}&type=track`);
//        // const data =await datas.json();
//        // const data = await response.json();
//        // setTracks(data.tracks.items);
//        // setTracks(datas.track.items);
//        // console.log(tracks);
//                 console.log(datas.tracks.items);
//                 setTracks(datas.tracks.items)
//             } catch (error) {
//                 console.error("Error fetching music data:", error);
//             }
//         };

//         if (mystate.trim() !== '') {
//             fetchTracks();
//         }
//     }, [mystate]);

//     const handlePlay = (index) => {
//         console.log(index);
//         setpush(!push);
//         setMusic(tracks[index].preview_url);

//     }


//     return (
//         <div className='spotyfy_home_1'>
//             <h4 className='spotyfy_home_1_h4'>Music</h4>
//             <div className='spotyfy_home_11' >
//                 {tracks.map((track, index) => (
//                     <div key={index} className="card" style={{ width: "15rem" }}>
//                         <img src={track.album.images[0].url} className="card-img-top" alt={track.name} />
//                         <p className='card-img-overlay audio-controls' >
//                             {push ? (
//                                 <PlayCircle style={{ fontSize: "45px", cursor: "pointer" }}
//                                     onClick={() => handlePlay(index)} />
//                             ) : (
//                                 <PauseCircleFilled style={{ fontSize: "45px", cursor: "pointer" }} onClick={() => handlePlay(index)} />
//                             )} 
//                         </p>
//                         <div className="card-body">
//                             <h5 className="card-title">{track.name}</h5>
//                             <p className="card-text">release date: {track.album.release_date}</p>
//                             {/* <audio src={track.preview_url} controls className='w-100'></audio> */}
//                         </div>
//                     </div>
//                 ))}
//                 <div className='audio'>
//                     <audio src={music} controls className='w-100'></audio>
//                 </div>
//             </div>

//         </div>
//     );
// }

// export default MusicSection;








import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import datas from "./datas.json";
import { PauseCircleFilled, PlayCircle } from '@mui/icons-material';

function MusicSection() {
    const [tracks, setTracks] = useState([]);
    const mystate = useSelector((state) => state.onchanges);
    const [activeTrack, setActiveTrack] = useState(null);
    const [music, setMusic] = useState("");

    

    useEffect(() => {
        const fetchTracks = async () => {
            try {
                // console.log(datas.tracks.items);
                // setTracks(datas.tracks.items);
                if(mystate === "" || mystate === "R_Music"){
                    setTracks(datas.tracks.items);
                    // const val=datas.tracks.items;
                    // console.log(val);
                } else {
                    const filteredTracks = datas.tracks.items.filter(track => track.name.toLowerCase().includes(mystate.toLowerCase()))
                    setTracks(filteredTracks);

                }

                
            } catch (error) {
                console.error("Error fetching music data:", error);
            }
        };

        if (mystate.trim() !== '') {
            fetchTracks();
        }
    }, [mystate]);

    const handlePlay = (index) => {
        if (index === activeTrack) {
            setActiveTrack(null);
            setMusic("");
        } else {
            setActiveTrack(index); 
            setMusic(tracks[index]?.preview_url); 

        }
    }

    return (
        <div className='spotyfy_home_1'>
            <h4 className='spotyfy_home_1_h4'>Music</h4>
            <div className='spotyfy_home_11'>
                {tracks.map((track, index) => (
                    
                    <div key={index} className="card" style={{ width: "15rem" }}>
                        <img src={track.album.images[0]?.url} className="card-img-top" alt={track.name} />
                        <div className="card-body">
                            <h5 className="card-title">{track.name}</h5>
                            <p className="card-text">Release date: {track.album.release_date}</p>
                            <div className="audio-controls">
                                {activeTrack === index ? (
                                    <PauseCircleFilled style={{ fontSize: "45px", cursor: "pointer" }} onClick={() => handlePlay(index)} />
                                ) : (
                                    <PlayCircle style={{ fontSize: "45px", cursor: "pointer" }} onClick={() => handlePlay(index)} />
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {activeTrack !== null && (
                <div className='audio'>
                    <audio src={tracks[activeTrack]?.preview_url} controls autoPlay className='w-100'></audio>
                </div>
            )}
        </div>
    );
}

export default MusicSection;











// const response = await fetch(`https://v1.nocodeapi.com/ripukesh_870/spotify/fveXgbtpOkBQfwtQ/search?q=${mystate}&type=track`);
// const data =await datas.json();
// const data = await response.json();
// setTracks(data.tracks.items);
// setTracks(datas.track.items);
// console.log(tracks);