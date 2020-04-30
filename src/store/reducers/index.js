import { combineReducers } from 'redux'
import map from './mapReducer'
import user from './userReducer'
import attraction from './attractionReducer'
import general from './generalReducer'

export default combineReducers({ 
    map,
    user,
    attraction,
    general
})