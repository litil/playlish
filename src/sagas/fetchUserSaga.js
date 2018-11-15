import { takeEvery, call, put } from "redux-saga/effects"
import * as actions from '../actions/actionTypes.js'
import axios from "axios"

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* fetchUserWatcherSaga() {
  yield takeEvery(actions.FETCH_USER_REQUEST, workerSaga);
}

// function that makes the api request and returns a Promise for response
function fetchUser(accessToken) {
  return axios({
    method: 'get',
    baseURL: 'https://api.spotify.com/v1',
    url: '/me',
    headers: {
       'Authorization': 'Bearer ' + accessToken
    }
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga(action) {
  try {
    const response = yield call(fetchUser, action.accessToken);

    if (response.error) throw response.error

    // dispatch a success action to the store with the list of transactions
    yield put({
        type: actions.FETCH_USER_SUCCESS,
        response
    })

  } catch (error) {
      yield put({
          type: actions.FETCH_USER_FAILURE,
          error
      })
  }
}
