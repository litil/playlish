import { fork, all } from 'redux-saga/effects';

import { addArtistWatcherSaga } from './addArtistSaga';
import { fetchArtistTracksWatcherSaga } from './fetchArtistTracksSaga';
import { createPlaylistWatcherSaga } from './createPlaylistSaga';
import { addTracksPlaylistWatcherSaga } from './addTracksPlaylistSaga';

// NEW SAGA
import { fetchUserWatcherSaga } from './fetchUserSaga';
import { listPlaylistsWatcherSaga } from './listPlaylistsSaga';
import { fetchPlaylistDetailWatcherSaga } from './fetchPlaylistDetailSaga';
import { fetchPlaylistTracksWatcherSaga } from './fetchPlaylistTracksSaga';
import { searchArtistsWatcherSaga } from './searchArtistsSaga';

export default function* rootSaga() {
  yield all([
    fork(fetchUserWatcherSaga),
    fork(listPlaylistsWatcherSaga),
    fork(fetchPlaylistDetailWatcherSaga),
    fork(fetchPlaylistTracksWatcherSaga),

    fork(addArtistWatcherSaga),
    fork(fetchArtistTracksWatcherSaga),
    fork(createPlaylistWatcherSaga),
    fork(addTracksPlaylistWatcherSaga),
    fork(searchArtistsWatcherSaga)
  ]);
}
