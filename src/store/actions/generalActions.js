export const setWindowWidth = value => {
    return {
        type: "SET_WINDOW_WIDTH",
        width: value
    }
}

export const getAttractionListShown = () => {
//     // find the first (and only) element with the class AttractionList
//     // find its first value
    const list = document.getElementsByClassName("AttractionList")[0]
    // if list exists
    // debugger
    if (list !== undefined){
        if (list.classList.contains("showList")){
            // if list contains showList class (if list is shown)
            return {
                type: "SET_SHOWLIST",
                showList: true
            }
        }else{
            // if list is not shown: 
            return {
                type: "SET_SHOWLIST",
                showList: false
            }
        }
    } else{
        return {
            type: "SET_SHOWLIST",
            showList: false
        }
    }
}

// export const setAttractionList = () => {
//     // find the first (and only) element with the class AttractionList
//     // find its first value

//     const list = document.getElementsByClassName("AttractionList")[0]
//     if (list !== undefined){
//         return {
//             type: "SET_ATTRACTION_LIST",
//             list: list
//         }
//     }else{

//     }
// }