import * as actionTypes from '../actions/actionTypes';

const initialState = {
  searchedArtists: null,
  isSearchingArtists: false,
  selectedArtists: [],
  isFetchingTracks: false
};

/**
 * This method handles the artist actions. It returns an object which will
 * be set in the data entry of the reducer.
 */
const createPlaylistReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RESET_SEARCH_ARTISTS_REQUEST: {
      return {
        ...state,
        isSearchingArtists: false,
        searchedArtists: initialState.searchedArtists
      };
    }

    case actionTypes.SEARCH_ARTISTS_REQUEST: {
      return {
        ...state,
        isSearchingArtists: true
      };
    }
    case actionTypes.SEARCH_ARTISTS_SUCCESS: {
      // formatting received response
      const searchedArtists = action.response.data.artists;

      return {
        ...state,
        isSearchingArtists: false,
        searchedArtists,
        lastUpdated: action.receivedAt
      };
    }
    case actionTypes.SEARCH_ARTISTS_FAILURE: {
      return {
        ...state,
        isSearchingArtists: false,
        searchedArtists: initialState.searchedArtists,
        lastUpdated: action.receivedAt
      };
    }

    case actionTypes.GET_ARTIST_TOP_TRACKS_REQUEST: {
      return {
        ...state,
        isFetchingTracks: true
      };
    }
    case actionTypes.GET_ARTIST_TOP_TRACKS_SUCCESS: {
      const artistTracks = action.response.data.tracks.slice(0, 5);
      const artist = Object.assign(action.artist, { tracks: artistTracks });

      state.selectedArtists.push({
        [artist.id]: artist
      });

      return {
        ...state,
        isFetchingTracks: false,
        selectedArtists: state.selectedArtists,
        lastUpdated: action.receivedAt
      };
    }
    case actionTypes.GET_ARTIST_TOP_TRACKS_FAILURE: {
      return {
        ...state,
        isFetchingTracks: false,
        lastUpdated: action.receivedAt
      };
    }

    default:
      return state;
  }
};

export default createPlaylistReducer;
