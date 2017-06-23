import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { FlatButton } from 'material-ui'
import ProgressBar from '../styled/ProgressBar'
import TopBar from '../styled/TopBar'
import NavButton from '../styled/NavButton'
import Logged from '../styled/Logged'
import * as actions from '../actions'



const AppBar = ({toggleSideBar}) => (
    <div className='todo-appbar'>
        <TopBar 
            title='react-memos'
            iconElementLeft={
                <NavButton onClick={toggleSideBar}/>
            }
        />
    </div>
)

/*plain object*/
const mapStateToProps = (state, {match}) => ({
    
})

export default withRouter(
    connect(
        mapStateToProps,
        actions
    )(AppBar)
)

