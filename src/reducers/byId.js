export default (state={}, action) => {
    if(action.response) {
        return {
            ...state,
            ...action.response.entities.todos
        }
    }
    return state
}

export const getTodo = (stateByid, id) => stateByid[id]