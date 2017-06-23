import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { FlatButton } from 'material-ui'
import ProgressBar from '../styled/ProgressBar'
import TopBar from '../styled/TopBar'
import NavButton from '../styled/NavButton'
import Logged from '../styled/Logged'


const AppBar = ({}) => (
    <div className='todo-appbar'>
        
    </div>
)

const mapStateToProps = (state, {match}) => {

}

export default withRouter(
    connect(
        mapStateToProps,
    )(AppBar)
)

