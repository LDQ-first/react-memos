import { combineReducers } from 'redux'
import byId, * as fromById from './byId'
import * as api from '../api'
import control, * as fromControl from './control.js'


/*api.initLeanCloud()*/

export default combineReducers({
    byId,
    control
})




export const getIsSidebarOpen = (state) => 
    fromControl.getIsSidebarOpen(state.control)

