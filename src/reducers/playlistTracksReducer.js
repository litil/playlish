import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isFetchingTracks: false,
  playlistsTracks: {}
};

/**
 * This method handles the playlists' tracks actions. It returns an object which will
 * be set in the data entry of the reducer.
 */
const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PLAYLIST_DETAIL_SUCCESS: {
      const detail = action.response.data;
      const tracks = detail ? [detail.tracks] : [];

      // inserting the tracks into into the object
      const playlistsTracks = Object.assign(state.playlistsTracks, {
        [detail.id]: tracks
      });

      return {
        ...state,
        playlistsTracks,
        lastUpdated: action.receivedAt
      };
    }

    case actionTypes.FETCH_PLAYLIST_TRACKS_REQUEST: {
      return {
        ...state,
        isFetchingTracks: true
      };
    }
    case actionTypes.FETCH_PLAYLIST_TRACKS_SUCCESS: {
      const tracks = action.response.data;
      const existingTracks = state.playlistsTracks;

      // comment choper la playlist ID

      const playlistsTracks =
        action.response.data && actio
          ? action.response.data.items
          : initialState.playlists;
      return {
        ...state,
        isFetchingTracks: false,
        playlists,
        lastUpdated: action.receivedAt
      };
    }
    case actionTypes.FETCH_PLAYLIST_TRACKS_FAILURE: {
      return {
        ...state,
        isFetchingTracks: false,
        playlistsTracks: state.playlistsTracks,
        lastUpdated: action.receivedAt
      };
    }
    default:
      return state;
  }
};

export default playlistReducer;
