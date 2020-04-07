import { combineReducers } from 'redux'
import map from './mapReducer'
import user from './userReducer'

export default combineReducers({ 
    map,
    user
})