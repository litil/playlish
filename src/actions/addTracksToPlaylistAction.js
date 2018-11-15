import * as actionTypes from './actionTypes'

export const addTracksPlaylistRequest = (playlistId, tracks, accessToken) => ({
    type: actionTypes.ADD_TRACKS_PLAYLIST_REQUEST,
    playlistId,
    tracks,
    accessToken
})
