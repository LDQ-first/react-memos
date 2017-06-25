import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import * as actions from '../actions'
import Scroller from '../styled/Scroller'
import ListContainer from '../styled/ListContainer'
import TodoList from '../components/TodoList'

class VisibleTodoList extends Component {

    render() {

        return (
            <Scroller>
                <CSSTransitionGroup
                     transitionName='todo-list-ct'
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={250}
                >

                </CSSTransitionGroup>
            </Scroller>
        )
    }
}

const mapStateToProps = (state, {match}) => {
    const filter = match.params.filter || 'all'
    return {
        filter
    }
}

export default withRouter(connect(
    mapStateToProps,
    actions
)(VisibleTodoList)
)