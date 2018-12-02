import { takeEvery, call, put } from 'redux-saga/effects';
import * as actions from '../actions/actionTypes.js';
import axios from 'axios';
import { getArtistTopTracksRequest } from '../actions/getArtistTopTracksAction';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* addArtistWatcherSaga() {
  yield takeEvery(actions.ADD_ARTIST_REQUEST, workerSaga);
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga(action) {
  try {
    const response = yield call(action.artistName, action.accessToken);

    if (response.error) throw response.error;

    // dispatch a success action to the store with the list of transactions
    yield put({
      type: actions.ADD_ARTIST_SUCCESS,
      response
    });

    const artistsResults = response.data.artists;
    const artist = artistsResults ? artistsResults.items[0] : null;
    yield put(getArtistTopTracksRequest(artist, action.accessToken));
  } catch (error) {
    yield put({
      type: actions.ADD_ARTIST_FAILURE,
      error
    });
  }
}
