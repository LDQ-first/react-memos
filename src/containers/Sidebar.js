import React from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Account from 'material-ui/svg-icons/social/person'
import MainList from 'material-ui/svg-icons/action/assignment'
import Face from 'material-ui/svg-icons/action/face'
import FontIcon from 'material-ui/FontIcon'
import NormalLink from '../styled/NormalLink'
import * as actions from '../actions'
import { getIsSidebarOpen } from '../reducers'

const SideBar = ({isSidebarOpen, toggleSideBar}) => (
    <div className='todo-sidebar'>
        <Drawer
            open={isSidebarOpen}
        >
            <NavLink
                to={'login'}
                >
                <MenuItem />
            </NavLink>
            <NavLink
                 to='all'
                 >
                <MenuItem />
            </NavLink>
            <NormalLink
                 href='https://github.com/LDQ-first/react-memos-2'
                 target='_blank'
                 >
                <MenuItem />
            </NormalLink>
            <NormalLink
                 href='https://github.com/LDQ-first'
                 target='_blank'>
                <MenuItem />
            </NormalLink>
        </Drawer>
    </div>
)

const mapStateToProps = (state) => ({
    isSidebarOpen: getIsSidebarOpen(state),
})

export default withRouter(
    connect(
        mapStateToProps,
        actions
    )(SideBar)
)