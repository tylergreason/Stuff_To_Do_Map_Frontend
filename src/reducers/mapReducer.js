// check if auth_token exists and base loggedIn off that 
function checkAuthToken(){
    if (localStorage.auth_token){
        return true 
    }
    return false 
}
const mapReducer = (state = {
                            loggedIn:checkAuthToken()
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
                // localStorage.clear()
                state ={
                    ...state, 
                    loggedIn:false
                }
        default: 
            return state
    }
}
export default mapReducer