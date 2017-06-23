import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Sidebar from '../containers/Sidebar'
import AppBar from '../containers/AppBar'
import Login from '../containers/Login.js'
import Main from './Main.js'

export default () => (
    <div className='app'>
        <AppBar />
        <Sidebar />
        <Switch>
            <Route path='/login' component={Login}/>
            <Route exact path='/:filter?' component={Main} />
        </Switch>
    </div>
)