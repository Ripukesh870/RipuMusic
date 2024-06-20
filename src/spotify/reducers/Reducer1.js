const initialState = "none";

const Search = (state = initialState, action) => {
    switch (action.type) {
        case "SEARCH":
            return action.payload;
            
        // case "MENU":
        //     return action.payload;

        default:
            return state;
    }
};

export default Search;



