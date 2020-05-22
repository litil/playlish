import * as actionTypes from './actionTypes';

export const addTracksPlaylistRequest = (playlistId, tracks, accessToken, userId) => ({
  type: actionTypes.ADD_TRACKS_PLAYLIST_REQUEST,
  playlistId,
  tracks,
  accessToken,
  userId
});
