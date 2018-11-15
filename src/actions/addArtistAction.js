import * as actionTypes from './actionTypes'

export const addArtistRequest = (artistName, accessToken) => ({
    type: actionTypes.ADD_ARTIST_REQUEST,
    artistName,
    accessToken
})

export const getArtistTopTracksRequest = (artist, accessToken) => ({
    type: actionTypes.GET_ARTIST_TOP_TRACKS_REQUEST,
    artist,
    accessToken
})
