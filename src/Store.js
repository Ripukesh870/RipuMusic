// import { createStore } from "@reduxjs/toolkit";

// import rootReducers from "./spotify/reducers/Index";

// const store=createStore(rootReducers);


// export default store;



import { createStore } from "@reduxjs/toolkit";
import rootReducers from "./spotify/reducers/Index";

const store = createStore(rootReducers);

export default store;


