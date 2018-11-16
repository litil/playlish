import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isFetchingUser: false,
  user: null
};

/**
 * This method handles the signinSpotify actions. It returns an object which will
 * be set in the data entry of the reducer.
 */
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER_REQUEST: {
      return {
        ...state,
        isFetchingUser: true
      };
    }
    case actionTypes.FETCH_USER_SUCCESS: {
      // formatting received response
      return {
        ...state,
        isFetchingUser: false,
        user: action.response.data,
        lastUpdated: action.receivedAt
      };
    }
    case actionTypes.FETCH_USER_FAILURE: {
      return {
        ...state,
        isFetchingUser: false,
        user: undefined,
        lastUpdated: action.receivedAt
      };
    }
    default:
      return state;
  }
};

export default userReducer;
