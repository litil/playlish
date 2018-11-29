import { combineReducers } from 'redux';
import userReducer from './userReducer';
import artistReducer from './artistReducer';
import playlistReducer from './playlistReducer';
import playlistTracksReducer from './playlistTracksReducer';

const rootReducer = combineReducers({
  userReducer,
  artistReducer,
  playlistReducer,
  playlistTracksReducer
});

export default rootReducer;
