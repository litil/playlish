import { takeEvery, call, put } from 'redux-saga/effects';
import * as actions from '../actions/actionTypes.js';
import axios from 'axios';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* addTracksPlaylistWatcherSaga() {
  yield takeEvery(actions.ADD_TRACKS_PLAYLIST_REQUEST, workerSaga);
}

// function that makes the api request and returns a Promise for response
function addTracksPlaylist(playlistId, tracks, accessToken) {
  // curl -i -X POST "https://api.spotify.com/v1/playlists/7oi0w0SLbJ4YyjrOxhZbUv/tracks?uris=spotify%3Atrack%3A4iV5W9uYEdYUVa79Axb7Rh,spotify%3Atrack%3A1301WleyT98MSxVHPZCA6M" -H "Authorization: Bearer {your access token}" -H "Accept: application/json"
  const uris = tracks.map(t => t.uri).join(',');

  return axios({
    method: 'post',
    baseURL: 'https://api.spotify.com/v1',
    url: `/playlists/${playlistId}/tracks`,
    headers: {
      Authorization: 'Bearer ' + accessToken
    },
    params: {
      uris
    }
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga(action) {
  try {
    const response = yield call(
      addTracksPlaylist,
      action.playlistId,
      action.tracks,
      action.accessToken
    );

    if (response.error) throw response.error;

    // dispatch a success action to the store with the list of transactions
    yield put({
      type: actions.ADD_TRACKS_PLAYLIST_SUCCESS,
      response
    });
  } catch (error) {
    yield put({
      type: actions.ADD_TRACKS_PLAYLIST_FAILURE,
      error
    });
  }
}
