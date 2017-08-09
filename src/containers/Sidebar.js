import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Account from 'material-ui/svg-icons/social/person'
import MainList from 'material-ui/svg-icons/action/assignment'
/*import Face from 'material-ui/svg-icons/action/face'*/
import Subject from 'material-ui/svg-icons/action/subject'
/*import FontIcon from 'material-ui/FontIcon'*/
import NormalLink from '../styled/NormalLink'
import * as actions from '../actions'
import { getIsSidebarOpen, getCurrentUser } from '../reducers'

const SideBar = ({isSidebarOpen, toggleSideBar, isLogged}) => (
    <div className='todo-sidebar'>
        <Drawer
            open={isSidebarOpen}
            docked={false}
            onRequestChange={toggleSideBar}
            overlayStyle={{
                zIndex: 800,
                backgroundColor: 'rgba(0,0,0, 0.3)'
            }}
            
        >
            <NavLink
                to={'login'}
                style={{
                    textDecoration: 'none'
                }}
                >
                <MenuItem 
                    primaryText={isLogged ? isLogged.attributes.username : '登录'}
                    leftIcon={<Account />}
                    onClick={toggleSideBar}
                />
            </NavLink>
            <NavLink
                 to='all'
                 style={{
                    textDecoration: 'none'
                }}
                 >
                <MenuItem 
                    primaryText={isLogged ? '全部事项' : '全部事项(请先登录)'}
                    leftIcon={<MainList />}
                    onClick={toggleSideBar}
                />
            </NavLink>
            <NormalLink
                 href='https://github.com/LDQ-first/'
                 target='_blank'
                 >
                <MenuItem 
                    primaryText={'Github'}
                    style={{color: '#3f51b5'}}
                    leftIcon={
                        <i 
                            className="fa fa-github"
                            aria-hidden="true"
                            style={{
                            fontSize: 24,
                            marginLeft: 12,
                            color: '#3f51b5'
                            }}
                        >
                        </i>}
                    onClick={toggleSideBar}
                 />
            </NormalLink>
            <NormalLink
                 href='https://github.com/LDQ-first/react-memos'
                 target='_blank'>
                <MenuItem 
                    primaryText={'Project'}
                    style={{color: '#E91E63'}}
                    leftIcon={<Subject style={{fill: '#E91E63'}} />}
                    onClick={toggleSideBar}
                />
            </NormalLink>
        </Drawer>
    </div>
)

const mapStateToProps = (state) =>  ({
    isSidebarOpen: getIsSidebarOpen(state),
    isLogged: getCurrentUser(state)
})

export default  connect(
    mapStateToProps,
    actions
)(SideBar)
