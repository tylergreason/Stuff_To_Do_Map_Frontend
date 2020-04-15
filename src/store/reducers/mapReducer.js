const defaultState = {
                        attractions:[], 
                        southWestBounds:'', 
                        northEastBounds:'',
                        myAttractions:[],
                        newAddress:{},
                        highlightAttraction:''
                    }

const mapReducer = (state = defaultState, action) => {
    switch(action.type){
        case 'GET_ATTRACTIONS': 
                return state = {
                    ...state, 
                    attractions: action.attractions
                }
        case 'GET_MY_ATTRACTIONS':
                return state = {
                    ...state, 
                    myAttractions:action.myAttractions
                }
        case 'DELETE_ATTRACTION': 
                return state = {
                    ...state, 
                    myAttractions:action.myAttractions
                }
        case 'UPDATE_ATTRACTION':
                return state = {
                    ...state, 
                    myAttractions:action.myAttractions
                }
                // debugger
        case 'ADD_ATTRACTION': 
                return state = { 
                    ...state, 
                    myAttractions:action.myAttractions,
                }
        case 'UPDATE_USER': 
                return state = {
                    ...state
                }
        case 'FILL_ATTRACTION_FORM': 
                return state = { 
                    ...state, 
                    newAddress:action.newAddress, 
                }
        case 'SET_MAP': 
            return state = {
                ...state, 
                map:action.map
            }
        case 'HIGHLIGHT_ATTRACTION': 
            return state = {
                ...state,
                highlightAttraction: action.attractionId
            }
        default: 
            return state
    }
}
export default mapReducer