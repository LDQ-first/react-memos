import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { FlatButton } from 'material-ui'
import ProgressBar from '../styled/ProgressBar'
import TopBar from '../styled/TopBar'
import NavButton from '../styled/NavButton'
import Logged from '../styled/Logged'
import * as actions from '../actions'
import { getIsFetching, getCurrentUser } from '../reducers'

const Login = (props) => {
  return (
    <FlatButton {...props} label='Login' />
  )
}


const AppBar = ({toggleSideBar, isFetching, isLogged}) => (
    <div className='todo-appbar'>
        {isFetching
            ? (<ProgressBar />) : ''
        }
        <TopBar 
            title='react-memos'
            iconElementLeft={
                <NavButton onClick={toggleSideBar}/>
            }
            iconElementRight={isLogged ? <Logged username={isLogged.attributes.username} /> : <Login />}
        />
    </div>
)

/*plain object*/
const mapStateToProps = (state, {match}) => ({
    isFetching: getIsFetching(state, match.params.filter || 'all'),
    isLogged: getCurrentUser(state)
})

export default withRouter(
    connect(
        mapStateToProps,
        actions
    )(AppBar)
)

