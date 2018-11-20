import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isWorking: false,
  selectedArtists: []
};

/**
 * This method handles the artist actions. It returns an object which will
 * be set in the data entry of the reducer.
 */
const artistReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REMOVE_ARTIST: {
      const artistToRemove = action.artist;
      const selectedArtists = state.selectedArtists
        ? state.selectedArtists.filter(a => a.id !== artistToRemove.id)
        : initialState.selectedArtists;
      return {
        ...state,
        selectedArtists,
        lastUpdated: action.receivedAt
      };
    }
    case actionTypes.ADD_ARTIST_REQUEST: {
      return {
        ...state,
        isWorking: true
      };
    }
    case actionTypes.ADD_ARTIST_SUCCESS: {
      // formatting received response
      const artistsResults = action.response.data.artists;
      const artist = artistsResults ? artistsResults.items[0] : null;
      if (
        artistsResults &&
        !state.selectedArtists.find(o => o.id === artist.id)
      ) {
        state.selectedArtists.unshift(artist);
      }

      return {
        ...state,
        isWorking: false,
        selectedArtists: state.selectedArtists,
        lastUpdated: action.receivedAt
      };
    }
    case actionTypes.ADD_ARTIST_FAILURE: {
      return {
        ...state,
        isWorking: false,
        selectedArtists: undefined,
        lastUpdated: action.receivedAt
      };
    }
    default:
      return state;
  }
};

export default artistReducer;
