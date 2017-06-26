import { combineReducers } from 'redux'
import byId, * as fromById from './byId'
import * as api from '../api'
import control, * as fromControl from './control.js'
import userInfo, * as fromUser from './userInfo'
import createList, * as fromList from './createList'

api.initLeanCloud()

const listByFilter = combineReducers({
  all: createList('all'),
  active: createList('active'),
  completed: createList('completed')
})

export default combineReducers({
    byId,
    control,
    userInfo,
    listByFilter
})



export const getIsSidebarOpen = (state) => 
    fromControl.getIsSidebarOpen(state.control)

export const getIsAdding = (state) => 
    fromControl.getIsAdding(state.control)

export const getIsLogging = (state) => 
    fromControl.getIsLogging(state.control)

export const getLogError = (state) => 
    fromUser.getLogError(state.userInfo)

export const getCurrentUser = (state) => 
    fromUser.getCurrentUser(state.userInfo)

 


export const getVisibleTodos = (state, filter) => {
    const ids = fromList.getIds(state.listByFilter[filter])
    const sortedTodos = {};
    console.log('ids: ', ids);
    console.log('state: ', state)
    console.log('filter: ', filter)
    ids.map(id => fromById.getTodo(state.byId, id))
        .sort((a,b) => (+a.due - b.due))
        .forEach(id => {
            const due = new Date(id.due).toJSON()
            if(!sortedTodos[due]) {
                sortedTodos[due] = []
            }
            sortedTodos[due].push(id)
        })
    console.log('sortedTodos: ', sortedTodos)
    return sortedTodos
}



export const getIsFetching = (state, filter) =>
  fromList.getIsFetching(state.listByFilter[filter])

export const getErrorMessage = (state, filter) =>
  fromList.getErrorMessage(state.listByFilter[filter])