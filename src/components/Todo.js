import React, { Component } from 'react'
import classNames from 'classnames'
import TodoItem from '../styled/TodoItem'
import TodoText from '../styled/TodoText'
import DeleteBtn from '../styled/DeleteBtn'
import TodoCheckBox from '../styled/TodoCheckBox'
import { debounce } from 'underscore'

export default class Todo extends Component {

    constructor (props) {
        super(props)
        this.handleOnChange = debounce(this.props.handleOnChange, 500)
    }

    render() {
        const { isToday, handleOnCheck, completed, handleDelete, text, name } = this.props

        return (
            <TodoItem>
                <TodoCheckBox
                    defaultChecked={completed}
                    onClick = {handleOnCheck}
                />
                <TodoText
                    className = {
                        classNames({
                            completed: completed,
                            today: isToday
                        })
                    }
                    name={name}
                    defaultValue={text}
                    fullWidth
                    multiLine
                    disabled={completed}
                    lineThrough={completed}
                    redText={isToday}
                    underlineStyle={{borderColor: 'transparent'}}
                    underlineDisabledStyle={{border: 'none'}}
                    onChange={() => {
                        this.handleOnChange(this.input.getValue())
                    }}
                    innerRef={node => this.input = node}
                />
                <DeleteBtn
                    onClick={handleDelete}
                />
            </TodoItem>
        )
    }
}