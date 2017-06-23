import React, { Component } from 'react'
import classNames from 'classnames'
import TodoItem from '../styled/TodoItem'
import TodoText from '../styled/TodoText'
import DeleteBtn from '../styled/DeleteBtn'
import TodoCheckBox from '../styled/TodoCheckBox'


export default class Todo extends Component {


    render() {
        return (
            <TodoItem>
                <TodoCheckBox/>
                <TodoText/>
                <DeleteBtn/>
            </TodoItem>
        )
    }
}