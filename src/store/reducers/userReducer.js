// check if auth_token exists and base loggedIn off that 
function checkAuthToken(){
    if (localStorage.auth_token){
        return true 
    }
    return false 
}
const defaultState = {
    loggedIn:checkAuthToken(),
    // use success and errors to check if logged in or if signup succeeded or if there are errors from the backend
    success:false, 
    errors:false,
    user:''
}

const userReducer = (state=defaultState,action)=>{
    switch(action.type){
        case 'LOGIN': 
            console.log('login firing')
            return state = {
                ...state, 
                loggedIn:true
            }
        case 'LOGOUT': 
            return state = {
                ...state, 
                loggedIn:false
            }
        case 'LOGIN_SIGNUP_SUCCESS': 
            return state = {
                ...state, 
                loggedIn:true,
                signupSuccess:true, 
                signupErrors:false
            }
        case 'LOGIN_SIGNUP_ERROR': 
        return state = {
            ...state, 
            loggedIn:false,
            signupSuccess:false, 
            signupErrors:true
        }
        case 'RESET_LOGIN_SIGNUP_SUCCESS': 
        return state = {
            ...state,
            success:false, 
            errors:false
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