import * as actionTypes from './actionTypes';

export const listPlaylistsRequest = (userId, accessToken) => ({
  type: actionTypes.LIST_PLAYLISTS_REQUEST,
  userId,
  accessToken
});
