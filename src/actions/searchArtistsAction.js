import * as actionTypes from './actionTypes';

export const searchArtistsRequest = (keyword, accessToken) => ({
  type: actionTypes.SEARCH_ARTISTS_REQUEST,
  keyword,
  accessToken
});

export const resetSearchArtistsRequest = () => ({
  type: actionTypes.RESET_SEARCH_ARTISTS_REQUEST
});
