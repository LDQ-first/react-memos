import React, { Component } from 'react'
import { connect } from 'react-redux'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import { getIsAdding } from '../reducers'
import * as actions from '../actions'
import AddTodoButton from '../components/AddTodoButton'
import AddTodoPanel from '../components/AddTodoPanel'



const AddTodo = ({isAdding, toggleAddToDo}) => (
    <div className='todo-add'>
        <AddTodoButton
            isAdding = {isAdding}
            toggleAddToDo = {toggleAddToDo}
        />
        <CSSTransitionGroup 
          transitionName='addTodo-panel'
          transitionEnterTimeout={250}
          transitionLeaveTimeout={300}>
           { isAdding ?  <AddTodoPanel/>: null }
        </CSSTransitionGroup>
    </div>
)

const mapStateToProps = (state) => ({
    isAdding: getIsAdding(state)
})


export default connect(
    mapStateToProps,
    actions
)(AddTodo)
