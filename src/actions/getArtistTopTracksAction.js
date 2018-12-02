import * as actionTypes from './actionTypes';

export const getArtistTopTracksRequest = (artist, accessToken) => ({
  type: actionTypes.GET_ARTIST_TOP_TRACKS_REQUEST,
  artist,
  accessToken
});
