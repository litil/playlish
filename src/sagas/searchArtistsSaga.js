import { takeEvery, call, put } from 'redux-saga/effects';
import * as actions from '../actions/actionTypes.js';
import axios from 'axios';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* searchArtistsWatcherSaga() {
  yield takeEvery(actions.SEARCH_ARTISTS_REQUEST, workerSaga);
}

// function that makes the api request and returns a Promise for response
function searchArtists(keyword, accessToken) {
  return axios({
    method: 'get',
    baseURL: 'https://api.spotify.com/v1',
    url: '/search',
    headers: {
      Authorization: 'Bearer ' + accessToken
    },
    params: {
      client_id: '341cbbaadca743aba2dd3f99302f623f',
      q: keyword,
      type: 'artist',
      limit: '5',
      scope: 'user-read-private'
    }
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga(action) {
  try {
    const response = yield call(
      searchArtists,
      action.keyword,
      action.accessToken
    );

    if (response.error) throw response.error;

    // dispatch a success action to the store with the list of transactions
    yield put({
      type: actions.SEARCH_ARTISTS_SUCCESS,
      response
    });
  } catch (error) {
    yield put({
      type: actions.SEARCH_ARTISTS_FAILURE,
      error
    });
  }
}
