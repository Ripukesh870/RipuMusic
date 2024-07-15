export const onChange=(keyword)=>{
    return {
        type:"ONCHANGE",
        payload:keyword,
    }
}


export const onSearch=(keyword)=>{
    return {
        type:"SEARCH",
        payload:keyword,
    }
}
export const onClickHome=(keyword)=>{
    return {
        type:"HOME",
        payload:keyword,
    }
}

export const onClickMenu=(keyword)=>{
    return {
        type:"MENU",
        payload:keyword,
    }
}

export const onLogin=(keyword)=>{
    return {
        type:"LOGIN",
        payload:keyword,
    }
}

// export const bookmark=(trackval,index)=>{
//     return {
//         type:"BOOKMARK",
//         plyload:{trackval,index}
//     }
// }

// export const bookmark = (trackval, index) => {
//     return {
//         type: "BOOKMARK",
//         payload: { trackval, index }
//     };
// };


export const bookmark = (value) => {
    return {
        type: "BOOKMARK",
        payload: value
    };
};
