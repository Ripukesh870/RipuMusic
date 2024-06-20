const initialState = "none";

const onMenu = (state = initialState, action) => {
    switch (action.type) {  
        case "MENU":
            return action.payload;
        default:
            return state;
    }
};

export default onMenu;



