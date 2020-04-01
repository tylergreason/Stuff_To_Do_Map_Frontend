export const setLogin = (boolean) => {
    return {
        type:'SET_LOGIN', 
        boolean 
    }
}
    // return (dispatch) => {
    //     dispatch({type:'SET_LOGIN'})
    //     state = {
    //         ...state, 
    //         loggedIn:boolean
    //     }
    // }

// export const updateTraits = traits => {
//     return {
//         type:'UPDATE_TRAITS',
//         traits
//     }
// }