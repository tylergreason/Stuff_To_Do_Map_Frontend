// check if auth_token exists and base loggedIn off that 
function checkAuthToken(){
    if (localStorage.auth_token){
        return true 
    }
    return false 
}
const mapReducer = (state = {
                            loggedIn:checkAuthToken(), 
                            map:{
                                attractions:[], 
                                southWestBounds:'', 
                                northEastBounds:''
                            }
                        }, 
                        action) => {
    switch(action.type){
        case 'LOGIN': 
                state = {
                    ...state, 
                    loggedIn:true
                }
                console.log(state)
        case 'LOGOUT': 
                state = {
                    ...state, 
                    loggedIn:false
                }
        case 'GET_ATTRACTIONS': 
                state = {
                    ...state, 
                    map: {
                        ...state.map, 
                        attractions: action.attractions
                    }
                }
        default: 
            return state
    }
}
export default mapReducer