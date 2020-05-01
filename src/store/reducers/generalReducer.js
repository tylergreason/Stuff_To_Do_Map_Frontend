const defaultState = {
    windowWidth:'',
    showList:''
}

const generalReducer = (state=defaultState, action) => {
    switch(action.type){
        case 'SET_WINDOW_WIDTH': 
            return state = {
                ...state, 
                windowWidth: action.width
            }
        case "SET_SHOWLIST": 
            return state = {
                ...state, 
                showList: action.showList
            }
        default: 
            return state 
    }
}

export default generalReducer