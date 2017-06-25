import { combineReducers } from 'redux'
import {
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  TOGGLE_TODO_SUCCESS,
  TOGGLE_TODO_FAILURE,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILURE,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE
} from './constant'

export default (filter) => {
    const handleToggle = (state, action) => {
        console.log('action.response: ', action.response)
        const { result: toggledId, entities } = action.response
        const { completed } = entities.todos[toggledId]
        const shouldRemove = (
            (completed && filter === 'active') ||
            (!completed && filter === 'completed')
        )
        return shouldRemove 
            ? state.filter(id => id !== toggledId)
            : state
    }

    const ids = (state = [], action) => {
        switch(action.type) {
            case ADD_TODO_SUCCESS:
                return filter !== 'completed'
                     ? [...state, action.response.result]
                     : state
            case TOGGLE_TODO_SUCCESS:
                return handleToggle(state, action)
            case DELETE_TODO_SUCCESS:
                return state.filter(id => id !== action.id)
            default:
                return state
        }
    }

    return combineReducers({
        ids
    })
}

export const getIds = (stateCreateList) => stateCreateList.ids
