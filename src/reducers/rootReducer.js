import { combineReducers } from 'redux'
import userReducer from './userReducer'
import artistReducer from './artistReducer'
import playlistReducer from './playlistReducer'

const rootReducer = combineReducers({
    userReducer,
    artistReducer,
    playlistReducer
})

export default rootReducer
