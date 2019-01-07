import { takeEvery, call, put } from 'redux-saga/effects';
import * as actions from '../actions/actionTypes.js';
import axios from 'axios';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* listPlaylistsWatcherSaga() {
  yield takeEvery(actions.LIST_PLAYLISTS_REQUEST, workerSaga);
}

// function that makes the api request and returns a Promise for response
function listPlaylistsSaga(userId, accessToken) {
  return axios({
    method: 'get',
    baseURL: 'https://api.spotify.com/v1',
    url: `/users/${userId}/playlists`,
    headers: {
      Authorization: 'Bearer ' + accessToken
    }
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga(action) {
  try {
    const { userId, accessToken } = action;
    const response = yield call(listPlaylistsSaga, userId, accessToken);

    if (response.error) throw response.error;

    // dispatch a success action to the store with the list of playlists
    yield put({
      type: actions.LIST_PLAYLISTS_SUCCESS,
      response
    });
  } catch (error) {
    yield put({
      type: actions.LIST_PLAYLISTS_FAILURE,
      error
    });
  }
}
