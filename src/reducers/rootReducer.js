import { combineReducers } from 'redux';
import userReducer from './userReducer';
import artistReducer from './artistReducer';
import createPlaylistReducer from './createPlaylistReducer';
import playlistReducer from './playlistReducer';
import playlistTracksReducer from './playlistTracksReducer';

const rootReducer = combineReducers({
  userReducer,
  artistReducer,
  createPlaylistReducer,
  playlistReducer,
  playlistTracksReducer
});

export default rootReducer;
