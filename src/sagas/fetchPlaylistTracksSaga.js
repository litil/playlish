import { takeEvery, call, put } from 'redux-saga/effects';
import * as actions from '../actions/actionTypes.js';
import axios from 'axios';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* fetchPlaylistTracksWatcherSaga() {
  yield takeEvery(actions.FETCH_PLAYLIST_TRACKS_REQUEST, workerSaga);
}

// function that makes the api request and returns a Promise for response
function fetchPlaylistTracksSaga(url, accessToken) {
  return axios({
    method: 'get',
    baseURL: url,
    headers: {
      Authorization: 'Bearer ' + accessToken
    }
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga(action) {
  try {
    const { url, accessToken } = action;
    const response = yield call(fetchPlaylistTracksSaga, url, accessToken);

    if (response.error) throw response.error;

    // dispatch a success action to the store with the list of tracks
    yield put({
      type: actions.FETCH_PLAYLIST_TRACKS_SUCCESS,
      response
    });

    console.log('in saga', response);
    if (response.data.next) {
      // dispatch a request to fetch the next tracks
      yield put({
        type: actions.FETCH_PLAYLIST_TRACKS_REQUEST,
        url: response.data.next,
        accessToken
      });
    }
  } catch (error) {
    yield put({
      type: actions.FETCH_PLAYLIST_TRACKS_FAILURE,
      error
    });
  }
}
