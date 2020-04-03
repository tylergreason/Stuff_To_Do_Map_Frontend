// check if auth_token exists and base loggedIn off that 
function checkAuthToken(){
    if (localStorage.auth_token){
        return true 
    }
    return false 
}

const defaultState = {
                        loggedIn:checkAuthToken(), 
                        map:{
                            attractions:[], 
                            southWestBounds:'', 
                            northEastBounds:''
                        }
                    }

const mapReducer = (state = defaultState, action) => {
    switch(action.type){
        case 'LOGIN': 
                state = {
                    ...state, 
                    loggedIn:true
                }
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