import { takeEvery, call, put } from 'redux-saga/effects';
import * as actions from '../actions/actionTypes.js';
import axios from 'axios';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* fetchArtistTracksWatcherSaga() {
  yield takeEvery(actions.GET_ARTIST_TOP_TRACKS_REQUEST, workerSaga);
}

// function that makes the api request and returns a Promise for response
function fetchArtistTracks(artist, accessToken) {
  return axios({
    method: 'get',
    baseURL: 'https://api.spotify.com/v1',
    url: `/artists/${artist.id}/top-tracks`,
    headers: {
      Authorization: 'Bearer ' + accessToken
    },
    params: {
      market: 'from_token'
    }
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga(action) {
  try {
    const { artist, accessToken } = action;
    const response = yield call(fetchArtistTracks, artist, accessToken);

    if (response.error) throw response.error;

    // dispatch a success action to the store with the list of transactions
    yield put({
      type: actions.GET_ARTIST_TOP_TRACKS_SUCCESS,
      response
    });
  } catch (error) {
    yield put({
      type: actions.GET_ARTIST_TOP_TRACKS_FAILURE,
      error
    });
  }
}
