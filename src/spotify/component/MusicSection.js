
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import datas from "./datas.json";
import { Bookmark, BookmarkAdd, BookmarkAddOutlined, PauseCircleFilled, PlayCircle } from '@mui/icons-material';
import bookMark from '../reducers/Bookmarkes';
import { bookmark } from '../Action/Index';

function MusicSection() {
    const [tracks, setTracks] = useState([]);
    const mystate = useSelector((state) => state.onchanges);
    const [activeTrack, setActiveTrack] = useState(null);
    const [music, setMusic] = useState("");
    // const [bookmarks, setBookmarks] = useState([]);
    const [value,setValue]=useState([]);

    const dispatch = useDispatch();
    const value1 = useSelector((state) => state.bookMark);

    useEffect(() => {
        const fetchTracks = async () => {
            try {
                // console.log(datas.tracks.items);
                setTracks(datas.tracks.items);
                if (mystate === "" || mystate === "R_Music") {
                    setTracks(datas.tracks.items);
                    const val = datas.tracks.items;
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

    }, [mystate,value]);


    const handlePlay = (index) => {
        if (index === activeTrack) {
            setActiveTrack(null);
            setMusic("");
        } else {
            setActiveTrack(index);
            setMusic(tracks[index]?.preview_url);
        }
    }

  
    const handleBookmark = (trackval,index) => {
        // Toggle bookmark for the specific track
        const updatedTracks = [...tracks];
        updatedTracks[index].bookmarked = !updatedTracks[index].bookmarked;
        setTracks(updatedTracks);
        // console.log(trackval);

        const updatedValue = [...value];
        if (updatedTracks[index].bookmarked) {
            updatedValue.push(trackval);
        } else {
            const trackIndex = updatedValue.findIndex(item => item.name === trackval.name);
            if (trackIndex !== -1) {
                updatedValue.splice(trackIndex, 1);
            }
        }
        setValue(updatedValue);
        // dispatch(bookmark(trackval,index));
        dispatch(bookmark(value));

        // console.log(value);
        // console.log(value1);

    };
    

    return (
        <div className='spotyfy_home_1'>
            <h4 className='spotyfy_home_1_h4'>Music</h4>
            <div className='spotyfy_home_11'>
                {tracks.map((track, index) => (

                    <div key={index} className="card" style={{ width: "15rem", padding: "10px" }}>
                        <img src={track.album.images[0]?.url} className="card-img-top" alt={track.name} />
                        <div className="card-body">
                            <h5 className="card-title">{track.name}</h5>
                            <p className="card-text">Release date: {track.album.release_date}</p>
                            <hr />
                            <div className="audio-controls" style={{ display: "flex", justifyContent: "space-between" }}>
                                {activeTrack === index ? (
                                    <PauseCircleFilled style={{ fontSize: "45px", cursor: "pointer" }} onClick={() => handlePlay(index)} />
                                ) : (
                                    <PlayCircle style={{ fontSize: "45px", cursor: "pointer" }} onClick={() => handlePlay(index)} />
                                )}
                                {/* <button className='or'>|</button> */}

                                {/* {
                                    bookmarks ? <Bookmark sx={{ margin: "auto 1px" }}  onClick={()=>handleBookmark(index)}/>
                                        : <BookmarkAddOutlined sx={{ margin: "auto 1px" }} onClick={()=>handleBookmark(index)}/>
                                } */}


                                {
                                    track.bookmarked ? (
                                        <Bookmark sx={{ margin: "auto 1px",cursor:"pointer" }} onClick={() => handleBookmark(track,index)} />
                                    ) : (
                                        <BookmarkAddOutlined sx={{ margin: "auto 1px",cursor:"pointer" }} onClick={() => handleBookmark(track,index)} />
                                    )
                                }

                                {/* <Bookmark /> */}
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