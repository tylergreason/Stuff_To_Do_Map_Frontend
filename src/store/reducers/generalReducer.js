const defaultState = {
    windowWidth:''
}

const generalReducer = (state=defaultState, action) => {
    switch(action.type){
        case 'SET_WINDOW_WIDTH': 
            return state = {
                ...state, 
                windowWidth: action.width
            }
        default: 
            return state 
    }
}

export default generalReducer