const mapReducer = (state = {
                            loggedIn:false
                        }, 
                        action) => {
    switch(action.type){
        case 'SET_LOGIN': 
                console.log(action.boolean)
                state = {
                    ...state, 
                    loggedIn:true
                }
                console.log(state)
        default: 
            return state
    }
}
export default mapReducer