import * as actionTypes from './actionTypes';

export const fetchPlaylistTracksRequest = (url, accessToken) => ({
  type: actionTypes.FETCH_PLAYLIST_TRACKS_REQUEST,
  url,
  accessToken
});
