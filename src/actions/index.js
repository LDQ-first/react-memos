import * as api from '../api'
import { normalize } from 'normalizr'


export const toggleAddToDo = () => ({
    type: 'TOGGLE_ADD_TODO'
})

export const toggleSideBar = () => ({
    type: 'TOGGLE_SIDEBAR'
})

export const login = (username, password) => (dispatch) => {
     if ( !username || !password ) {
         dispatch({
             type: 'USER_LOGIN_FAILURE',
             error: { clientErr: '请确保已经输入账号密码' }
         })
         return
     }
     dispatch({
         type: 'USER_LOGIN_REQUEST'
     })

     api.login(username, password)
        .then(loginedUser => {
            dispatch({
                type: 'USER_LOGIN_SUCCESS',
                loginedUser
            })
        })
        .catch(res=> {
            if(res.code === 211) {
                 console.log('无法找到用户，我们将为您注册，请注意您将会使用输入的用户名登录。')
                 return api.signUp(username, password)
                        .then(signedUser => {
                            dispatch({
                                type: 'USER_LOGIN_SUCCESS',
                                loginedUser: signedUser
                            })
                        }) 
            }
            dispatch({
                type: 'USER_LOGIN_FAILURE',
                error: res
            })
        })

}


export const logOut = () => (dispatch) => {
    api.logOut().then(() => {
        dispatch({
            type: 'USER_LOGOUT_SUCCESS'
        })
    })
    .catch(res => {
        dispatch({
            type: 'USER_LOGOUT_FAILURE',
            error: res
        })
    })
}


export const addTodo = (text, due) => (dispatch) => {
    
}