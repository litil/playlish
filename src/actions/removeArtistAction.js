import * as actionTypes from './actionTypes';

export const removeArtistRequest = (artist, accessToken) => ({
  type: actionTypes.REMOVE_ARTIST,
  artist,
  accessToken
});
