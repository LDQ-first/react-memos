import * as api from '../api'
import { normalize } from 'normalizr'


export const toggleAddToDo = () => ({
    type: 'TOGGLE_ADD_TODO'
})

export const toggleSideBar = () =>  ({
    type: 'TOGGLE_SIDEBAR'
})



export const addTodo = (text, due) => (dispatch) => {
    
}