export const login = () => {
    return {
        type:'LOGIN'
    }
}

export const logout = () => {
    return {
        type: "LOGOUT"
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