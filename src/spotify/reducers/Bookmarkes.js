

// const initialState = [];

// const bookMark = (state = initialState, action) => {
//     switch (action.type) {
//         case "BOOKMARK":
//             const { trackval, index } = action.payload;
//             // Toggle bookmark for the specific track
//             const updatedState = [...state];

//             updatedState[index] = {
//                 ...updatedState[index],
//                 bookmarked: !updatedState[index]?.bookmarked
//             };
//             return updatedState;
//         default:
//             return state;
//     }
// };

// export default bookMark;


// const initialState = {
//     tracks: [],
//     value: []  // Assuming value represents the bookmarked tracks
// };

// const bookMark = (state = initialState, action) => {
//     switch (action.type) {
//         case "BOOKMARK":
//             const { trackval, index } = action.payload;
//             // Toggle bookmark for the specific track
//             const updatedTracks = [...state.tracks];
//             updatedTracks[index] = {
//                 ...updatedTracks[index],
//                 bookmarked: !updatedTracks[index]?.bookmarked
//             };

//             // Update the value (bookmarks array)
//             const updatedValue = updatedTracks.filter(track => track.bookmarked);
            
//             return {
//                 ...state,
//                 tracks: updatedTracks,
//                 value: updatedValue
//             };
//         default:
//             return state;
//     }
// };

// export default bookMark;



// const initialState = [];


// const bookMark = (state = initialState, action) => {
//     // switch (action.type) {
//     //     case "BOOKMARK":
            
//     //     default:
//     //         return state;
//     // }

//     switch (action.type) {
//         case "BOOKMARK":
//             return {
//                 ...state,
//                 value: action.payload
//             };
//         default:
//             return state;
//     }

// };

// export default bookMark;


// reducers/bookMark.js
const initialState = {
    value: [] // Ensure value is initialized as an array
};

const bookMark = (state = initialState, action) => {
    switch (action.type) {
        case "BOOKMARK":
            return {
                ...state,
                value: action.payload
            };
        default:
            return state;
    }
};

export default bookMark;
