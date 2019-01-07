import * as actionTypes from './actionTypes';

export const fetchPlaylistTracksRequest = (url, playlistId, accessToken) => ({
  type: actionTypes.FETCH_PLAYLIST_TRACKS_REQUEST,
  url,
  playlistId,
  accessToken
});
