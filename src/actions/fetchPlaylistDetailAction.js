import * as actionTypes from './actionTypes';

export const fetchPlaylistDetailRequest = (playlistId, accessToken) => ({
  type: actionTypes.FETCH_PLAYLIST_DETAIL_REQUEST,
  playlistId,
  accessToken
});
