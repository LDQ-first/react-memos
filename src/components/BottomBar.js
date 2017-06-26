import React from 'react'
import { BottomNavigation } from 'material-ui/BottomNavigation'
import BottomBarConatiner from '../styled/BottomBarContainer'
import FilterLink from '../containers/FilterLink'

export default () => (
    <BottomBarConatiner className='todo-bottomBar'>
        <BottomNavigation>
            <FilterLink filter='all' />
            <FilterLink filter='active' />
            <FilterLink filter='completed' />
        </BottomNavigation>
    </BottomBarConatiner>
)