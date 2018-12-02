import { fork, all } from 'redux-saga/effects';

import { fetchUserWatcherSaga } from './fetchUserSaga';
import { listPlaylistsWatcherSaga } from './listPlaylistsSaga';
import { fetchPlaylistDetailWatcherSaga } from './fetchPlaylistDetailSaga';
import { fetchPlaylistTracksWatcherSaga } from './fetchPlaylistTracksSaga';
import { searchArtistsWatcherSaga } from './searchArtistsSaga';
import { fetchArtistTracksWatcherSaga } from './fetchArtistTracksSaga';
import { createPlaylistWatcherSaga } from './createPlaylistSaga';
import { addTracksPlaylistWatcherSaga } from './addTracksPlaylistSaga';

export default function* rootSaga() {
  yield all([
    fork(fetchUserWatcherSaga),
    fork(listPlaylistsWatcherSaga),
    fork(fetchPlaylistDetailWatcherSaga),
    fork(fetchPlaylistTracksWatcherSaga),
    fork(fetchArtistTracksWatcherSaga),
    fork(createPlaylistWatcherSaga),
    fork(addTracksPlaylistWatcherSaga),
    fork(searchArtistsWatcherSaga)
  ]);
}
