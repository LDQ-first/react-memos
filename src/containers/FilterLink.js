import React from 'react'
import { BottomNavigationItem } from 'material-ui/BottomNavigation'
import EventBusy from 'material-ui/svg-icons/notification/event-busy'
import EventNote from 'material-ui/svg-icons/notification/event-note'
import EventAvailable from 'material-ui/svg-icons/notification/event-available'
import BottomNavLink from '../styled/BottomNavLink'

export default ({filter}) => {
    const mapFilterToItemConfig = () => {
        switch (filter) {
            case 'all' :
                return {
                    icon: (<EventBusy />),
                    label: 'Everything'
                }
            case 'active':
                return {
                icon: (<EventNote />),
                label: 'Processing'
                }
            case 'completed':
                return {
                icon: (<EventAvailable />),
                label: 'Completed'
                }
            default:
                return {
                    icon: (<EventBusy />),
                    label: 'Everything'
                }
        }
    }

    const { label, icon } = mapFilterToItemConfig()

    return (
        <BottomNavLink
            to={!filter ? '/all' : `/${filter}`}
            exact
            activeClassName={'btn-active'}
        >
            <BottomNavigationItem 
                label = {label}
                icon = {icon}
            />
        </BottomNavLink>
    )
}