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


const SideBar = ({}) => (
    <div className='todo-sidebar'>
        <Drawer>
            <NavLink>
                <MenuItem />
            </NavLink>
            <NavLink>
                <MenuItem />
            </NavLink>
            <NavLink>
                <MenuItem />
            </NavLink>
            <NavLink>
                <MenuItem />
            </NavLink>
        </Drawer>
    </div>
)

const mapStateToProps = (state) => {

}

export default withRouter(
    connect(
        mapStateToProps,
    )(SideBar)
)