import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import BottomBar from './BottomBar'


class Main extends Component {
    componentDidMount () {
        console.log('main loaded')
    }

    render () {

        return (
            <div className='todo-main'>
                <AddTodo />
                <VisibleTodoList />
                <BottomBar />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(Main)

