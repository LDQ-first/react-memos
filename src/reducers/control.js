import { combineReducers } from 'redux'
import {
  TOGGLE_SIDEBAR,
  TOGGLE_ADD_TODO,
  ADD_TODO_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE
} from './constant'


const isSidebarOpen = (state = false, action) => {
    switch(action.type) {
        case TOGGLE_SIDEBAR:
            return !state
        default:
            return state
    }
}

const isAdding = (state = false, action) => {
    switch(action.type) {
        case TOGGLE_ADD_TODO:
        case ADD_TODO_SUCCESS:
            return !state
        default: 
            return state
    }
}

const isLogging = (state = false, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return state = true
        case USER_LOGIN_SUCCESS:
        case USER_LOGIN_FAILURE: 
            return state = false
        default: 
            return state
    }
}

export default combineReducers({
    isSidebarOpen,
    isAdding,
    isLogging
})

export const getIsSidebarOpen = (stateControl) => stateControl.isSidebarOpen

export const getIsAdding = (stateControl) => stateControl.isAdding

export const getIsLogging = (stateControl) => stateControl.isLogging