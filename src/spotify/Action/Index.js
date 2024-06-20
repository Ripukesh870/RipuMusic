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

