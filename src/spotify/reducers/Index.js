// import onchanges from "./Reducer";

// import { combineReducers } from "@reduxjs/toolkit";

// const rootReducers=combineReducers({
//     onchanges,
// })

// export default rootReducers;




// reducers/Index.js
import { combineReducers } from "@reduxjs/toolkit";
import onchanges from "./Reducer";
import Search from "./Reducer1";
import onMenu from "./Reducer2";
import LogIn from "./Loginreducer";


const rootReducers = combineReducers({
    onchanges,
    Search,
    onMenu,
    LogIn,
});

export default rootReducers;
