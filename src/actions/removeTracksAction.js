import * as actionTypes from './actionTypes';

export const removeTracksRequest = (tracksUris, accessToken) => ({
  type: actionTypes.REMOVE_TRACKS_REQUEST,
  tracksUris,
  accessToken
});
