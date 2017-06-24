import { combineReducers } from 'redux'
import byId, * as fromById from './byId'
import * as api from '../api'
import control, * as fromControl from './control.js'
import userInfo, * as fromUser from './userInfo'


/*api.initLeanCloud()*/

export default combineReducers({
    byId,
    control,
    userInfo
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


