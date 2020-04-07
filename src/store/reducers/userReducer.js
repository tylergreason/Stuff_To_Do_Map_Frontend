// check if auth_token exists and base loggedIn off that 
function checkAuthToken(){
    if (localStorage.auth_token){
        return true 
    }
    return false 
}
const defaultState = {
    loggedIn:checkAuthToken(),
    signupSuccess:false, 
    signupErrors:false
}

const userReducer = (state=defaultState,action)=>{
    switch(action.type){
        case 'LOGIN': 
            return state = {
                ...state, 
                logginIn:true
            }
        case 'SIGNUP_SUCCESS': 
            return state = {
                ...state, 
                loggedIn:true,
                signupSuccess:true, 
                signupErrors:false
            }
        case 'SIGNUP_ERROR': 
        return state = {
            ...state, 
            loggedIn:false,
            signupSuccess:false, 
            signupErrors:true
        }
        case 'RESET_SIGNUP_SUCCESS': 
        return state = {
            ...state,
            success:false, 
            errors:false
        }
        default: 
            return state 
    }
}

export default userReducer