import { fork } from 'redux-saga/effects';
import { fetchUserWatcherSaga } from './fetchUserSaga';
import { addArtistWatcherSaga } from './addArtistSaga';
import { fetchArtistTracksWatcherSaga } from './fetchArtistTracksSaga';
import { createPlaylistWatcherSaga } from './createPlaylistSaga';
import { addTracksPlaylistWatcherSaga } from './addTracksPlaylistSaga';

// NEW SAGA
import { listPlaylistsWatcherSaga } from './listPlaylistsSaga';

export default function* rootSaga() {
  yield [
    fork(fetchUserWatcherSaga),
    fork(addArtistWatcherSaga),
    fork(fetchArtistTracksWatcherSaga),
    fork(createPlaylistWatcherSaga),
    fork(addTracksPlaylistWatcherSaga),
    fork(listPlaylistsWatcherSaga)
  ];
}
