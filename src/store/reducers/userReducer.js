// check if auth_token exists and base loggedIn off that 
function checkAuthToken(){
    if (localStorage.auth_token){
        return true 
    }
    return false 
}
const defaultState = {
    loggedIn:checkAuthToken(),
    user:''
}

const userReducer = (state=defaultState,action)=>{
    switch(action.type){
        case 'LOGIN': 
            return state = {
                ...state, 
                loggedIn:true,
                user:action.user
            }
        case 'LOGOUT': 
            return state = {
                ...state, 
                loggedIn:false, 
                user:''
            }
        case 'UPDATE_PASSWORD': {
            return state
        }
        case 'UPDATE_USER':{
            return state = {
                ...state, 
                user: action.user
            }
        }
        case 'UPDATE_EMAIL': {
            return state = {
                ...state, 
                user: {
                    ...state.user, 
                    email:action.email
                }
            }
        }
        case 'DELETE_USER': {
            return state = {
                ...state, 
                loggedIn:false,
                user:''
            }
        }
        case 'GET_USER': 
            return state = {
                ...state, 
                user: action.user
        }
        default: 
            return state 
    }
}
export default userReducer