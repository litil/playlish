import { combineReducers } from 'redux';
import userReducer from './userReducer';
import createPlaylistReducer from './createPlaylistReducer';
import playlistReducer from './playlistReducer';
import playlistTracksReducer from './playlistTracksReducer';

const rootReducer = combineReducers({
  userReducer,
  createPlaylistReducer,
  playlistReducer,
  playlistTracksReducer
});

export default rootReducer;
