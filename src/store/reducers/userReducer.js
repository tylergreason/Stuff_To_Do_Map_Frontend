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
                loggedIn:true
            }
        case 'LOGOUT': 
            return state = {
                ...state, 
                loggedIn:false
            }
        // case 'LOGIN_SIGNUP_SUCCESS': 
        //     return state = {
        //         ...state, 
        //         loggedIn:true,
        //         signupSuccess:true, 
        //         signupErrors:false
        //     }
        // case 'LOGIN_SIGNUP_ERROR': 
        // return state = {
        //     ...state, 
        //     loggedIn:false,
        //     signupSuccess:false, 
        //     signupErrors:true
        // }
        // case 'RESET_LOGIN_SIGNUP_SUCCESS': 
        // return state = {
        //     ...state,
        //     success:false, 
        //     errors:false
        // }
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