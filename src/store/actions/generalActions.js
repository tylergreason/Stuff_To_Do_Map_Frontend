export const setWindowWidth = value => {
    return {
        type: "SET_WINDOW_WIDTH",
        width: value
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