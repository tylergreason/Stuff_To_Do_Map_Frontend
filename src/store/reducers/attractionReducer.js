const defaultState = {
    attraction:''
}

const attractionReducer = (state=defaultState,action)=>{
    switch(action.type){
        case 'GET_ATTRACTION': 
            return state = {
                ...state, 
                attraction:action.attraction
            }
        case 'ADD_REVIEW':
            return state = {
                ...state, 
                attraction:action.attraction
            }
        case 'DELETE_REVIEW':
            return state = {
                ...state, 
                attraction: action.attraction
            }
        default: 
            return state 
    }
}
export default attractionReducer