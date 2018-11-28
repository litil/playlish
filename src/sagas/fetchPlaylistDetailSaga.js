import { takeEvery, call, put } from 'redux-saga/effects';
import * as actions from '../actions/actionTypes.js';
import axios from 'axios';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* fetchPlaylistDetailWatcherSaga() {
  yield takeEvery(actions.FETCH_PLAYLIST_DETAIL_REQUEST, workerSaga);
}

// function that makes the api request and returns a Promise for response
function fetchPlaylistDetailSaga(playlistId, accessToken) {
  return axios({
    method: 'get',
    baseURL: 'https://api.spotify.com/v1',
    url: `/playlists/${playlistId}`,
    headers: {
      Authorization: 'Bearer ' + accessToken
    }
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga(action) {
  try {
    const { playlistId, accessToken } = action;
    const response = yield call(
      fetchPlaylistDetailSaga,
      playlistId,
      accessToken
    );

    if (response.error) throw response.error;

    // dispatch a success action to the store with the list of playlists
    yield put({
      type: actions.FETCH_PLAYLIST_DETAIL_SUCCESS,
      response
    });

    console.log('in saga detail', response);
    if (response.data.tracks.next) {
      // dispatch a request to fetch the next tracks
      yield put({
        type: actions.FETCH_PLAYLIST_TRACKS_REQUEST,
        url: response.data.tracks.next,
        accessToken
      });
    }
  } catch (error) {
    yield put({
      type: actions.FETCH_PLAYLIST_DETAIL_FAILURE,
      error
    });
  }
}
