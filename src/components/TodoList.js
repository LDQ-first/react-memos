import React from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import TimeInfo from '../styled/TimeInfo'
import List from '../styled/List'
import Todo from './Todo'

export default ({}) => (
    <CSSTransitionGroup
      className='todo-list'
      transitionName='add-remove-item'
      transitionEnterTimeout={250}
      transitionLeaveTimeout={250}
    >
        <TimeInfo>

        </TimeInfo>
        <Todo/>
    </CSSTransitionGroup>
)