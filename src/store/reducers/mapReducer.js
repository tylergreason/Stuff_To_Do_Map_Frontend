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
                        },
                        myAttractions:[]
                    }

const mapReducer = (state = defaultState, action) => {
    switch(action.type){
        case 'LOGIN': 
                state = {
                    ...state, 
                    loggedIn:true
                }
            // break
        case 'LOGOUT': 
                state = {
                    ...state, 
                    loggedIn:false
                }
            // break
        case 'GET_ATTRACTIONS': 
                state = {
                    ...state, 
                    map: {
                        ...state.map, 
                        attractions: action.attractions
                    }
                }
            // break
        case 'GET_MY_ATTRACTIONS':
                state = {
                    ...state, 
                    myAttractions:action.myAttractions
                }
        case 'DELETE_ATTRACTION': 
                state = {
                    ...state, 
                    myAttractions:action.myAttractions

                }
        default: 
            return state
    }
}
export default mapReducer