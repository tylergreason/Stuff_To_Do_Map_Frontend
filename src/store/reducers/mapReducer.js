const defaultState = {
                        
                        attractions:[], 
                        southWestBounds:'', 
                        northEastBounds:'',
                        myAttractions:[],
                        newAddress:{},
                        success:false, 
                        errors:false
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
                    errors:false,
                    success:true
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
        case 'ADD_ATTRACTION_ERRORS':
                return state = {
                ...state, 
                success:false,
                errors: action.errors
            }
        case 'RESET_NEW_ATTRACTION_SUCCESS':
            return state = {
                ...state, 
                success:false, 
                errors:false
            }
        default: 
            return state
    }
}
export default mapReducer