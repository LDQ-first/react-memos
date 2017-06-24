import * as api from '../api'
import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT_FAILURE,
  USER_LOGOUT_SUCCESS
} from './constant'

export default (state = {
    currentUser: api.getCurrentUser() || null,
    error: null
}, action) => {
    switch (action.type) {
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                currentUser: action.loginedUser,
                error: null
            }
        case USER_LOGOUT_SUCCESS:
            return {
                ...state,
                currentUser: null
            }
        case USER_LOGIN_FAILURE:
        case USER_LOGOUT_FAILURE:
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

export const getCurrentUser = (stateUserInfo) => stateUserInfo.currentUser
export const getLogError = (stateUserInfo) => stateUserInfo.error