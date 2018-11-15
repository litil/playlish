import { fork } from 'redux-saga/effects'
import { fetchUserWatcherSaga } from './fetchUserSaga'
import { addArtistWatcherSaga } from './addArtistSaga'
import { fetchArtistTracksWatcherSaga } from './fetchArtistTracksSaga'
import { createPlaylistWatcherSaga } from './createPlaylistSaga'
import { addTracksPlaylistWatcherSaga } from './addTracksPlaylistSaga'

export default function* rootSaga() {
    yield [
        fork(fetchUserWatcherSaga),
        fork(addArtistWatcherSaga),
        fork(fetchArtistTracksWatcherSaga),
        fork(createPlaylistWatcherSaga),
        fork(addTracksPlaylistWatcherSaga)
	];
}
