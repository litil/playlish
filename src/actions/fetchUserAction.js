import * as actionTypes from './actionTypes'

export const fetchUserRequest = (accessToken) => ({
    type: actionTypes.FETCH_USER_REQUEST,
    accessToken
})
