import * as actionTypes from './actionTypes'

export const createPlaylistRequest = (userId, tracks, playlistName, accessToken) => ({
    type: actionTypes.CREATE_PLAYLIST_REQUEST,
    userId,
    tracks,
    playlistName,
    accessToken
})
