// const initialState ="R_Music";

// const onchanges=(state = initialState,action)=>{
//     switch(action.type){
//         case "ONCHANGE":return  action.payload;
//         default: return state;
//     }
// }

// export default onchanges;





// Reducer.js
const initialState = "R_Music";

const onchanges = (state = initialState, action) => {
    switch (action.type) {
        case "ONCHANGE":
            return action.payload;
        
        case "HOME":
            return action.payload;

        default:
            return state;
    }
};

export default onchanges;
