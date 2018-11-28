import { fork } from 'redux-saga/effects';
import { addArtistWatcherSaga } from './addArtistSaga';
import { fetchArtistTracksWatcherSaga } from './fetchArtistTracksSaga';
import { createPlaylistWatcherSaga } from './createPlaylistSaga';
import { addTracksPlaylistWatcherSaga } from './addTracksPlaylistSaga';

// NEW SAGA
import { fetchUserWatcherSaga } from './fetchUserSaga';
import { listPlaylistsWatcherSaga } from './listPlaylistsSaga';
import { fetchPlaylistDetailWatcherSaga } from './fetchPlaylistDetailSaga';
import { fetchPlaylistTracksWatcherSaga } from './fetchPlaylistTracksSaga';

export default function* rootSaga() {
  yield [
    fork(fetchUserWatcherSaga),
    fork(listPlaylistsWatcherSaga),
    fork(fetchPlaylistDetailWatcherSaga),
    fork(fetchPlaylistTracksWatcherSaga),

    fork(addArtistWatcherSaga),
    fork(fetchArtistTracksWatcherSaga),
    fork(createPlaylistWatcherSaga),
    fork(addTracksPlaylistWatcherSaga)
  ];
}
